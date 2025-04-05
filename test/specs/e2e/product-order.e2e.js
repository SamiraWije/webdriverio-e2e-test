import { browser, expect } from '@wdio/globals'
describe('Product Order', () => {
  const testData = {
    username: 'standard_user',
    password: 'secret_sauce',
  }

  const customerData = {
    firstName: 'John',
    lastName: 'Doe',
    postalCode: '12345',
  }

  beforeEach(async () => {
    await browser.url('https://www.saucedemo.com/')
    await browser.userLogin(testData.username, testData.password)
  })

  after(async () => {
    await browser.userLogout()
  })

  it('Should complete product order', async () => {
    await $('#inventory_container').waitForDisplayed()

    await $('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    await $('[data-test="add-to-cart-sauce-labs-bike-light"]').click()

    await $('[data-test="shopping-cart-link"]').click()
    await $('.cart_list').waitForDisplayed()

    await $('[data-test="checkout"]').waitForDisplayed()
    await $('[data-test="checkout"]').click()

    await $('[data-test="checkout-info-container"]').waitForDisplayed()

    await $('#first-name').setValue(customerData.firstName)
    await $('#last-name').setValue(customerData.lastName)
    await $('#postal-code').setValue(customerData.postalCode)
    await $('input[type="submit"]').click()

    await $('.checkout_summary_container').waitForDisplayed()
    await $('[data-test="finish"]').click()
    await $('[data-test="checkout-complete-container"]').waitForDisplayed()
    await $('[data-test="back-to-products"]').click()
    await browser.pause(3000)
  })
})
