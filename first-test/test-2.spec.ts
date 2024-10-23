import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
await page.goto('https://www.youtube.com/');
await page.getByLabel('Accept the use of cookies and other data for the purposes described').click();
await page.getByPlaceholder('Search').click();
await page.getByPlaceholder('Search').fill('Playwright');
await page.getByPlaceholder('Search').press('Enter');
await page.locator('ytd-promoted-sparkles-web-renderer').filter({ hasText: 'Visit site Playwright: Web' }).click();
});