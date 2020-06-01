import fetch from 'node-fetch';
import { companies } from './companies';
import { CompanyLedger, CompanyBand, BandPrize, BandUser } from './models/companyLedger';

export default class Requester 
{
    public requestCompany(company: typeof companies[0], ratToken: string): Promise<CompanyLedger>
    {
        return new Promise((resolve, reject) =>
            this.fetchCompany(company.url, ratToken)
                .then((result: any) =>
                {
                    const resultUserBand = result.Bands[result.user.band];
                    const companyBands = this.convertBands(result.Bands, result.user.band, company.tiers)
                    resolve(new CompanyLedger(
                        company.name,
                        company.color,
                        company.tiers.reverse(),
                        result.user.rank,
                        result.user.band,
                        companyBands[result.user.band],
                        result.Bands[result.user.band].Results[1],
                        result.user.toNextRank,
                        resultUserBand.Results[1].Score - resultUserBand.Results[2].Score,
                        companyBands
                    ));
                })
                .catch(reject));
    }

    private fetchCompany(url: string, ratToken: string)
    {
        return new Promise((resolve, reject) =>
            fetch(url, { headers: 
                { 
                    "Cookie": 'rat=' + ratToken,
                    "Referer": "https://www.seaofthieves.com/leaderboards",
                    "User-Agent": 'SotLedger'
                }})
                .then(res => res.json()) 
                .then(json => resolve(json))
                .catch(error => reject(error)));
    }

    private convertBandUser(raw: any): BandUser
    {
        if(raw)
        {
            return new BandUser(
                raw.GamerTag,
                raw.Score,
                raw.GlobalRank
            );
        }
        else
        {
            return undefined;
        }
    }

    private convertBandPrize(raw: any): BandPrize
    {
        if(!raw)
        {
            return null;
        }
        return new BandPrize(
            raw.Id,
            raw.Owned,
        )
    }

    private convertBands(bands: any, userBandId: Number, companyTiers: string[]): CompanyBand[]
    {
        let result = [];
        for(const band of bands)
        {
            const containsRequestingUser = band.Index === userBandId;
            result.push(
                new CompanyBand(
                    band.Index,
                    companyTiers.reverse()[band.Index],
                    containsRequestingUser,
                    this.convertBandUser(band.Results[0]),
                    this.convertBandUser(band.Results[containsRequestingUser ? 2 : 1]),
                    this.convertBandPrize(band.TitleEntitlement),
                    this.convertBandPrize(band.Entitlements),
                )
            );
        }
        return result;
    }
}