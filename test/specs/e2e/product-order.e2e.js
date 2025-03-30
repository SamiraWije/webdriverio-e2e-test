import { browser, expect } from '@wdio/globals'
describe('Product Order', () => {

    
    // const userName = '#user-name'
    // const password = '#password'
    // const loginButton = '#login-button'
        
    const testData = {
        username: 'standard_user',
        password: 'secret_sauce'
    }

    beforeEach(async () => {
        await browser.url('https://www.saucedemo.com/')
        await browser.userLogin(testData.username, testData.password)
    
    })

    after(async () => {
        await browser.userLogout()
    })

    it ('Should complete product order', async () => {
        await browser.pause(3000)
    })
})