const chalk = require('chalk');

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

module.exports = companies;