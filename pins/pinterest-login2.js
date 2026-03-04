const puppeteer = require('puppeteer-core');

(async () => {
    const browser = await puppeteer.launch({
        executablePath: '/usr/bin/google-chrome',
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-blink-features=AutomationControlled']
    });
    
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36');
    
    // Remove webdriver flag
    await page.evaluateOnNewDocument(() => {
        Object.defineProperty(navigator, 'webdriver', { get: () => false });
    });
    
    try {
        console.log('Going to Pinterest login...');
        await page.goto('https://www.pinterest.com/login/', { waitUntil: 'networkidle2', timeout: 30000 });
        await new Promise(r => setTimeout(r, 2000));
        
        // Type email
        const emailSel = 'input[name="id"], input[type="email"], #email';
        await page.waitForSelector(emailSel, { timeout: 10000 });
        await page.click(emailSel);
        await page.type(emailSel, 'businessforclawde@gmail.com', { delay: 80 });
        
        // Type password  
        const passSel = 'input[name="password"], input[type="password"]';
        await page.click(passSel);
        await page.type(passSel, 'BusinessforClawde878', { delay: 80 });
        
        await new Promise(r => setTimeout(r, 1000));
        
        // Click the red Log in button
        const buttons = await page.$$('button');
        for (const btn of buttons) {
            const text = await page.evaluate(el => el.textContent, btn);
            if (text.trim() === 'Log in') {
                console.log('Found Log in button, clicking...');
                await btn.click();
                break;
            }
        }
        
        // Wait for page change
        await new Promise(r => setTimeout(r, 8000));
        await page.screenshot({ path: '/tmp/pinterest-login2-result.png' });
        console.log('Current URL:', page.url());
        
        // Check if logged in
        const url = page.url();
        if (url.includes('/login') || url.includes('challenge')) {
            console.log('Login may have failed or needs verification');
        } else {
            console.log('Login appears successful!');
            // Save cookies
            const cookies = await page.cookies();
            require('fs').writeFileSync('/home/ubuntu/.openclaw/workspace/chlochlo-shop/pins/pinterest-cookies.json', JSON.stringify(cookies, null, 2));
            console.log('Cookies saved!');
        }
        
    } catch (err) {
        console.error('Error:', err.message);
        await page.screenshot({ path: '/tmp/pinterest-login2-error.png' });
    }
    
    await browser.close();
})();
