import {Selector} from 'testcafe'
import {login} from '../helper'

fixture `New payee test`
  .page `http://zero.webappsecurity.com/index.html`

test
.before(async t => {
    //See helper.js with below code
    // const signInButton = Selector('#signin_button')
    // const loginForm = Selector('#login_form')
    // const usernameInput = Selector('#user_login')
    // const passwordInput = Selector('#user_password')
    // const submitButton = Selector('.btn-primary')

    // await t.click(signInButton)
    // await t.expect(loginForm.exists).ok()
    // await t.typeText(usernameInput, "username", {paste: true})
    // await t.typeText(passwordInput, "password", {paste: true})
    // await t.click(submitButton)
    await login('username', 'password')
})
('User can add new payee to the list', async t => {
    const payBillTab = Selector('#pay_bills_tab')
    const addNewPayee = Selector('a').withText("New Payee")
    const payeeName = Selector('#np_new_payee_name')
    const payeeAddress = Selector('#np_new_payee_address')
    const payeeAccount = Selector('#np_new_payee_account')
    const payeeDetails = Selector('#np_new_payee_details')
    const payeeAddButton = Selector('#add_new_payee')
    const successMessage = Selector('#alert_content').innerText
    //The new payee asdf was successfully created.

    await t.click(payBillTab)
    await t.click(addNewPayee)
    await t.typeText(payeeName, 'John', {paste: true})
    await t.typeText(payeeAddress, 'Test street', {paste: true})
    await t.typeText(payeeAccount, '123123', {paste: true})
    await t.typeText(payeeDetails, 'My account', {paste: true})
    await t.click(payeeAddButton)
    await t.expect(successMessage).contains('The new payee John was successfully created.')

    
})