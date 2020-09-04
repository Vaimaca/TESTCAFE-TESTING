import {t, Selector} from 'testcafe'

export async function login(username, password) {
    const signInButton = Selector('#signin_button')
    const loginForm = Selector('#login_form')
    const usernameInput = Selector('#user_login')
    const passwordInput = Selector('#user_password')
    const submitButton = Selector('.btn-primary')

    await t.click(signInButton)
    await t.expect(loginForm.exists).ok()
    await t.typeText(usernameInput, username, {paste: true})
    await t.typeText(passwordInput, password, {paste: true})
    await t.click(submitButton)
}