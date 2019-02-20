const puppeteer = require('puppeteer')
const { generateText, checkAndGenerate } = require('./util')

test('should output name and age', () => {
  const text = generateText('Parinya', 25)
  expect(text).toBe('Parinya (25 years old)')
})

test('should genertate a valid text output', () => {
const text = checkAndGenerate('Parinya', 25)
expect(text).toBe('Parinya (25 years old)')
})

test('should create an element with text and correct class',async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: ['--window-size=1920, 1080']
  })
  
  const page = await browser.newPage()
  await page.goto(
    'file:///home/parinz1234/Desktop/Test/Nodejs/js-testing-introduction/index.html'
  )
  await page.click('input#name')
  await page.type('input#name', 'Parinya')
  await page.click('input#age')
  await page.type('input#age', '25')
  await page.click('button#btnAddUser')
  const finalText = await page.$eval('.user-item', el => el.textContent)
  expect(finalText).toBe('Parinya (25 years old)')
}, 6000)