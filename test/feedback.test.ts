
import FeedbackPage from '../page_objects/pages/FeedbackPage'

const feebackPage = new FeedbackPage()

fixture `Send feedback`
  .page `http://zero.webappsecurity.com/index.html`

const feedbackButton = '#feedback'

test.skip('Clear button works', async t => {
    await t.click(feedbackButton)
    await t.typeText(feebackPage.userName, 'Jules', {paste: true})
    await t.click(feebackPage.clearButton)
    await t.expect(feebackPage.userNameText.exists).notOk()
})
test.skip('User submits feedback', async t => {
    await t.click(feedbackButton)
    await t.typeText(feebackPage.userName, 'Jules', {paste: true})
    await t.typeText(feebackPage.userEmail, 'test@email.com', {paste: true})
    await t.typeText(feebackPage.userSubject, 'Testing the subject field', {paste: true})
    await t.typeText(feebackPage.userMessage, "MESSAGE GOES HERE", {paste: true})
    await t.click(feebackPage.sendMessage)
    await t.expect(feebackPage.sendMessage.exists).notOk()
    await t.expect(feebackPage.feedbackMessage.withText('Thank you for your comments').exists).ok()
})