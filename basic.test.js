import {Selector} from 'testcafe'

//defining the suite
fixture `Getting started with TestCafe`
    .page `https://devexpress.github.io/testcafe/example/`
    .before(async t =>{
        //Test setup goes here
        //await runDatabaseReset()
        //await seedTestData()
    })
    .beforeEach(async t => {
        //Runs before each test
        await t.setPageLoadTimeout(0) //to set the waiting for loading elements to X miliseconds
    })
    .after(async t => {
        //Cleaning test data
        //Logging and sending data to monitoring systems
    })
    .afterEach(async t => {
        //Runs after each test
        await t.wait(1000) //only for debugging and not for production
    })
//defining the test
test('My first TestCafe test', async t =>{
//here goes the test

    //selectors = elements to replace in the steps
        const developer_name_input = Selector('#developer-name')
        const submit_button = Selector('#submit-button')
        const articleText = Selector('#article-header').innerText

    // await t.takeScreenshot({ fullPage: true }) = to screenshot the whole page
    // await t.takeElementScreenshot({path: './test/test.png}) = to specify the path
    // await t.takeElementScreenshot(submit_button) // screenshot an element

    await t.setTestSpeed(0.9) //change speed mainly for debug but it goes from 0.01 to 1
    await t.typeText(developer_name_input, 'John')
    await t.click(submit_button)
    await t.expect(articleText).contains('John')
})
test.skip('My first TestCafe test', async t =>{
    //this test is skipped
    
        //selectors = elements to replace in the steps
            const developer_name_input = Selector('#developer-name')
            const submit_button = Selector('#submit-button')
            const articleText = Selector('#article-header').innerText
    
        // await t.takeScreenshot({ fullPage: true }) = to screenshot the whole page
        // await t.takeElementScreenshot({path: './test/test.png}) = to specify the path
        // await t.takeElementScreenshot(submit_button) // screenshot an element
    
        await t.setTestSpeed(0.9) //change speed mainly for debug but it goes from 0.01 to 1
        await t.typeText(developer_name_input, 'John')
        await t.click(submit_button)
        await t.expect(articleText).contains('John')
    })
test.only('My first TestCafe test', async t =>{
    //this test is selected to be the only one to run
    
        //selectors = elements to replace in the steps
            const developer_name_input = Selector('#developer-name')
            const submit_button = Selector('#submit-button')
            const articleText = Selector('#article-header').innerText
    
        // await t.takeScreenshot({ fullPage: true }) = to screenshot the whole page
        // await t.takeElementScreenshot({path: './test/test.png}) = to specify the path
        // await t.takeElementScreenshot(submit_button) // screenshot an element
    
        await t.setTestSpeed(0.9) //change speed mainly for debug but it goes from 0.01 to 1
        await t.typeText(developer_name_input, 'John')
        await t.click(submit_button)
        await t.expect(articleText).contains('John')
    })
