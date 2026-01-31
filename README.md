# IT3040 – ITPM Assignment 1  
## Singlish to Sinhala Translation – Playwright Automation

### BSc (Hons) in Information Technology – Year 3  
Semester 1  

---

## 📌 Assignment Overview

This repository contains the complete automation solution for **IT3040 – Information Technology Project Management (Assignment 1)**.

**Option Selected:**  
✔ Option 1 – Singlish to Sinhala translation testing

**System Under Test:**  
https://www.swifttranslator.com/

The objective of this assignment is to evaluate:
- The accuracy of Singlish-to-Sinhala conversion
- The robustness of the system under varied inputs
- Basic UI behavior (real-time output update)

Backend APIs, performance, and security testing are **out of scope**, as per assignment instructions.

---

## 🧪 Scope of Testing

The following test types are covered:

- ✅ Positive functional test cases (correct conversions)
- ❌ Negative functional test cases (robustness / incorrect behavior)
- 🖥 UI test case (real-time Sinhala output update)

All required scenarios mentioned in the assignment brief are covered, including:
- Sentence structures (simple, compound, complex)
- Interrogative and imperative forms
- Positive and negative sentences
- Polite and informal phrasing
- Daily conversational language
- Word combinations and repeated expressions
- Tense variations and negation
- Input length variations (S / M / L)
- Mixed Singlish + English content
- English technical and brand terms
- Punctuation, numbers, dates, currency, units
- Formatting (spaces, line breaks, paragraphs)
- Slang and colloquial expressions

---

## 🧰 Tools & Technologies Used

- **Playwright** – UI automation framework
- **JavaScript (Node.js)** – Test scripting
- **PapaParse** – CSV data parsing
- **Playwright Chromium** – Built-in browser (no local Chrome dependency)

---

## 📁 Project Structure

playwright-sinhala-automation/
│
├── tests/
│ └── csvTranslator.spec.js # Playwright test script
│
├── testcases.csv # Test data (UTF-8 encoded)
│
├── playwright.config.js # Playwright configuration
│
├── package.json # Project dependencies
├── package-lock.json
│
└── README.md # Project documentation


---

## ⚙️ Prerequisites

- Node.js (version 18 or higher recommended)
- npm (comes with Node.js)
- Internet connection (only required for first-time Playwright setup)

---

## 📦 Installation Instructions

1. Clone the public GitHub repository:
```bash
git clone https://github.com/IndujaThathsarani/ITPM-Assignment1.git
