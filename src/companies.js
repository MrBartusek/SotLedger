const chalk = require('chalk');

const companies =
{
    REAPER_BONES:
    {
        url: 'https://www.seaofthieves.com/api/ledger/ReapersBones',
        name: `Reaper's Bones`,
        color: chalk.red,
        tiers: ['Follower','Servant','Keeper','Master']
    },
    GOLD_HOARDERS:
    {
        url: 'https://www.seaofthieves.com/api/ledger/GoldHoarders',
        name: 'Gold Hoarders',
        color: chalk.yellow,
        tiers: ['Castaway','Seafarer','Marauder','Captain']
    },
    ORDER_OF_SOULS:
    {
        url: 'https://www.seaofthieves.com/api/ledger/OrderOfSouls',
        name: 'Order of Souls',
        color: chalk.magenta,
        tiers: ['Apprentice','Mercenary','Chief','Grandee']
    },
    MERCHANT_ALLIANCE:
    {
        url: 'https://www.seaofthieves.com/api/ledger/MerchantAlliance',
        name: 'Merchant Alliance',
        color: chalk.blue,
        tiers: ['Apprentice','Mercenary','Chief','Grandee']
    },
    ATHENAS_FORTUNE:
    {
        url: 'https://www.seaofthieves.com/api/ledger/AthenasFortune',
        name: `Athena's Fortune`,
        color: chalk.cyan,
        tiers: ['Seeker','Voyager','Guardian','Legend']
    },
}

module.exports = companies;