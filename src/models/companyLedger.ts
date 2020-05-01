import chalk from "chalk";

/*
    This file contains structures for ledger data.
    Constructors are using this trick to reduce
    size of code: https://maksimivanov.com/posts/typescript-constructor-shorthand/
*/

export class CompanyLedger
{
    constructor(
        public name: string,
        public color: chalk.Chalk,
        public tiers: string[],
        public userGlobalRank: number,
        public userBand: CompanyBand,
        public pointsToPromote: number,
        public pointsToDemote: number,
    ){};
}

export class CompanyBand
{
    constructor(
        public index: number,
        public positionName: string,
        public titlePrize: BandPrize,
        public itemPrize: BandPrize,
        public bestUser: BandUser,
        public worstUser: BandUser,
    ){};
}

export class BandUser
{
    constructor(
        public gamerTag: string,
        public score: number,
        public globalRank: number,
    ){};
}

export class BandPrize
{
    constructor(
        public id: string,
        public owned: boolean,
    ){};
}