const fetch = require('node-fetch');
const chalk = require('chalk');
const emoji = require('node-emoji')

const companies =
{
    REAPER_BONES:
    {
        url: 'https://www.seaofthieves.com/api/ledger/ReaperBones',
        name: `Reaper's Bones`,
        color: chalk.red,
        symbol: '⌛'
    },
    GOLD_HOARDERS:
    {
        url: 'https://www.seaofthieves.com/api/ledger/GoldHoarders',
        name: 'Gold Hoarders',
        color: chalk.yellow,
        symbol: '💰'
    },
    ORDER_OF_SOULS:
    {
        url: 'https://www.seaofthieves.com/api/ledger/OrderOfSouls',
        name: 'Order of Souls',
        color: chalk.magenta,
        symbol: '💀'
    },
    MERCHANT_ALLIANCE:
    {
        url: 'https://www.seaofthieves.com/api/ledger/MerchantAlliancee',
        name: 'Merchant Alliance',
        color: chalk.blue,
        symbol: '🌎'
    },
    ATHENAS_FORTUNE:
    {
        url: 'https://www.seaofthieves.com/api/ledger/AthenasFortune',
        name: `Athena's Fortune`,
        color: chalk.cyan,
        symbol: '✨'
    },
}

async function main()
{
    console.log();
    console.log(chalk.bold('Sea Of Thieves Ledger'))
    for await (const companyName of companiesToArray(companies))
    {
        const company = companies[companyName];
        const fetchingResult = chalk.red('failed to fetch');
        console.log(`${formatPrefix(company)} ${fetchingResult}`);
    }
}

function formatPrefix(company)
{
    if(process.argv.includes('--no-emoji'))
    {
        company.symbol = ">";
    }

    return company.color.bold((`${company.symbol} ${company.name}`).padEnd(20))
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