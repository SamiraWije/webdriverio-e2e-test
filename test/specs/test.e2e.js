import { browser, expect } from '@wdio/globals'
// import LoginPage from '../pageobjects/login.page.js'
// import SecurePage from '../pageobjects/secure.page.js'

// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await LoginPage.open()

//         await LoginPage.login('tomsmith', 'SuperSecretPassword!')
//         await expect(SecurePage.flashAlert).toBeExisting()
//         await expect(SecurePage.flashAlert).toHaveText(
//             expect.stringContaining('You logged into a secure area!'))
//     })
// })
var myUrl_1 = 'https://www.example.com'
var myUrl_2 = 'https://www.saucedemo.com'
let bigDelay = 5000
let smallDelay = 2000
describe.skip('My first test suite', () => {
  it('my first wdio test', async () => {
    await browser.url(myUrl_1)
    await browser.pause(smallDelay)

    // await expect(browser).toHaveTitle(/Example Failed/)
    // await expect(browser).toHaveUrl(/example.com/)

    let pageElement = await $('h1')
    await expect(pageElement).toExist()
    await expect(pageElement).toBeDisplayed()
    await expect(pageElement).toHaveText(/Example/)
  })

  it('Selector test', async () => {
    await browser.url(myUrl_2)
    // let button = await $('[role=button]')
    // await expect(button).toExist()
    // await expect(button).toHaveText('[value=Login]')

    // Select the button using its ID
    let button = await $('#login-button')

    // Ensure the button exists
    await expect(button).toExist()

    // Check the button's value attribute
    await expect(button).toHaveAttribute('value', 'Login')
  })

  it('Forms and Inputs', async () => {
    await browser.url(myUrl_2)

    let userName = $('#user-name')
    let password = $('#password')
    let loginButton = $('#login-button')

    await userName.setValue('standard_user')
    await password.setValue('secret_sauce')
    await browser.pause(smallDelay)
    await loginButton.click()

    let inventoryContainer = $('#inventory_container')
    await expect(inventoryContainer).toBeDisplayed()
    // await browser.pause(bigDelay)
  })

  it('Selectbox & Checkbox', async () => {
    await browser.url('https://devexpress.github.io/testcafe/example/')

    let selectbox = $('#preferred-interface')
    await selectbox.selectByVisibleText('Both')

    let option = $('option=Both')
    await expect(option).toBeSelected()
    await browser.pause(bigDelay)

    let radioOption = $('[type="radio"][value="MacOS"]')
    await radioOption.click()
    await expect(radioOption).toBeSelected()
    await browser.pause(bigDelay)

    let developerName = $('#developer-name')
    let populateButton = $('#populate')

    await developerName.setValue('asd')
    await populateButton.click()
    await browser.pause(bigDelay)

  })

  it('Set browser size', async () => {
    await browser.setWindowSize(400, 400)
    await browser.url(myUrl_1)
    await browser.pause(bigDelay)

    let selector = $('h1')
    await selector.waitForExist()
    await selector.waitForDisplayed()
  })

  it('Device Emulation', async () => {
    let mobile = [2788, 1284]

    await browser.setWindowSize(mobile[0], mobile[1])
    await browser.url(myUrl_2)
    await browser.pause(bigDelay)
  })

  it('Screen Shots', async ()=> {
    await browser.url(myUrl_2)
    // await browser.saveScreenshot('my-screenshot.png')
    // await browser.takeScreenshot()

    let form = $('#login_button_container')
    await form.saveScreenshot('form.png')
  })

})
