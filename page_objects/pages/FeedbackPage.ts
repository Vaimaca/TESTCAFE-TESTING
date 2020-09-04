import {Selector} from 'testcafe'

class FeedbackPage{
    userName: Selector = Selector('#name')
    userNameText: Selector = Selector('#name')
    userEmail: Selector = Selector('#email')
    userSubject: Selector = Selector('#subject')
    userMessage: Selector = Selector('#comment')
    actualMessage: Selector = Selector('Message the the user would enter in this field in order to try submitting some text. ')
    sendMessage: Selector = Selector('.btn-primary')
    clearButton: Selector = Selector('.btn')
    feedbackMessage: Selector = Selector('div')
}

export default FeedbackPage