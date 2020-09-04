//import { Selector } from 'testcafe' - no longer needed since it's used from SearchResultsPage
import Navbar from '../page_objects/components/Navbar'
import SearchResultsPage from '../page_objects/pages/searchResultsPage'
//import xPathToCss from 'xpath-to-css'

const navbar = new Navbar()
const serachResults = new SearchResultsPage()

fixture `Search box test`
  .page `http://zero.webappsecurity.com/index.html`

  //Replaced with Navbar.js for practicing page object models
  //const searchBox = Selector('#searchTerm')

  //const resultMessage = Selector('div').withText('were found for the query')

//to user Xpath
// const xPath = 'long xPath css rules'
// const css =xPathToCss(xPath)

  test('User can search with searchbox', async t => {
// replaced using a function in the Navbar.js file
    // await t.typeText(navbar.searchBox, 'online banking', {paste: true})
    // await t.pressKey('enter')
    await navbar.search('online banking')

    await t.expect(serachResults.resultMessage.exists).ok()
    await t.expect(navbar.searchBox.exists).ok()
    await t.expect(serachResults.linkText.innerText).contains('Zero - Free Access to Online Banking')
})