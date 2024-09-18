import { Injectable } from "@angular/core";
import { calculateInvestmentResults } from "../investment-results";
import { InvestmentInput } from "./investment-input.model";

@Injectable({ providedIn: "root" })
export class InvestmentService {
  resultData?: {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
  }[];

  calculateInvestment(investmentInput: InvestmentInput) {
    this.resultData = calculateInvestmentResults(investmentInput);
  }
}
