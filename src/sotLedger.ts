import chalk from 'chalk';
import fs from 'fs';
import { companies } from './companies';
import CompanyLog from './models/companyLog';
import Requester from './requester'
import { CompanyLedger } from './models/companyLedger';

export default class SotLedger
{
    public async printLedger(): Promise<void>
    {
        console.log();
        console.log(chalk.bold('SotLedger: '))
        for await (const company of companies)
        {
            process.stdout.write(CompanyLog.gerPrefix(company))

            await new Requester().requestCompany(company, this.getToken())
                .then((ledger: CompanyLedger) =>
                {
                    process.stdout.cursorTo(0);
                    process.stdout.write(chalk.red(`${new CompanyLog(ledger).getContent()}\r\n\r\n`));
                })
                .catch(error =>
                {
                    process.stdout.write(chalk.red(`Failed to load(${error})\r\n\r\n`));
                });
        }
    }
    private getToken()
    {
        return fs.readFileSync('token.txt').toString();
    }
}

