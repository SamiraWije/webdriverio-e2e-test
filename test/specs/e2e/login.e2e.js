import { browser, expect } from '@wdio/globals'

describe('Login Flow', () => {
  //    Load homepage
  beforeEach(async () => {
    await browser.url('http://zero.webappsecurity.com/index.html')

  })

  it('Should not login with invalid username and password', async () => {
    //    Click the sign in button
    await browser.waitAndClick('#signin_button')
    //    Fill the form
    await $('#login_form').waitForDisplayed()
    await $('#user_login').setValue('test')
    await $('#user_password').setValue('test')
    //    Submit the form
    await $('input[type="submit"]').click()
    // Verify the error message
    // const errorMessage = 'Login and/or password are wrong.'
    const errorMessage = $('.alert-error')
    await expect(errorMessage).toHaveText('Login and/or password are wrong.')
  })

  it('Reset account password', async () => {

    const resetEmail = 'eagermoser@freethecookies.com'

    await browser.waitAndClick('#signin_button')
    await browser.waitAndClick('=Forgot your password ?')
    await $('#user_email').waitForDisplayed()
    await $('#user_email').setValue(resetEmail)
    await $('input[type="submit"]').click()
    const successMessage = await $('.span6')
    await expect(successMessage).toHaveText(
      expect.stringContaining(`email: ${resetEmail}`),
    )
  })

})
