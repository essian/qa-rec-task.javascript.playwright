// @ts-check
const { test, expect } = require('@playwright/test');

test('search', async ({ page }) => {
  await page.goto('https://ceracare.co.uk/');
  await page.locator('#onetrust-accept-btn-handler').click()
  await page.locator('.header_content__LmDsk > .button_base__KzM17').click()
  await page.locator('h1').textContent().then((text) => expect(text).toBe('find a care assistant job'))
  await page.waitForLoadState()
  await page.locator('.location-search-input').fill('Manchester')
  await page.locator('role=option').first().textContent().then((text) => {
    expect(text?.includes('Trafford')).toBeTruthy()
  })
});
