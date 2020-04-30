const fetch = require('node-fetch');
const chalk = require('chalk');
const fs = require('fs');

const companies = require('./companies')

async function main()
{
    console.log();
    console.log(chalk.bold('Sea Of Thieves Ledger'))
    for await (const companyName of companiesToArray(companies))
    {
        const company = companies[companyName];
        const prefix = company.color.bold(`> ${company.name.padEnd(18)}`);
        let fetchingResult = chalk.red('unknown');
        await fetchCompany(company.url)
            .then(result => fetchingResult = formatCompany(result, company))
            .catch(error => fetchingResult = chalk.red(error));
        console.log(`${prefix} ${fetchingResult}`);
    }
}

main();

function fetchCompany(url)
{
    return new Promise((resolve, reject) =>
    {
        fetch(url, { headers: { cookie: 'rat=' + getToken() }})
            .then(res => res.json()) 
            .then(json => resolve(json))
            .catch(error => reject(error));
    });
}

function formatCompany(response, company)
{
    if(response.error)
    {
        return chalk.red('Server returned error')
    }
    else
    {
        let tier = company.tiers.reverse()[response.user.band];
        switch(response.user.band)
        {
            default:
            case 0:
                tier = chalk.green(tier + " [1]");
                break;
            case 1:
                tier = chalk.red(tier + " [2]");
                break;
            case 2:
                tier = chalk.red(tier + " [3]");
                break;
            case 3:
                tier = chalk.red(tier + " [4]");
                break;
        }
        const rankNotice = response.user.toNextRank == 0 ?  chalk.gray('Max Emissary Rank') : `Next Rank: ${company.color(response.user.toNextRank)}`
        const leaderboardRank = 'Global Position: ' + company.color('#' + response.user.rank + 1);
        return `${tier}\r\n` +
        `  ${leaderboardRank}\r\n` +
        `  ${rankNotice}\r\n`
        
    }
}

function getToken()
{
    return fs.readFileSync('token.txt').toString();
}

function companiesToArray(obj)
{
    var keys = [];
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            keys.push(i);
        }
    }
    return keys;
}