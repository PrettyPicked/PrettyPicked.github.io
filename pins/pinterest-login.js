const puppeteer = require('puppeteer-core');

(async () => {
    const browser = await puppeteer.launch({
        executablePath: '/usr/bin/google-chrome',
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
    });
    
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
    
    try {
        console.log('Going to Pinterest login...');
        await page.goto('https://www.pinterest.com/login/', { waitUntil: 'networkidle2', timeout: 30000 });
        await page.screenshot({ path: '/tmp/pinterest-1-login-page.png' });
        console.log('Screenshot saved: login page');
        
        // Type email
        await page.waitForSelector('input[name="id"], input[type="email"], #email', { timeout: 10000 });
        const emailInput = await page.$('input[name="id"]') || await page.$('input[type="email"]') || await page.$('#email');
        await emailInput.click();
        await emailInput.type('businessforclawde@gmail.com', { delay: 50 });
        
        // Type password
        const passInput = await page.$('input[name="password"]') || await page.$('input[type="password"]') || await page.$('#password');
        await passInput.click();
        await passInput.type('BusinessforClawde878', { delay: 50 });
        
        await page.screenshot({ path: '/tmp/pinterest-2-filled.png' });
        console.log('Screenshot saved: filled form');
        
        // Click login button
        const loginBtn = await page.$('button[type="submit"]') || await page.$('div[data-test-id="registerFormSubmitButton"]');
        if (loginBtn) {
            await loginBtn.click();
        } else {
            await page.keyboard.press('Enter');
        }
        
        // Wait for navigation
        await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 30000 }).catch(() => {});
        await new Promise(r => setTimeout(r, 3000));
        await page.screenshot({ path: '/tmp/pinterest-3-after-login.png' });
        console.log('Screenshot saved: after login');
        console.log('Current URL:', page.url());
        
        // Save cookies for future use
        const cookies = await page.cookies();
        const fs = require('fs');
        fs.writeFileSync('/home/ubuntu/.openclaw/workspace/chlochlo-shop/pins/pinterest-cookies.json', JSON.stringify(cookies, null, 2));
        console.log('Cookies saved!');
        
    } catch (err) {
        console.error('Error:', err.message);
        await page.screenshot({ path: '/tmp/pinterest-error.png' });
    }
    
    await browser.close();
})();
