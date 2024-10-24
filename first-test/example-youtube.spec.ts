import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({page}) => {
    // Search for Youtube in the Searchbar
    await page.goto('https://www.youtube.com/');
    await page.getByLabel('Reject the use of cookies and').click();
})

test('first Frontpage', async ({page}) => {
    // Check content of Youtube frontpage
    await expect(page.getByLabel('Your YouTube history is off')).toContainText('Your YouTube history is off');
    await page.locator('ytd-feed-nudge-renderer').filter({ hasText: 'Your YouTube history is off' }).locator('#content-wrapper').click();
    await expect(page.locator('ytd-feed-nudge-renderer').filter({ hasText: 'Try searching to get started' }).locator('#content-wrapper')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Sign in' })).toBeVisible();
})

test('Register', async ({ page }) => {
    // Select Sign in Button
    await page.locator('#buttons').click();

    // Find Create Account Button and click on it
    await expect(page.getByRole('button', { name: 'Create account' })).toBeVisible();
    await page.getByRole('button', { name: 'Create account' }).click();

    // Fill out first form 
    await page.getByLabel('First name').click();
    await page.getByLabel('First name').fill('Test');
    await page.getByLabel('Last name (optional)').click();
    await page.getByLabel('Last name (optional)').fill('test');

    // Check content of first form
    await expect(page.getByLabel('First name')).toHaveValue('Test');
    await expect(page.getByLabel('Last name (optional)')).toHaveValue('test');

    // Continue
    await page.getByRole('button', { name: 'Next' }).click();

    // Fill out second form
    await page.getByLabel('Month').selectOption('1');
    await page.getByLabel('Day').click();
    await page.getByLabel('Day').fill('1');
    await page.getByLabel('Year').click();
    await page.getByLabel('Year').fill('2000');
    await page.getByLabel('Gender', { exact: true }).selectOption('1');

    // Check content of second form
    await expect(page.getByLabel('Month')).toHaveValue('1');
    await expect(page.getByLabel('Day')).toHaveValue('1');
    await expect(page.getByLabel('Year')).toHaveValue('2000');
    await expect(page.getByLabel('Gender', { exact: true })).toHaveValue('1');
    await expect(page.getByRole('link', { name: 'Why we ask for birthday and' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Next' })).toBeVisible();

    // Continue
    await page.getByRole('button', { name: 'Next' }).click();
    await expect(page.getByText('Use your existing email', { exact: true })).toBeVisible();
});

test('Sign In', async ({ page }) => {
    await page.locator('#buttons').click();
    await page.getByLabel('Email or phone').click();
    await page.getByLabel('Email or phone').fill('jansruedi467@gmail.com');
    await page.getByRole('button', { name: 'Next' }).click();
    await expect(page.getByRole('heading', { name: 'Couldn’t sign you in' }).locator('span')).toBeVisible();
    await page.getByLabel('Try again').click();
    await expect(page.locator('#headingText')).toContainText('Sign in');
    await expect(page.locator('body')).toContainText('Sign into continue to YouTube');
});