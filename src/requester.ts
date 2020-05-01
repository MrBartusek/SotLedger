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
                    const userBand = result.Bands[result.user.band];
                    resolve(new CompanyLedger(
                        company.name,
                        company.color,
                        result.user.rank,
                        new CompanyBand(
                            userBand.Index,
                            company.tiers.reverse()[result.user.band],
                            // Title Prize
                            new BandPrize(
                                userBand.TitleEntitlement.Id,
                                userBand.TitleEntitlement.Owned,
                            ),
                            // Item Prize
                            new BandPrize( 
                                userBand.Entitlements.Id,
                                userBand.Entitlements.Owned,
                            ),
                            // Best User
                            new BandUser(
                                userBand.Results[0].GamerTag,
                                userBand.Results[0].Score,
                                userBand.Results[0].Rank,
                            ),
                            // Worst User
                            new BandUser(
                                userBand.Results[2].GamerTag,
                                userBand.Results[2].Score,
                                userBand.Results[2].Rank,
                            )
                        ),
                        result.user.toNextRank,
                        userBand.Results[1].Score - userBand.Results[2].Score
                    ));
                })
                .catch(reject));
    }

    private fetchCompany(url: string, ratToken: string)
    {
        return new Promise((resolve, reject) =>
            fetch(url, { headers: { cookie: 'rat=' + ratToken }})
                .then(res => res.json()) 
                .then(json => resolve(json))
                .catch(error => reject(error)));
    }
}