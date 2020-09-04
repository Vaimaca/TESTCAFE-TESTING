import { Selector, t} from 'testcafe'

class ForgottenPasswordPage {
    constructor() {
        this.userEmail = Selector('#user_email')
        this.message = Selector('div')
    }

    async email(text) {
        await t .typeText(this.userEmail, text, {paste: true})
    }
}
export default ForgottenPasswordPage