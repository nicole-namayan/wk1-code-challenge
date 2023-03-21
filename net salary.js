// Define tax rates
const TAX_RATE_1 = 0.1;
const TAX_RATE_2 = 0.15;
const TAX_RATE_3 = 0.2;
const TAX_RATE_4 = 0.25;

// Define NHIF and NSSF deductions
const NHIF_DEDUCTION = 500;
const NSSF_DEDUCTION = 0.06;

// Get input values from the user
let basicSalary = parseFloat(prompt("Enter your basic salary:"));
let benefits = parseFloat(prompt("Enter your benefits:"));

// Calculate gross salary
let grossSalary = basicSalary + benefits;

// Calculate NHIF and NSSF deductions
let nhifDeductions = NHIF_DEDUCTION;
let nssfDeductions = grossSalary * NSSF_DEDUCTION;

// Calculate taxable income and payee
let taxableIncome = grossSalary - nhifDeductions - nssfDeductions;
let payee = 0;

if (taxableIncome <= 24000) {
  payee = taxableIncome * TAX_RATE_1;
} else if (taxableIncome <= 40600) {
  payee = 2400 + (taxableIncome - 24000) * TAX_RATE_2;
} else if (taxableIncome <= 57600) {
  payee = 6000 + (taxableIncome - 40600) * TAX_RATE_3;
} else {
  payee = 10200 + (taxableIncome - 57600) * TAX_RATE_4;
}

// Calculate net salary
let netSalary = grossSalary - nhifDeductions - nssfDeductions - payee;

// Display the results
console.log(`Gross Salary: ${grossSalary}`);
console.log(`NHIF Deductions: ${nhifDeductions}`);
console.log(`NSSF Deductions: ${nssfDeductions}`);
console.log(`Payee (Tax): ${payee}`);
console.log(`Net Salary: ${netSalary}`);
