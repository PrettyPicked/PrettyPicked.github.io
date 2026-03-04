const puppeteer = require('puppeteer');

const pins = [
  {
    file: 'viral-snail-mucin.png',
    html: `<html><head>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
    <style>
    *{margin:0;padding:0;box-sizing:border-box}
    body{width:1000px;height:1500px;background:#f5ebe0;font-family:'Inter',sans-serif;position:relative;overflow:hidden}
    .bg-circle1{position:absolute;width:600px;height:600px;border-radius:50%;background:radial-gradient(circle,rgba(212,175,155,0.3),transparent);top:-100px;right:-150px}
    .bg-circle2{position:absolute;width:400px;height:400px;border-radius:50%;background:radial-gradient(circle,rgba(196,149,106,0.2),transparent);bottom:100px;left:-100px}
    .content{position:relative;z-index:1;padding:50px;height:100%;display:flex;flex-direction:column}
    .header{text-align:center;margin-bottom:30px}
    .pill{display:inline-block;background:rgba(196,149,106,0.15);border:1px solid rgba(196,149,106,0.3);padding:8px 20px;border-radius:30px;font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:#8b6f47}
    .hero{display:grid;grid-template-columns:1fr 1fr;gap:15px;margin-bottom:30px}
    .hero-main{grid-column:1/3;background:#fff;border-radius:24px;padding:30px;display:flex;align-items:center;justify-content:center;height:350px;box-shadow:0 4px 30px rgba(0,0,0,0.04)}
    .hero-main img{max-height:280px;object-fit:contain;filter:drop-shadow(0 15px 35px rgba(0,0,0,0.12))}
    .hero-sm{background:#fff;border-radius:20px;height:180px;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(0,0,0,0.03)}
    .hero-sm img{max-height:130px;object-fit:contain}
    .text-section{text-align:center;flex:1;display:flex;flex-direction:column;justify-content:center;gap:15px}
    .category{font-size:12px;font-weight:600;letter-spacing:3px;text-transform:uppercase;color:#c4956a}
    h1{font-family:'Playfair Display',serif;font-size:56px;color:#2c1810;line-height:1.15;font-weight:400}
    h1 em{font-style:italic;color:#8b6f47}
    .desc{font-size:17px;color:#7a6b5d;line-height:1.6;padding:0 30px}
    .rating{display:flex;align-items:center;justify-content:center;gap:8px;font-size:14px;color:#999}
    .stars{color:#daa520;font-size:20px}
    .cta-bar{background:#2c1810;color:#fff;padding:20px;border-radius:16px;text-align:center;font-weight:500;font-size:16px;letter-spacing:0.5px;margin-top:15px}
    .footer{display:flex;justify-content:space-between;align-items:center;padding-top:20px;border-top:1px solid rgba(0,0,0,0.06);margin-top:15px}
    .brand{font-family:'Playfair Display',serif;font-size:22px;font-style:italic;color:#8b6f47}
    .url{font-size:12px;color:#bbb;letter-spacing:1px}
    </style></head><body>
    <div class="bg-circle1"></div>
    <div class="bg-circle2"></div>
    <div class="content">
      <div class="header"><span class="pill">✨ editor's pick</span></div>
      <div class="hero">
        <div class="hero-main"><img src="https://m.media-amazon.com/images/I/416kUGx2rQL._SL1024_.jpg"></div>
        <div class="hero-sm"><img src="https://m.media-amazon.com/images/I/71RkZnOyg+L._SL1500_.jpg"></div>
        <div class="hero-sm"><img src="https://m.media-amazon.com/images/I/61kGsNijibL._SL1500_.jpg"></div>
      </div>
      <div class="text-section">
        <div class="category">K-Beauty Holy Grail</div>
        <h1>The Snail Mucin That Gave Me <em>Glass Skin</em></h1>
        <div class="desc">96% Snail Secretion Filtrate · Hydrating · Plumping · Barrier Repair</div>
        <div class="rating"><span class="stars">★★★★★</span> 98,000+ reviews on Amazon</div>
        <div class="cta-bar">UNDER $25 — SHOP THE FULL REVIEW →</div>
      </div>
      <div class="footer">
        <div class="brand">PrettyPicked ✨</div>
        <div class="url">PRETTYPICKED.NETLIFY.APP</div>
      </div>
    </div>
    </body></html>`
  },
  {
    file: 'viral-rare-beauty.png',
    html: `<html><head>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
    <style>
    *{margin:0;padding:0;box-sizing:border-box}
    body{width:1000px;height:1500px;background:#f3eaef;font-family:'Inter',sans-serif;position:relative;overflow:hidden}
    .bg-blob{position:absolute;width:500px;height:500px;border-radius:50%;background:radial-gradient(circle,rgba(176,101,160,0.15),transparent);top:-50px;left:-100px}
    .bg-blob2{position:absolute;width:350px;height:350px;border-radius:50%;background:radial-gradient(circle,rgba(220,180,200,0.25),transparent);bottom:200px;right:-80px}
    .content{position:relative;z-index:1;padding:50px;height:100%;display:flex;flex-direction:column}
    .header{text-align:center;margin-bottom:25px}
    .pill{display:inline-block;background:rgba(176,101,160,0.12);border:1px solid rgba(176,101,160,0.25);padding:8px 20px;border-radius:30px;font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:#9b5a8a}
    .photo-grid{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:280px 200px;gap:12px;margin-bottom:25px}
    .photo{background:#fff;border-radius:20px;overflow:hidden;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 25px rgba(0,0,0,0.04)}
    .photo:first-child{grid-row:1/3}
    .photo img{max-width:90%;max-height:90%;object-fit:contain;filter:drop-shadow(0 10px 25px rgba(0,0,0,0.1))}
    .lifestyle{background:linear-gradient(135deg,#e8d0dc,#dbb8cc);display:flex;align-items:center;justify-content:center;font-size:60px}
    .text-section{text-align:center;flex:1;display:flex;flex-direction:column;justify-content:center;gap:14px}
    .collab{font-size:12px;font-weight:600;letter-spacing:3px;text-transform:uppercase;color:#b065a0}
    h1{font-family:'Playfair Display',serif;font-size:52px;color:#2c1820;line-height:1.15;font-weight:400}
    h1 em{font-style:italic;color:#9b5a8a}
    .desc{font-size:16px;color:#7a6572;line-height:1.6;padding:0 20px}
    .quote-box{background:rgba(176,101,160,0.08);border-radius:16px;padding:18px 25px;margin:0 20px}
    .quote-box p{font-family:'Playfair Display',serif;font-style:italic;font-size:20px;color:#6b4060}
    .cta-bar{background:#2c1820;color:#fff;padding:20px;border-radius:16px;text-align:center;font-weight:500;font-size:16px;letter-spacing:0.5px;margin-top:10px}
    .footer{display:flex;justify-content:space-between;align-items:center;padding-top:20px;border-top:1px solid rgba(0,0,0,0.06);margin-top:15px}
    .brand{font-family:'Playfair Display',serif;font-size:22px;font-style:italic;color:#9b5a8a}
    .url{font-size:12px;color:#bbb;letter-spacing:1px}
    </style></head><body>
    <div class="bg-blob"></div>
    <div class="bg-blob2"></div>
    <div class="content">
      <div class="header"><span class="pill">💄 viral on tiktok</span></div>
      <div class="photo-grid">
        <div class="photo"><img src="https://m.media-amazon.com/images/I/4176CRjN4+L._SL1000_.jpg"></div>
        <div class="photo"><img src="https://m.media-amazon.com/images/I/61hIjBG+r0L._SL1500_.jpg"></div>
        <div class="lifestyle">💋</div>
      </div>
      <div class="text-section">
        <div class="collab">By Selena Gomez</div>
        <h1>One Tiny Dot = <em>All Day Flush</em></h1>
        <div class="desc">12 shades · Weightless formula · Lasts 12+ hours</div>
        <div class="quote-box"><p>"The most pigmented blush I've ever used — one tube lasts a year"</p></div>
        <div class="cta-bar">UNDER $25 — SEE ALL SHADES →</div>
      </div>
      <div class="footer">
        <div class="brand">PrettyPicked ✨</div>
        <div class="url">PRETTYPICKED.NETLIFY.APP</div>
      </div>
    </div>
    </body></html>`
  },
  {
    file: 'viral-sunset-lamp.png',
    html: `<html><head>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
    <style>
    *{margin:0;padding:0;box-sizing:border-box}
    body{width:1000px;height:1500px;background:#1a1410;font-family:'Inter',sans-serif;position:relative;overflow:hidden;color:#f5ebe0}
    .glow{position:absolute;width:800px;height:800px;border-radius:50%;background:radial-gradient(circle,rgba(255,140,50,0.12),rgba(255,80,20,0.05),transparent);top:50%;left:50%;transform:translate(-50%,-50%)}
    .content{position:relative;z-index:1;padding:50px;height:100%;display:flex;flex-direction:column}
    .header{text-align:center;margin-bottom:25px}
    .pill{display:inline-block;background:rgba(255,160,80,0.15);border:1px solid rgba(255,160,80,0.3);padding:8px 20px;border-radius:30px;font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:#e8a060}
    .hero-img{width:100%;height:450px;border-radius:24px;overflow:hidden;margin-bottom:30px;box-shadow:0 10px 50px rgba(255,100,30,0.15)}
    .hero-img img{width:100%;height:100%;object-fit:cover}
    .text-section{text-align:center;flex:1;display:flex;flex-direction:column;justify-content:center;gap:16px}
    .vibe{font-size:12px;font-weight:600;letter-spacing:3px;text-transform:uppercase;color:#e8a060}
    h1{font-family:'Playfair Display',serif;font-size:54px;color:#f5ebe0;line-height:1.15;font-weight:400}
    h1 em{font-style:italic;color:#e8a060}
    .features{display:flex;justify-content:center;gap:30px;font-size:13px;color:#a09080}
    .feature{display:flex;flex-direction:column;align-items:center;gap:6px}
    .feature .num{font-size:28px;font-weight:700;color:#e8a060;font-family:'Playfair Display',serif}
    .quote-area{background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:18px 25px;margin:0 20px}
    .quote-area p{font-family:'Playfair Display',serif;font-style:italic;font-size:19px;color:#d4b896}
    .cta-bar{background:linear-gradient(135deg,#d4874a,#c47040);color:#fff;padding:20px;border-radius:16px;text-align:center;font-weight:600;font-size:16px;letter-spacing:0.5px;margin-top:10px;box-shadow:0 8px 30px rgba(212,135,74,0.25)}
    .footer{display:flex;justify-content:space-between;align-items:center;padding-top:20px;border-top:1px solid rgba(255,255,255,0.06);margin-top:15px}
    .brand{font-family:'Playfair Display',serif;font-size:22px;font-style:italic;color:#e8a060}
    .url{font-size:12px;color:#666;letter-spacing:1px}
    </style></head><body>
    <div class="glow"></div>
    <div class="content">
      <div class="header"><span class="pill">🔥 room glow up</span></div>
      <div class="hero-img"><img src="https://m.media-amazon.com/images/I/71zjJtLCl5L._AC_SL1500_.jpg"></div>
      <div class="text-section">
        <div class="vibe">Golden Hour Vibes 24/7</div>
        <h1>The Lamp That <em>Broke the Internet</em></h1>
        <div class="features">
          <div class="feature"><span class="num">21</span>Colors</div>
          <div class="feature"><span class="num">4.8</span>Stars</div>
          <div class="feature"><span class="num">$19</span>Only</div>
        </div>
        <div class="quote-area"><p>"This single purchase made my room look like a Pinterest board"</p></div>
        <div class="cta-bar">SHOP NOW — LINK IN BIO →</div>
      </div>
      <div class="footer">
        <div class="brand">PrettyPicked ✨</div>
        <div class="url">PRETTYPICKED.NETLIFY.APP</div>
      </div>
    </div>
    </body></html>`
  }
];

(async () => {
  const browser = await puppeteer.launch({headless:'new', args:['--no-sandbox','--disable-setuid-sandbox']});
  for (const p of pins) {
    const page = await browser.newPage();
    await page.setViewport({width:1000, height:1500});
    await page.setContent(p.html, {waitUntil:'networkidle0', timeout:10000});
    await page.screenshot({path:p.file, type:'png'});
    await page.close();
    console.log('✅ ' + p.file);
  }
  await browser.close();
  console.log('Done!');
})();
