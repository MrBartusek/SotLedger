import { CompanyLedger } from "./companyLedger";
import { companies } from '../companies';
import chalk from "chalk";

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
        return this.ledger.color(`> ${this.ledger.name}`) + '\r\n' +
            `  Position: ${this.safePosition()}`
    }

    safePosition(): string
    {
        const isMaxPosition = this.ledger.userBand.index === 0;
        if(isMaxPosition && this.ledger.pointsToDemote <= 50000)
        {
            return chalk.yellow(`Possible demote from: ${this.ledger.userBand.positionName} | ${this.ledger.pointsToDemote} points remaining`)
        }
        else if(isMaxPosition && this.ledger.pointsToDemote <= 10000)
        {
            return chalk.red(`Close to demote from: ${this.ledger.userBand.positionName}] | ${this.ledger.pointsToDemote} points remaining`)
        }
        else if(isMaxPosition)
        {
            return chalk.green(`Safe ${this.ledger.userBand.positionName} Position`)
        }
        else
        {
            return chalk.red(`Low rank: ${this.ledger.userBand.positionName} | Next rank in: ${this.ledger.pointsToPromote}`);
        }
    }
}