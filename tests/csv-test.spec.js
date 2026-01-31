const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');
const Papa = require('papaparse');

const csvFilePath = path.resolve(__dirname, '../testcases.csv');
const csvData = fs.readFileSync(csvFilePath, 'utf8');

const { data: rows } = Papa.parse(csvData, { header: true, skipEmptyLines: true });

rows.forEach((row) => {
  const { Input, 'Expected Output': expected } = row;

  if (!Input || !expected) return;

  test(`CSV Test - ${Input}`, async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.getByRole('textbox');
    await inputBox.fill(Input);

    const sinhalaPanel = page.locator('div', { hasText: 'Sinhala' }).first();
    await expect(sinhalaPanel).toContainText(expected, { timeout: 20000 });
  });
});
