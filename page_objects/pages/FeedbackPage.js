import {Selector, t} from 'testcafe'

class FeedbackPage{
    constructor() {
        this.userName = '#name'
        this.userNameText = Selector('#name')
        this.userEmail = '#email'
        this.userSubject = '#subject'
        this.userMessage = '#comment'
        this.actualMessage = 'Message the the user would enter in this field in order to try submitting some text. '
        this.sendMessage = '.btn-primary'
        this.clearButton = Selector('.btn')
        this.feedbackMessage = Selector('div')
    }
}
export default FeedbackPage