import {Selector, t} from 'testcafe'

class BasePage {
    async waitFor(milliseconds) {
        await t.wait(milliseconds)
    }
    async setTestSpeed(speedLevel) {
        await t.speedTest(speedLevel)
    }
}
export default BasePage