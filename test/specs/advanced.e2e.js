import { browser, expect } from '@wdio/globals'

describe('Advanced tests', () => {
  // beforeEach(async () => {
  //     await browser.url('https://the-internet.herokuapp.com/upload')
  // })

  // beforeEach(async () => {
  //     await loadWebsite()
  // })

  it('File upload 1', async () => {
    const filePath = './form.png'
    //Custom commands
    await browser.customFileUpload(filePath, '#file-upload', '#file-submit')
    await browser.pause(5000)
  })

  it('File upload 2', async () => {
    const filePath = './form.png'
    const remoteFilePath = await browser.uploadFile(
      filePath,
      '#file-upload',
      '#file-submit',
    )

    await $('#file-upload').setValue(remoteFilePath)
    // await $('#file-submit').click()
    await browser.waitAndClick('#file-submit')
    console.log('***UPLOADED***')
    await browser.pause(5000)
  })

  it('Display Title and URL', async () => {
    const results = await browser.getTitleAndUrl()
    console.log('TITLE = ' + results.title)
    console.log('URL = ' + results.url)

    await browser.waitAndClick('#file-submit')
    await browser.pause(5000)
  })

  it('Change Browser Session', async () => {
    console.log('Session before reload ' + browser.sessionId)
    await browser.reloadSession()
    console.log('Session after reload ' + browser.sessionId)
  })

  it('Create and switch new browser tab', async () => {
    await browser.url('https://www.google.com')
    await browser.newWindow('https://webdriver.io')
    await browser.pause(5000)
    await browser.switchWindow('google.com')
    await browser.pause(5000)
  })

  it('Network Throttler', async () => {
    // await browser.throttleNetwork('GPRS')
    // await browser.url("https://webdriver.io")
    // await browser.pause(5000)

    // await browser.throttleNetwork('Regular2G')
    // console.log('2G')
    // await browser.url("https://webdriver.io")
    // await browser.pause(5000)

    // await browser.throttleNetwork('Regular3G')
    // console.log('3G')
    // await browser.url("https://webdriver.io")
    // await browser.pause(5000)

    await browser.throttleNetwork('Regular4G')
    console.log('4G')
    await browser.url('https://webdriver.io')
    await browser.pause(5000)

    await browser.throttleNetwork('WiFi')
    console.log('WiFi')
    await browser.url('https://webdriver.io')
    await browser.pause(5000)
  })

  it('Execute Javascript code', async () => {
    const result = await browser.execute(
      (a, b) => {
        return a + b
      },
      5,
      10,
    )
    await expect(result).toBe(15)
  })

  it('Execute Async Javascript code', async () => {
    const result = await browser.execute(
      async (a, b) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(a + b)
          }, 5000)
        })
      },
      5,
      10,
    )
    console.log('#####---RESULT: ' + result)
    await expect(result).toBe(15)
  })
  async function loadWebsite() {
    await browser.url('https://the-internet.herokuapp.com/upload')
  }
})
