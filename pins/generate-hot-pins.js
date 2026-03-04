const puppeteer = require('puppeteer');

const pins = [
  {
    file: 'hot-snail-mucin.png',
    html: `<html><head>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
    <style>
    *{margin:0;padding:0;box-sizing:border-box}
    body{width:1000px;height:1500px;background:#faf0ea;font-family:'Inter',sans-serif;overflow:hidden}
    .collage{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;gap:8px;height:900px;padding:8px}
    .cell{border-radius:16px;overflow:hidden;position:relative}
    .cell img{width:100%;height:100%;object-fit:cover}
    .cell.main{grid-row:1/3}
    .overlay{position:absolute;bottom:0;left:0;right:0;padding:15px;background:linear-gradient(transparent,rgba(0,0,0,0.4));color:#fff;font-size:13px;font-weight:500;letter-spacing:1px;text-transform:uppercase}
    .text-area{padding:40px 50px;text-align:center;display:flex;flex-direction:column;align-items:center;gap:16px}
    .pill{display:inline-block;background:#e8d5c4;padding:8px 22px;border-radius:30px;font-size:11px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;color:#8b6f47}
    h1{font-family:'Playfair Display',serif;font-size:48px;color:#2c1810;line-height:1.2;font-weight:400}
    h1 em{font-style:italic;color:#a0785a}
    .sub{font-size:15px;color:#9a8a7a;line-height:1.6}
    .review{background:#fff;border-radius:14px;padding:16px 24px;font-family:'Playfair Display',serif;font-style:italic;font-size:17px;color:#6b5a4a;width:100%;box-shadow:0 2px 15px rgba(0,0,0,0.04)}
    .stars{color:#daa520;font-size:16px;margin-top:4px}
    .cta{background:#2c1810;color:#fff;padding:16px 40px;border-radius:50px;font-size:14px;font-weight:600;letter-spacing:1px;text-transform:uppercase}
    .brand-footer{display:flex;justify-content:space-between;align-items:center;padding:15px 50px;opacity:0.5;font-size:12px;color:#999}
    .brand-footer .b{font-family:'Playfair Display',serif;font-style:italic;font-size:18px;color:#a0785a;opacity:1}
    </style></head><body>
    <div class="collage">
      <div class="cell main"><img src="https://m.media-amazon.com/images/I/71t7-UV7ZdL._SL1500_.jpg"><div class="overlay">before & after ✨</div></div>
      <div class="cell"><img src="https://m.media-amazon.com/images/I/416kUGx2rQL._SL1024_.jpg"></div>
      <div class="cell"><img src="https://m.media-amazon.com/images/I/71cVOgvzMZL._SL1500_.jpg"></div>
    </div>
    <div class="text-area">
      <div class="pill">✨ holy grail skincare</div>
      <h1>The Snail Mucin Everyone Is <em>Obsessed</em> With</h1>
      <div class="sub">Glass skin · Plumps fine lines · 96% snail secretion</div>
      <div class="review">"I've tried everything and nothing comes close to this. My skin literally GLOWS now" <div class="stars">★★★★★ 98K+ reviews</div></div>
      <div class="cta">Under $25 → Shop Now</div>
    </div>
    <div class="brand-footer"><span class="b">PrettyPicked ✨</span><span>prettypicked.netlify.app</span></div>
    </body></html>`
  },
  {
    file: 'hot-rare-beauty.png',
    html: `<html><head>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
    <style>
    *{margin:0;padding:0;box-sizing:border-box}
    body{width:1000px;height:1500px;background:#f8eff4;font-family:'Inter',sans-serif;overflow:hidden}
    .hero{height:750px;position:relative;overflow:hidden;margin:8px;border-radius:20px}
    .hero img{width:100%;height:100%;object-fit:cover}
    .hero-overlay{position:absolute;top:0;left:0;right:0;bottom:0;background:linear-gradient(to bottom,transparent 40%,rgba(248,239,244,0.8) 75%,#f8eff4 100%)}
    .hero-badge{position:absolute;top:25px;left:25px;background:rgba(255,255,255,0.85);backdrop-filter:blur(10px);padding:8px 20px;border-radius:30px;font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:#9b5a8a}
    .product-row{display:flex;justify-content:center;gap:12px;margin:-80px 30px 0;position:relative;z-index:2}
    .swatch{width:80px;height:80px;border-radius:50%;border:3px solid #fff;box-shadow:0 4px 15px rgba(0,0,0,0.1);overflow:hidden}
    .swatch img{width:100%;height:100%;object-fit:cover}
    .text-area{padding:30px 50px;text-align:center;display:flex;flex-direction:column;align-items:center;gap:14px}
    .collab{font-size:12px;font-weight:600;letter-spacing:3px;text-transform:uppercase;color:#b065a0}
    h1{font-family:'Playfair Display',serif;font-size:46px;color:#2c1820;line-height:1.2;font-weight:400}
    h1 em{font-style:italic;color:#9b5a8a}
    .sub{font-size:15px;color:#9a7a8a;line-height:1.6}
    .quote{background:rgba(176,101,160,0.08);border-radius:14px;padding:16px 24px;font-family:'Playfair Display',serif;font-style:italic;font-size:17px;color:#6b4060;width:100%}
    .cta{background:#2c1820;color:#fff;padding:16px 40px;border-radius:50px;font-size:14px;font-weight:600;letter-spacing:1px;text-transform:uppercase}
    .brand-footer{display:flex;justify-content:space-between;align-items:center;padding:15px 50px;opacity:0.5;font-size:12px;color:#999;margin-top:auto}
    .brand-footer .b{font-family:'Playfair Display',serif;font-style:italic;font-size:18px;color:#9b5a8a;opacity:1}
    </style></head><body>
    <div class="hero">
      <img src="https://m.media-amazon.com/images/I/71fqBu23gxL._SL1500_.jpg">
      <div class="hero-overlay"></div>
      <div class="hero-badge">💄 TikTok Viral</div>
    </div>
    <div class="product-row">
      <div class="swatch" style="background:#e8a090"></div>
      <div class="swatch" style="background:#d4707a"></div>
      <div class="swatch" style="background:#c4506a"></div>
      <div class="swatch" style="background:#b86080"></div>
      <div class="swatch" style="background:#a04060"></div>
      <div class="swatch" style="background:#d49090"></div>
    </div>
    <div class="text-area">
      <div class="collab">By Selena Gomez</div>
      <h1>The Blush That <em>Broke TikTok</em></h1>
      <div class="sub">12 shades · One dot = all day · Lasts 12+ hours</div>
      <div class="quote">"I literally use one tiny dot and look like I just came back from vacation" ★★★★★</div>
      <div class="cta">Under $25 → See All Shades</div>
    </div>
    <div class="brand-footer"><span class="b">PrettyPicked ✨</span><span>prettypicked.netlify.app</span></div>
    </body></html>`
  },
  {
    file: 'hot-sunset-lamp.png',
    html: `<html><head>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
    <style>
    *{margin:0;padding:0;box-sizing:border-box}
    body{width:1000px;height:1500px;background:#0f0a05;font-family:'Inter',sans-serif;overflow:hidden;color:#f5ebe0}
    .hero{height:800px;position:relative;overflow:hidden;margin:8px;border-radius:20px}
    .hero img{width:100%;height:100%;object-fit:cover}
    .hero-overlay{position:absolute;top:0;left:0;right:0;bottom:0;background:linear-gradient(to bottom,transparent 50%,rgba(15,10,5,0.7) 80%,#0f0a05 100%)}
    .hero-badge{position:absolute;top:25px;left:25px;background:rgba(0,0,0,0.5);backdrop-filter:blur(10px);padding:8px 20px;border-radius:30px;font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:#e8a060;border:1px solid rgba(232,160,96,0.3)}
    .hero-price{position:absolute;top:25px;right:25px;background:rgba(232,160,96,0.9);padding:10px 22px;border-radius:30px;font-size:16px;font-weight:700;color:#fff}
    .stats{display:flex;justify-content:center;gap:40px;margin-top:-20px;position:relative;z-index:2}
    .stat{text-align:center}
    .stat .num{font-family:'Playfair Display',serif;font-size:36px;color:#e8a060}
    .stat .label{font-size:11px;color:#888;letter-spacing:2px;text-transform:uppercase;margin-top:4px}
    .text-area{padding:30px 50px;text-align:center;display:flex;flex-direction:column;align-items:center;gap:16px}
    .vibe{font-size:12px;font-weight:600;letter-spacing:3px;text-transform:uppercase;color:#e8a060}
    h1{font-family:'Playfair Display',serif;font-size:50px;color:#f5ebe0;line-height:1.2;font-weight:400}
    h1 em{font-style:italic;color:#e8a060}
    .sub{font-size:15px;color:#8a7a6a;line-height:1.6}
    .quote{background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);border-radius:14px;padding:16px 24px;font-family:'Playfair Display',serif;font-style:italic;font-size:17px;color:#c4a080;width:100%}
    .cta{background:linear-gradient(135deg,#d4874a,#e8a060);color:#fff;padding:16px 40px;border-radius:50px;font-size:14px;font-weight:600;letter-spacing:1px;text-transform:uppercase;box-shadow:0 8px 30px rgba(212,135,74,0.3)}
    .brand-footer{display:flex;justify-content:space-between;align-items:center;padding:15px 50px;font-size:12px;color:#555;margin-top:auto}
    .brand-footer .b{font-family:'Playfair Display',serif;font-style:italic;font-size:18px;color:#e8a060}
    </style></head><body>
    <div class="hero">
      <img src="https://m.media-amazon.com/images/I/71zjJtLCl5L._AC_SL1500_.jpg">
      <div class="hero-overlay"></div>
      <div class="hero-badge">🔥 Room Glow Up</div>
      <div class="hero-price">$19</div>
    </div>
    <div class="stats">
      <div class="stat"><div class="num">21</div><div class="label">Colors</div></div>
      <div class="stat"><div class="num">4.8★</div><div class="label">Rating</div></div>
      <div class="stat"><div class="num">50K+</div><div class="label">Sold</div></div>
    </div>
    <div class="text-area">
      <div class="vibe">Golden Hour Vibes 24/7</div>
      <h1>The Lamp That Made My Room <em>Go Viral</em></h1>
      <div class="sub">App controlled · USB powered · Instant aesthetic upgrade</div>
      <div class="quote">"My friends literally thought I moved into a new apartment. It was just this lamp." ★★★★★</div>
      <div class="cta">Shop Now → Link Below</div>
    </div>
    <div class="brand-footer"><span class="b">PrettyPicked ✨</span><span>prettypicked.netlify.app</span></div>
    </body></html>`
  }
];

(async () => {
  const browser = await puppeteer.launch({headless:'new', args:['--no-sandbox','--disable-setuid-sandbox']});
  for (const p of pins) {
    const page = await browser.newPage();
    await page.setViewport({width:1000, height:1500});
    await page.setContent(p.html, {waitUntil:'networkidle0', timeout:15000});
    await page.screenshot({path:p.file, type:'png'});
    await page.close();
    console.log('✅ ' + p.file);
  }
  await browser.close();
  console.log('Done!');
})();
