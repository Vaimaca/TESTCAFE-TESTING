import { t } from "testcafe";

//ACTIONS
//actions found on https://devexpress.github.io/testcafe/documentation/reference/
// also https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/

await t.click('selector', {options})
await t.doubleClick('selector', {options})
await t.rightClick('selector', {options})
await t.drag('selector', 200, 0, {options})
await t.hover('selector', {options})
await t.selectText('selector')
await t.typeText('selector', 'text')
await t.pressKey('key')
await t.navigateTo('url')
await t.takeScreenshot()
await t.takeElementScreenshot()
await t.resizeWindow(800, 600)

//ASSERTIONS
//Documentation found https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/expect/
await t.expect('foo').eql('foo', 'message', options)
await t.expect('foo').notEql('foo')
await t.expect('foo').ok()
await t.expect('foo').notOk()
await t.expect('foo').contains('o')  //TRUE
await t.expect('foo').notContains('S') //TRUE
await t.expect(10).gt(4) //TRUE
await t.expect(10).gte(10) //TRUE
await t.expect(10).lt(10) //FALSE
await t.expect(10).lte(10) //TRUE
await t.expect(10).within(1, 100) //TRUE
await t.expect(10).notWithin(1, 100) //FALSE 