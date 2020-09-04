import { Selector} from 'testcafe'

class SearchResultsPage {
    constructor() {
        this.resultMessage = Selector('h2')
        this.linkText =  Selector('div')
    }
}
export default SearchResultsPage