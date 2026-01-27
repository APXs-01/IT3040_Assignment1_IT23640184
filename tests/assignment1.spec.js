// assignment1.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Singlish to Sinhala Conversion Tests', () => {

  // -------------------------------------------------------------------------
  // STEP 1: DEFINE YOUR TEST CASES (Add all 35 here)
  // -------------------------------------------------------------------------
  const testCases = [
    
    // --- POSITIVE SCENARIOS ---
    {
      id: 'Pos_Fun_0001',
      input: 'api paasal yanavaa',
      expected: 'අපි පාසල් යනවා',
      description: 'Verify simple sentence conversion'
    }

    // --- ADD YOUR REMAINING TEST CASES BELOW THIS LINE ---
    // Copy the block above { id: ..., input: ..., expected: ... }, and fill it in.

  ];

  // -------------------------------------------------------------------------
  // STEP 2: FUNCTIONAL TEST AUTOMATION LOGIC
  // -------------------------------------------------------------------------
  for (const data of testCases) {
    test(`${data.id}: ${data.description}`, async ({ page }) => {
      
      // 1. Open the website
      await page.goto('https://www.swifttranslator.com/');

      // 2. Type the Singlish input (Using the placeholder text from your screenshot)
      await page.getByPlaceholder('Input Your Singlish Text Here.').fill(data.input);

      // 3. Wait for the translation to appear (2 seconds for safety)
      await page.waitForTimeout(2000);

      // 4. Verify the Result
      // We look for the expected Sinhala text anywhere on the page.
      // We use .first() to avoid errors if the text appears multiple times (like in suggestions).
      await expect(page.getByText(data.expected).first()).toBeVisible();
    });
  }

  // -------------------------------------------------------------------------
  // STEP 3: UI TEST SCENARIO (Fixing the "17 elements" error)
  // -------------------------------------------------------------------------
  test('Pos_UI_0001: Verify Real-time Output Updates', async ({ page }) => {
    // 1. Open the website
    await page.goto('https://www.swifttranslator.com/');

    // 2. Type 'mama'
    await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mama');

    // 3. Wait a moment for suggestions to pop up
    await page.waitForTimeout(1000);

    // 4. Verify Real-time Update
    // FIX: We use .first() because the website shows a list of suggestions 
    // (mama, mamai, mamath...). We just want to check if *any* "මම" is visible.
    await expect(page.getByText('මම').first()).toBeVisible();
  });

});