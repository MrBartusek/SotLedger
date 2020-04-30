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
            .then(result => fetchingResult = formatCompany(result))
            .catch(error => fetchingResult = chalk.red(error));
        console.log(`${prefix} ${fetchingResult}`);
    }
}

main();

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