
import { Builder, Capabilities, By } from "selenium-webdriver"
import { titleContains } from "selenium-webdriver/lib/until"
// const {By} = require('selenium-webdriver')
require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)

    await driver.sleep(10000)
})

test('Draw button displays 5 bots', async () => {
    const drawBtn = await driver.findElement(By.id('choices'))
    const displayed = await drawBtn.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(10000)
})
// running short on time. moving on.
test('check if a bot got removed', async () => {
    
})

test('', async () => {
    await driver.findElement(By.css('#draw'))
})

test('', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.xpath('(//button[text()="Add to Duo"])[1]')).click()
})
