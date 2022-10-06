// @ts-check
const {test, expect} = require('@playwright/test');
const city = 'Manchester'

test.describe('search from jobs page', () => {
  test('location dropdown displays entered city', async ({page}) => { //updated description to be more specific to help with debugging
      await page.goto('/');
      await page.locator('#onetrust-accept-btn-handler').click() //this could be moved to global setup or removed as it's not required for the test
      await page.locator('a', {hasText: 'Jobs'}).click() // what is the purpose of this step? Test could navigate to url? Use better selector e.g. 'a' with text 'jobs'
      await expect(page.locator('h1.heroTitle_title__AhuVi')).toHaveText('Find a Care Assistant job') // What is the purpose of this step? Should it be in a different test?
      await page.waitForLoadState() // If needed this should be included in the navigation step (line 9) but probs not required as wait is implicit
      await page.locator('.location-search-input').fill(city)
      await expect(page.locator('role=option').first()).toHaveText(city)
  });
})