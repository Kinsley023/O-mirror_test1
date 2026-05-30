const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    console.log('Launching browser...');
    const browser = await puppeteer.launch({
        headless: "new",
        args: ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream']
    });
    
    const page = await browser.newPage();
    
    page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
    page.on('pageerror', err => console.error('BROWSER ERROR:', err.toString()));
    
    const filePath = 'file://' + path.resolve(__dirname, 'index.html').replace(/\\/g, '/');
    console.log('Navigating to:', filePath);
    
    await page.goto(filePath, { waitUntil: 'networkidle0' });
    
    console.log('Starting quiz...');
    await page.click('#start-btn');
    
    // Play through quiz
    for(let i=0; i<3; i++) {
        await page.waitForTimeout(600);
        const options = await page.$$('.quiz-option');
        if(options.length > 0) {
            await options[0].click();
        }
    }
    
    console.log('Waiting for camera screen...');
    await page.waitForSelector('#camera-screen.active', {timeout: 5000});
    await page.waitForTimeout(1000); // let camera init
    
    console.log('Capturing photo...');
    await page.click('#capture-btn');
    
    console.log('Waiting for result screen...');
    await page.waitForSelector('#result-screen.active', {timeout: 10000});
    
    console.log('Wait a few seconds for MediaPipe processing...');
    await page.waitForTimeout(3000);
    
    const hasCanvas = await page.evaluate(() => {
        const avatar = document.getElementById('result-avatar');
        return avatar.querySelector('canvas') !== null;
    });
    
    console.log('Canvas generated successfully:', hasCanvas);
    
    await browser.close();
    console.log('Done.');
})();
