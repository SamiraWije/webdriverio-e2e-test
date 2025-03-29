import { browser, expect } from '@wdio/globals'

describe.only('Search feature', () => {
    
    it.only('Should search for values using keyboard press', async () => {
        const searchText = 'bank'
        await browser.url('http://zero.webappsecurity.com/index.html')
        
        await $('#searchTerm').waitForDisplayed()
        await $('#searchTerm').setValue(searchText)
        await browser.keys('Enter')

        const results = $('h2')
        await expect(results).toBeExisting()
        await expect(results).toHaveText('Search Results:')
    })
    
})