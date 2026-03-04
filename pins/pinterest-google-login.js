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
    await page.evaluateOnNewDocument(() => {
        Object.defineProperty(navigator, 'webdriver', { get: () => false });
    });
    
    try {
        console.log('Going to Pinterest login...');
        await page.goto('https://www.pinterest.com/login/', { waitUntil: 'networkidle2', timeout: 30000 });
        await new Promise(r => setTimeout(r, 2000));
        
        // Click "Continue with Google"
        const buttons = await page.$$('button');
        for (const btn of buttons) {
            const text = await page.evaluate(el => el.textContent, btn);
            if (text.includes('Continue with Google') || text.includes('Google')) {
                console.log('Found Google button, clicking...');
                await btn.click();
                break;
            }
        }
        
        // Wait for Google login page
        await new Promise(r => setTimeout(r, 5000));
        await page.screenshot({ path: '/tmp/pinterest-google-1.png' });
        console.log('URL after Google click:', page.url());
        
        // Check if we're on Google's login page
        const url = page.url();
        if (url.includes('accounts.google.com')) {
            console.log('On Google login page, entering email...');
            await page.waitForSelector('input[type="email"]', { timeout: 10000 });
            await page.type('input[type="email"]', 'businessforclawde@gmail.com', { delay: 80 });
            await page.keyboard.press('Enter');
            
            await new Promise(r => setTimeout(r, 5000));
            await page.screenshot({ path: '/tmp/pinterest-google-2.png' });
            console.log('URL after email:', page.url());
            
            // Enter password
            try {
                await page.waitForSelector('input[type="password"]', { timeout: 10000 });
                await page.type('input[type="password"]', 'BusinessforClawde878', { delay: 80 });
                await page.keyboard.press('Enter');
                
                await new Promise(r => setTimeout(r, 8000));
                await page.screenshot({ path: '/tmp/pinterest-google-3.png' });
                console.log('URL after password:', page.url());
            } catch (e) {
                console.log('No password field found:', e.message);
                await page.screenshot({ path: '/tmp/pinterest-google-3.png' });
            }
        }
        
        // Check final state
        const finalUrl = page.url();
        console.log('Final URL:', finalUrl);
        
        if (!finalUrl.includes('login') && !finalUrl.includes('accounts.google')) {
            console.log('LOGIN SUCCESS!');
            const cookies = await page.cookies();
            require('fs').writeFileSync('/home/ubuntu/.openclaw/workspace/chlochlo-shop/pins/pinterest-cookies.json', JSON.stringify(cookies, null, 2));
            console.log('Cookies saved!');
        } else {
            console.log('Login not complete yet');
        }
        
    } catch (err) {
        console.error('Error:', err.message);
        await page.screenshot({ path: '/tmp/pinterest-google-error.png' });
    }
    
    await browser.close();
})();
