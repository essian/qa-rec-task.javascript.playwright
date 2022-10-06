const { test, expect } = require('@playwright/test');

const validCity = 'Manchester'
const citySearchQuery = 'latitude=53.4807593&longitude=-2.2426305&start=0&limit=6&q=Manchester'
const punctuationSearchTerm = '?'
const errorMessage = 'Please enter a city, town or postcode'

// If this was more than two tests, I would like to extract locators and functions to a POM 
// so I could use functions such as jobsPage.enterSearchTerm(searchTerm)

test.describe('search from jobs page', ()=> {

    test.beforeEach(async ({ page }) => {
        await page.goto('/jobs', { waitUntil:"networkidle" }) // This wait may help prevent flaky tests. Need to identify cause, possible race condition.
    })
    
    test('should allow me to find jobs by city', async ({ page }) => {
        await page.locator('.location-search-input').fill(validCity)
        const firstSuggestion = page.locator('role=option').first()
        await expect(firstSuggestion).toHaveText(validCity)
        await firstSuggestion.click()
        await expect(page).toHaveURL(`/jobs?${citySearchQuery}`)
        await expect(page.locator('h2', {hasText: validCity})).toBeVisible()
        // Add assertion for correct job data if test can be run in an env with known data
    });

    test('should not allow me to provide a search term beginning with punctuation', async ({ page }) => {
        await page.locator('.location-search-input').fill(punctuationSearchTerm)
        await expect(page.locator(`text=${errorMessage}`)).toBeVisible()
        await expect(page.locator('role=option').first()).not.toBeVisible()
    })
})
