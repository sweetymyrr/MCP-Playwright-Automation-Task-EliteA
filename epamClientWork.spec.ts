import { test, expect } from '@playwright/test';

test('EPAM Client Work page is reachable from Services menu', async ({ page }) => {
  await page.goto('https://www.epam.com/');

  await page.getByRole('button', { name: 'Accept All' }).click().catch(() => {});
  await page.getByRole('link', { name: 'Services', exact: true }).click();
  await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

  await expect(page.getByText('Client Work')).toBeVisible();
});
