import { Selector} from 'testcafe'

class AccountSummaryTab {
    constructor() {
        this.summary = Selector('#account_summary_tab')
    }
}
export default AccountSummaryTab