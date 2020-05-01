import { CompanyLedger } from "./companyLedger";
import { companies } from '../companies';
import chalk from "chalk";
import { isNumber } from "util";

export default class CompanyLog
{
    ledger: CompanyLedger;
    constructor(companyLedger: CompanyLedger)
    {
        this.ledger = companyLedger;
    }

    public static gerPrefix(company: typeof companies[0]): string
    {
        return company.color.bold(`> ${company.name}... `);
    }

    public getContent(): string
    {
        const companyStatus = this.positionStatus() == 'SAFE' ? chalk.green('[Safe]') : chalk.yellow('[Warn]')
        const prefix = `${this.ledger.color.bold(`> ${this.ledger.name.padEnd(18)}`)}`;
        return `${prefix} ${companyStatus}` + '\r\n' +
        `  ${"Position:".padEnd(18)} ${this.positionsList()}` + '\r\n' +
        `  ${"Position Status:".padEnd(18)} ${this.safePositionToString(this.positionStatus())}`
    }

    private positionsList(): string
    {
        let result = '';
        for (let i = 0; i < this.ledger.tiers.length; i++) {
            const element = this.ledger.tiers[i];
            if(i == this.ledger.userBand.index)
            {
                result += this.ledger.color(element)
            }
            else if(i < this.ledger.userBand.index)
            {
                result += chalk.gray.underline(element);
            }
            else
            {
                result += chalk.gray(element);
            }
            result += ' ';
        }
        return result;
    }

    private positionStatus(): 'SAFE' | 'LOW_RANK' | 'POSSIBLE_DEMOTE' | 'CLOSE_DEMOTE'
    {
        const isMaxPosition = this.ledger.userBand.index === 0;
        if(isMaxPosition && this.ledger.pointsToDemote <= 50000)
        {
            return 'POSSIBLE_DEMOTE'
        }
        else if(isMaxPosition && this.ledger.pointsToDemote <= 10000)
        {
            return 'CLOSE_DEMOTE'
        }
        else if(isMaxPosition)
        {
            return 'SAFE'
        }
        else
        {
            return 'LOW_RANK'
        }
    }

    private safePositionToString(state: 'SAFE' | 'LOW_RANK' | 'POSSIBLE_DEMOTE' | 'CLOSE_DEMOTE'): string
    {
        const isMaxPosition = this.ledger.userBand.index === 0;
        if(state == "POSSIBLE_DEMOTE")
        {
            return chalk.yellow(`Possible demote, ${this.formatNumber(this.ledger.pointsToDemote)}$ remaining`)
        }
        else if(state == 'CLOSE_DEMOTE')
        {
            return chalk.red(`Close to demote, ${this.formatNumber(this.ledger.pointsToDemote)}$ remaining`)
        }
        else if(state == 'SAFE')
        {
            return chalk.green(`Safe Max Position`)
        }
        else
        {
            return chalk.red(`Low rank, Next rank in: ${this.formatNumber(this.ledger.pointsToPromote)}$`);
        }
    }

    private formatNumber(number: number): string
    {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    }
}