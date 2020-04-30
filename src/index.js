const fetch = require('node-fetch');
const chalk = require('chalk');
const emoji = require('node-emoji');
const fs = require('fs');

const companies =
{
    REAPER_BONES:
    {
        url: 'https://www.seaofthieves.com/api/ledger/ReapersBones',
        name: `Reaper's Bones`,
        color: chalk.red
    },
    GOLD_HOARDERS:
    {
        url: 'https://www.seaofthieves.com/api/ledger/GoldHoarders',
        name: 'Gold Hoarders',
        color: chalk.yellow
    },
    ORDER_OF_SOULS:
    {
        url: 'https://www.seaofthieves.com/api/ledger/OrderOfSouls',
        name: 'Order of Souls',
        color: chalk.magenta
    },
    MERCHANT_ALLIANCE:
    {
        url: 'https://www.seaofthieves.com/api/ledger/MerchantAlliance',
        name: 'Merchant Alliance',
        color: chalk.blue
    },
    ATHENAS_FORTUNE:
    {
        url: 'https://www.seaofthieves.com/api/ledger/AthenasFortune',
        name: `Athena's Fortune`,
        color: chalk.cyan
    },
}

async function main()
{
    console.log();
    console.log(chalk.bold('Sea Of Thieves Ledger'))
    for await (const companyName of companiesToArray(companies))
    {
        const company = companies[companyName];
        let fetchingResult = chalk.red('unknown');
        await fetchCompany(company.url)
            .then(result => fetchingResult = formatCompany(result))
            .catch(error => fetchingResult = chalk.red(error));
        console.log(`${formatPrefix(company)} ${fetchingResult}`);
    }
}

function fetchCompany(url)
{
    return new Promise((resolve,reject) =>
    {
        fetch(url, { headers: { cookie: 'rat=' + getToken() }})
            .then(res => res.json()) 
            .then(json => resolve(json))
            .catch(error => reject(error));
    });
}

function formatCompany(object)
{
    if(object.error)
    {
        return chalk.red('Server returned error')
    }
    else
    {
        return object.user.score;
    }
}

function getToken()
{
    return fs.readFileSync('token.txt').toString();
}

function formatPrefix(company)
{
    return company.color.bold((`> ${company.name}`).padEnd(20))
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

main();