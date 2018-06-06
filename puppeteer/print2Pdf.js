const puppeteer = require('puppeteer');

(async() => {
const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto('http://www.163.com', {waitUntil: 'networkidle2'});
await page.pdf({path: 'D:/1.pdf', format: 'A4', printBackground: true, landscape: true});

await browser.close();
})();