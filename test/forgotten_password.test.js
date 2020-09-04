import { Selector } from 'testcafe'
import Navbar from '../page_objects/components/Navbar'
import LoginPage from '../page_objects/pages/LoginPage'
import ForgottenPasswordPage from '../page_objects/pages/ForgottenPasswordPage'

const navbar = new Navbar()
const loginPage = new LoginPage()
const forgottenPasswordPage = new ForgottenPasswordPage()

fixture `Send forgotten password test`
.page `http://zero.webappsecurity.com/index.html`

test("User can request new password to be sent to his email", async t => {
    //Get selectors
    
    //Replaced with Navbar.js for practicing page object models
    //const signinButton = Selector('#signin_button') 

    // const forgotPasswordLink = Selector('a').withText("Forgot your password ?")
    // const userEmail = Selector('#user_email')
    // const message = Selector('div').innerText

    //Actions
    await t.click(navbar.signInButton)
    await t.click(loginPage.forgotPasswordLink)
    await forgottenPasswordPage.email('email@random.com')
    await t.pressKey('enter')

    //Assertions
    await t.expect(forgottenPasswordPage.message.innerText).contains('email@random.com')
    await t.expect(forgottenPasswordPage.userEmail.exists).notOk()
})