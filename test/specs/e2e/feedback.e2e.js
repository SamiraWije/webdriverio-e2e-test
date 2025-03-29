describe('Feedback form', () => {
  // Define selectors as constants for better maintainability
  const feedbackLink = '#feedback'
  const feedbackFormContainer = '.span6'
  const nameInput = '#name'
  const emailInput = '#email'
  const subjectInput = '#subject'
  const commentInput = '#comment'
  const submitButton = 'input[type="submit"]'
  const clearButton = 'input[type="reset"]'
  const feedbackTitle = '#feedback-title'

  // Test data
  const testData = {
    username: 'testuser',
    email: 'eagermoser@freethecookies.com',
    subject: 'Test Subject',
    feedbackMessage: 'This is a test feedback message.',
  }

  beforeEach(async () => {
    // Navigate to the homepage before each test
    await browser.url('http://zero.webappsecurity.com/index.html')
  })

  it('Should submit feedback form with all the values', async () => {
    // Click on the feedback link
    await $(feedbackLink).waitForClickable()
    await $(feedbackLink).click()

    // Wait for the feedback form to be displayed
    await $(feedbackFormContainer).waitForDisplayed()

    // Fill out the feedback form
    await $(nameInput).setValue(testData.username)
    await $(emailInput).setValue(testData.email)
    await $(subjectInput).setValue(testData.subject)
    await $(commentInput).setValue(testData.feedbackMessage)

    // Submit the form
    await $(submitButton).click()

    // Verify the feedback submission
    await $(feedbackTitle).waitForDisplayed()
    await expect($(feedbackTitle)).toHaveText('Feedback')
  })

  it('Should clear the feedback form when clicking on the clear button', async () => {
    // Click on the feedback link
    await $(feedbackLink).waitForClickable()
    await $(feedbackLink).click()

    // Wait for the feedback form to be displayed
    await $(feedbackFormContainer).waitForDisplayed()

    // Fill out the feedback form
    await $(nameInput).setValue(testData.username)
    await $(emailInput).setValue(testData.email)
    await $(subjectInput).setValue(testData.subject)
    await $(commentInput).setValue(testData.feedbackMessage)
    await $(feedbackTitle).waitForDisplayed()

    // Click the clear button
    await $(clearButton).click()

    // Verify that all input fields are cleared
    await expect($(nameInput)).toHaveValue('')
    await expect($(emailInput)).toHaveValue('')
    await expect($(subjectInput)).toHaveValue('')
    await expect($(commentInput)).toHaveValue('')

    await $(feedbackTitle).waitForDisplayed()
  })
})
