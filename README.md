# IT3040 – ITPM Assignment 1  
## Singlish to Sinhala Translation – Playwright Automation
## IT23818316 H.A.I.T.Hadigngnapola
## Year 3 Semester 1

---

This repository contains the complete automation solution for **IT3040 – Information Technology Project Management (Assignment 1)**.

**Option Selected:**  
Option 1 – Singlish to Sinhala translation testing

**System Under Test:**  
https://www.swifttranslator.com/

---
##  Scope of Testing

The following test types are covered:

-  Positive functional test cases (correct conversions)
- Negative functional test cases (robustness / incorrect behavior)
-  UI test case (real-time Sinhala output update)
All required scenarios mentioned in the assignment brief are covered:

## Tools & Technologies Used

- **Playwright** – UI automation framework
- **JavaScript (Node.js)** – Test scripting
- **PapaParse** – CSV data parsing
- **Playwright Chromium** – Built-in browser (no local Chrome dependency)

---

## Project Structure

```text
playwright-sinhala-automation/
│
├── tests/
│   └── csv-test.spec.js
│
├── testcases.csv
│
├── playwright.config.js
│
├── package.json
├── package-lock.json
│
└── README.md
```
---
## Prerequisites

- Node.js (version 18 or higher recommended)
- npm (comes with Node.js)
- Internet connection (only required for first-time Playwright setup)

---

##  Installation Instructions

1. Clone the public GitHub repository:
```bash
git clone https://github.com/IndujaThathsarani/ITPM-Assignment1
```
2.Navigate into the project folder

3.Install project dependencies
```npm install```

4.Install Playwright browsers
```npx playwright install```

## How to Run the Tests

1.Run all Playwright tests using:
```npx playwright test```

2.To run tests with browser UI:
```npx playwright test --headed```


