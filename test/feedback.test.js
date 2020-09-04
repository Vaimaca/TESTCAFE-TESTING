import {Selector} from "testcafe"
import FeedbackPage from '../page_objects/pages/FeedbackPage'

const feebackPage = new FeedbackPage()

fixture `Send feedback`
  .page `http://zero.webappsecurity.com/index.html`


//For some reason also work withouth having to use 'Selector'
const feedbackButton = '#feedback'
// const userName = '#name'
// const userNameText = Selector('#name').innerText
// const userEmail = '#email'
// const userSubject = '#subject'
// const userMessage = '#comment'
// const actualMessage = 'Message the the user would enter in this field in order to try submitting some text. '
// const sendMessage = '.btn-primary'
// const clearButton = Selector('.btn')
// const feedbackMessage = Selector('div').withText('Thank you for your comments')

test('Clear button works', async t => {
    await t.click(feedbackButton)
    await t.typeText(feebackPage.userName, 'Jules', {paste: true})
    await t.click(feebackPage.clearButton)
    await t.expect(feebackPage.userNameText.exists).notOk()
})
test('User submits feedback', async t => {
    await t.click(feedbackButton)
    await t.typeText(feebackPage.userName, 'Jules', {paste: true})
    await t.typeText(feebackPage.userEmail, 'test@email.com', {paste: true})
    await t.typeText(feebackPage.userSubject, 'Testing the subject field', {paste: true})
    await t.typeText(feebackPage.userMessage, feebackPage.actualMessage + feebackPage.actualMessage, {paste: true})
    await t.click(feebackPage.sendMessage)
    await t.expect(feebackPage.sendMessage.exists).notOk()
    await t.expect(feebackPage.feedbackMessage.withText('Thank you for your comments').exists).ok()
})