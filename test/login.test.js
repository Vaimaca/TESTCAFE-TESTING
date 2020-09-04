import {Selector} from 'testcafe'
import Navbar from '../page_objects/components/Navbar'
import LoginPage from '../page_objects/pages/LoginPage'
import AccountSummaryTab from '../page_objects/components/AccountSummaryTab'

const navbar = new Navbar()
const loginPage = new LoginPage()
const accountSummaryTab = new AccountSummaryTab()

fixture `Login Test`
    .page `http://zero.webappsecurity.com/index.html`

test("User cannot login with invalid credentials", async t => {
    //Replaced with Navbar.js for practicing page object models
    //const signInButton = Selector('#signin_button')
    // const loginForm = Selector('#login_form')
    // const usernameInput = Selector('#user_login')
    // const passwordInput = Selector('#user_password')
    // const submitButton = Selector('.btn-primary')
    //const errorMessage = Selector('.alert-error').innerText

    await t.click(navbar.signInButton)
    await t.expect(loginPage.loginForm.exists).ok()
    await loginPage.loginToApp('invalid username', 'invalid password')
    // await t.typeText(usernameInput, "invalid username", {paste: true})
    // await t.typeText(passwordInput, "invalid password", {paste: true})
    // await t.click(submitButton)
    await t.expect(loginPage.errorMessage.innerText).contains('Login and/or password are wrong.')
})

test("User can login with credentials", async t => {
    //Replaced with Navbar.js for practicing page object models
    //const signInButton = Selector('#signin_button')
    // const loginForm = Selector('#login_form')
    // const usernameInput = Selector('#user_login')
    // const passwordInput = Selector('#user_password')
    // const submitButton = Selector('.btn-primary')
    // const accountSummaryTab = Selector('#account_summary_tab')
    //const userIcon = Selector('.icon-user')
    //const logoutButton = Selector('#logout_link')

    await t.click(navbar.signInButton)
    await t.expect(loginPage.loginForm.exists).ok()
    await loginPage.loginToApp('username', 'password')
    // await t.typeText(usernameInput, "username", {paste: true})
    // await t.typeText(passwordInput, "password", {paste: true})
    // await t.click(submitButton)
    
    await t.expect(accountSummaryTab.summary.exists).ok()
    await t.expect(loginPage.loginForm.exists).notOk()
    await t.click(navbar.userIcon)
    await t.click(navbar.logoutButton)
    await t.expect(navbar.logoutButton.exists).notOk()
    await t.expect(navbar.signInButton.exists).ok()
})