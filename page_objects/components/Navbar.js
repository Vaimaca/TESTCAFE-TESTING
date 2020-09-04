//PAGE OBJECT (model): Using this specific file to target specific objects on the page and be able to recall them whenever are needed. Furthermore, if the page chages then they can simply be chaged on this file without having to change each test that targets the elements.

import {Selector, t} from 'testcafe'

class Navbar {
    constructor() {
        this.searchBox = Selector('#searchTerm')
        this.signInButton = Selector('#signin_button')
        this.userIcon = Selector('.icon-user')
        this.logoutButton = Selector('#logout_link')
    }

    async search(text) {
        await t
        .typeText(this.searchBox, text, {paste: true, replace: true})
        .pressKey('enter')
    }
}
export default Navbar