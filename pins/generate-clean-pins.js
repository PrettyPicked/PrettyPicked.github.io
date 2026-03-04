const puppeteer = require('puppeteer');

const pins = [
  {
    file: 'clean-sunset-lamp.png',
    html: `<html><head>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
    *{margin:0;padding:0;box-sizing:border-box}
    body{width:1000px;height:1500px;background:#0f0a05;font-family:'Inter',sans-serif;overflow:hidden;color:#f5ebe0}
    .hero{height:850px;position:relative;overflow:hidden;margin:0;border-radius:0 0 30px 30px}
    .hero img{width:100%;height:100%;object-fit:cover}
    .hero-overlay{position:absolute;top:0;left:0;right:0;bottom:0;background:linear-gradient(to bottom,transparent 50%,#0f0a05 100%)}
    .tag{position:absolute;top:30px;left:30px;background:rgba(0,0,0,0.5);backdrop-filter:blur(10px);padding:10px 20px;border-radius:10px;font-size:13px;font-weight:500;color:#e8a060}
    .price{position:absolute;top:30px;right:30px;background:#e8a060;padding:10px 22px;border-radius:10px;font-size:18px;font-weight:700;color:#fff}
    .bottom{padding:0 55px;margin-top:-30px;position:relative;z-index:2;display:flex;flex-direction:column;gap:20px}
    h1{font-size:44px;font-weight:700;color:#fff;line-height:1.2}
    h1 span{color:#e8a060}
    .info{font-size:15px;color:#8a7a6a;font-weight:400}
    .row{display:flex;gap:20px}
    .stat{background:rgba(255,255,255,0.06);border-radius:12px;padding:14px 22px;font-size:14px;color:#ccc;font-weight:500}
    .stat b{color:#e8a060;font-size:18px;display:block;margin-bottom:2px}
    .cta{background:#e8a060;color:#fff;padding:18px;border-radius:14px;text-align:center;font-weight:600;font-size:16px;margin-top:5px}
    .brand{text-align:center;font-size:13px;color:#555;margin-top:15px}
    </style></head><body>
    <div class="hero">
      <img src="https://m.media-amazon.com/images/I/71zjJtLCl5L._AC_SL1500_.jpg">
      <div class="hero-overlay"></div>
      <div class="tag">amazon find</div>
      <div class="price">$19</div>
    </div>
    <div class="bottom">
      <h1>this sunset lamp is <span>everything</span></h1>
      <div class="info">21 colors · app controlled · USB powered</div>
      <div class="row">
        <div class="stat"><b>4.8★</b>rating</div>
        <div class="stat"><b>50K+</b>sold</div>
        <div class="stat"><b>21</b>colors</div>
      </div>
      <div class="cta">shop now →</div>
      <div class="brand">prettypicked.netlify.app</div>
    </div>
    </body></html>`
  },
  {
    file: 'clean-snail-mucin.png',
    html: `<html><head>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
    *{margin:0;padding:0;box-sizing:border-box}
    body{width:1000px;height:1500px;background:#faf5f0;font-family:'Inter',sans-serif;overflow:hidden}
    .hero{height:800px;position:relative;overflow:hidden;background:#fff;display:flex;align-items:center;justify-content:center}
    .hero img{max-height:700px;object-fit:contain;filter:drop-shadow(0 20px 50px rgba(0,0,0,0.08))}
    .hero-overlay{position:absolute;bottom:0;left:0;right:0;height:150px;background:linear-gradient(transparent,#faf5f0)}
    .tag{position:absolute;top:30px;left:30px;background:#f0e6da;padding:10px 20px;border-radius:10px;font-size:13px;font-weight:500;color:#8b6f47}
    .stars-tag{position:absolute;top:30px;right:30px;background:#fff;padding:10px 20px;border-radius:10px;font-size:14px;font-weight:600;color:#333;box-shadow:0 2px 10px rgba(0,0,0,0.06)}
    .bottom{padding:0 55px;display:flex;flex-direction:column;gap:16px}
    h1{font-size:42px;font-weight:700;color:#2c1810;line-height:1.2}
    h1 span{color:#a0785a}
    .info{font-size:15px;color:#9a8a7a;font-weight:400;line-height:1.5}
    .review{background:#fff;border-radius:14px;padding:18px 22px;font-size:15px;color:#6b5a4a;font-style:italic;box-shadow:0 2px 12px rgba(0,0,0,0.04)}
    .review b{font-style:normal;color:#daa520}
    .cta{background:#2c1810;color:#fff;padding:18px;border-radius:14px;text-align:center;font-weight:600;font-size:16px}
    .brand{text-align:center;font-size:13px;color:#ccc;margin-top:10px}
    </style></head><body>
    <div class="hero">
      <img src="https://m.media-amazon.com/images/I/416kUGx2rQL._SL1024_.jpg">
      <div class="hero-overlay"></div>
      <div class="tag">skincare essential</div>
      <div class="stars-tag">⭐ 98K reviews</div>
    </div>
    <div class="bottom">
      <h1>the skincare product <span>everyone needs</span></h1>
      <div class="info">COSRX Snail Mucin 96% · hydrates, plumps, repairs</div>
      <div class="review">"my skin has never been this smooth. I use it every single night." <b>★★★★★</b></div>
      <div class="cta">under $25 → shop now</div>
      <div class="brand">prettypicked.netlify.app</div>
    </div>
    </body></html>`
  },
  {
    file: 'clean-rare-beauty.png',
    html: `<html><head>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
    *{margin:0;padding:0;box-sizing:border-box}
    body{width:1000px;height:1500px;background:#f8eff4;font-family:'Inter',sans-serif;overflow:hidden}
    .hero{height:800px;position:relative;overflow:hidden;background:#fdf5f8;display:flex;align-items:center;justify-content:center}
    .hero img{max-height:700px;object-fit:contain;filter:drop-shadow(0 20px 50px rgba(0,0,0,0.08))}
    .hero-overlay{position:absolute;bottom:0;left:0;right:0;height:150px;background:linear-gradient(transparent,#f8eff4)}
    .tag{position:absolute;top:30px;left:30px;background:rgba(176,101,160,0.1);padding:10px 20px;border-radius:10px;font-size:13px;font-weight:500;color:#9b5a8a}
    .celeb{position:absolute;top:30px;right:30px;background:#fff;padding:10px 20px;border-radius:10px;font-size:14px;font-weight:600;color:#333;box-shadow:0 2px 10px rgba(0,0,0,0.06)}
    .bottom{padding:0 55px;display:flex;flex-direction:column;gap:16px}
    h1{font-size:42px;font-weight:700;color:#2c1820;line-height:1.2}
    h1 span{color:#9b5a8a}
    .info{font-size:15px;color:#9a7a8a;font-weight:400;line-height:1.5}
    .shades{display:flex;gap:10px;justify-content:center;padding:5px 0}
    .shade{width:45px;height:45px;border-radius:50%;border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,0.1)}
    .review{background:#fff;border-radius:14px;padding:18px 22px;font-size:15px;color:#6b4060;font-style:italic;box-shadow:0 2px 12px rgba(0,0,0,0.04)}
    .review b{font-style:normal;color:#daa520}
    .cta{background:#2c1820;color:#fff;padding:18px;border-radius:14px;text-align:center;font-weight:600;font-size:16px}
    .brand{text-align:center;font-size:13px;color:#ccc;margin-top:10px}
    </style></head><body>
    <div class="hero">
      <img src="https://m.media-amazon.com/images/I/4176CRjN4+L._SL1000_.jpg">
      <div class="hero-overlay"></div>
      <div class="tag">viral on tiktok</div>
      <div class="celeb">by Selena Gomez</div>
    </div>
    <div class="bottom">
      <h1>one dot of this blush <span>lasts all day</span></h1>
      <div class="info">Rare Beauty Soft Pinch Liquid Blush · 12 shades</div>
      <div class="shades">
        <div class="shade" style="background:#e8a090"></div>
        <div class="shade" style="background:#d4707a"></div>
        <div class="shade" style="background:#c4506a"></div>
        <div class="shade" style="background:#b86080"></div>
        <div class="shade" style="background:#d49090"></div>
        <div class="shade" style="background:#e0b0a0"></div>
      </div>
      <div class="review">"one tiny dot gives you the prettiest natural flush. one tube lasts forever." <b>★★★★★</b></div>
      <div class="cta">under $25 → see all shades</div>
      <div class="brand">prettypicked.netlify.app</div>
    </div>
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
