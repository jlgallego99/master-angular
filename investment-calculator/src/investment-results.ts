import { InvestmentInput } from "./app/investment-input.model";

export function calculateInvestmentResults(investmentInput: InvestmentInput) {
  const annualData = [];
  let investmentValue = investmentInput.initialInvestment;

  for (let i = 0; i < investmentInput.duration; i++) {
    const year = i + 1;
    const interestEarnedInYear = investmentValue * (investmentInput.expectedReturn / 100);
    investmentValue += interestEarnedInYear + investmentInput.annualInvestment;
    const totalInterest =
      investmentValue - investmentInput.annualInvestment * year - investmentInput.initialInvestment;
    annualData.push({
      year: year,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: investmentInput.annualInvestment,
      totalInterest: totalInterest,
      totalAmountInvested: investmentInput.initialInvestment + investmentInput.annualInvestment * year,
    });
  }
  console.log(annualData);
  return annualData;
}
