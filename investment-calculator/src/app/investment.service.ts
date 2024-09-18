import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class InvestmentService {
  resultData() {
    return [{
      year: 1,
      valueEndOfYear: 1155.00,
      interest: 55.00,
      totalInterest: 55.00,
      totalAmountInvested: 1100.00,
    },
      {
        year: 2,
        valueEndOfYear: 1318.53,
        interest: 63.53,
        totalInterest: 118.53,
        totalAmountInvested: 1200.00,
      }];
  }
}
