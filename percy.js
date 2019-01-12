const puppeteer = require('puppeteer');
const { percySnapshot } = require('@percy/puppeteer');
const TEST_URL = "http://localhost:8000";

(async () => {
    try {
        const browser = await puppeteer.launch({
            executablePath: '/usr/bin/chromium-browser',
            headless: true,
            timeout: 20000,
        });
        let page = await browser.newPage()
        await page.goto(TEST_URL, {
            waitUntil: 'networkidle0'
        });
        await percySnapshot(page, 'Homepage')
        await browser.close()
    }
    catch(error) {
        console.error(error);
    }
})();
