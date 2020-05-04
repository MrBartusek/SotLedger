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
        public userBandId: Number,
        public userBand: CompanyBand,
        public userTag: string,
        public pointsToPromote: number,
        public pointsToDemote: number,
        public bands: CompanyBand[],
    ){};
}

export class CompanyBand
{
    constructor(
        public index: number,
        public positionName: string,
        public containsRequestingUser: boolean,
        public bestUser: BandUser,
        public worstUser: BandUser,
        public titlePrize: BandPrize,
        public itemPrize: BandPrize,
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