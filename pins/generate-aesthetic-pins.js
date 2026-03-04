const puppeteer = require('puppeteer');

const pins = [
  {
    file: 'aesthetic-snail-mucin.png',
    // Warm cozy vibe - product floating on dreamy gradient with soft bokeh circles
    html: `<html><head>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
    *{margin:0;padding:0;box-sizing:border-box}
    body{width:1000px;height:1500px;font-family:'Inter',sans-serif;overflow:hidden;background:#1a1512}
    .scene{height:900px;position:relative;overflow:hidden;background:linear-gradient(160deg,#2a1f18 0%,#3d2b1e 30%,#4a3525 50%,#2a1f18 100%)}
    .bokeh{position:absolute;border-radius:50%;filter:blur(40px);opacity:0.3}
    .b1{width:300px;height:300px;background:#c4956a;top:50px;left:-50px}
    .b2{width:200px;height:200px;background:#d4a87a;top:300px;right:50px}
    .b3{width:250px;height:250px;background:#e8c4a0;bottom:50px;left:200px}
    .b4{width:150px;height:150px;background:#f5d5c0;top:100px;right:200px;opacity:0.2}
    .sparkle{position:absolute;width:4px;height:4px;background:#fff;border-radius:50%;opacity:0.6}
    .s1{top:120px;left:150px}.s2{top:300px;right:180px}.s3{top:500px;left:350px}.s4{top:200px;left:600px}.s5{top:650px;right:250px}.s6{top:400px;left:100px}
    .product-wrap{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:500px;height:700px;display:flex;align-items:center;justify-content:center}
    .product-wrap img{max-height:650px;object-fit:contain;filter:drop-shadow(0 30px 60px rgba(0,0,0,0.5));position:relative;z-index:2}
    .glow{position:absolute;width:350px;height:350px;background:radial-gradient(circle,rgba(196,149,106,0.25),transparent);border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%)}
    .tag{position:absolute;top:30px;left:30px;background:rgba(196,149,106,0.2);backdrop-filter:blur(10px);padding:10px 20px;border-radius:10px;font-size:13px;font-weight:500;color:#e8c4a0;z-index:5;border:1px solid rgba(196,149,106,0.15)}
    .reviews{position:absolute;top:30px;right:30px;background:rgba(0,0,0,0.4);backdrop-filter:blur(10px);padding:10px 20px;border-radius:10px;font-size:14px;font-weight:600;color:#f5ebe0;z-index:5}
    .bottom{padding:35px 55px;display:flex;flex-direction:column;gap:14px;color:#f5ebe0}
    h1{font-size:40px;font-weight:700;line-height:1.2}
    h1 span{color:#c4956a}
    .info{font-size:15px;color:#8a7a6a;font-weight:400}
    .review-box{background:rgba(196,149,106,0.08);border:1px solid rgba(196,149,106,0.12);border-radius:14px;padding:16px 22px;font-size:15px;color:#c4a080;font-style:italic}
    .review-box b{font-style:normal;color:#daa520}
    .cta{background:linear-gradient(135deg,#c4956a,#d4a87a);color:#fff;padding:18px;border-radius:14px;text-align:center;font-weight:600;font-size:16px}
    .brand{text-align:center;font-size:13px;color:#555;margin-top:5px}
    </style></head><body>
    <div class="scene">
      <div class="bokeh b1"></div><div class="bokeh b2"></div><div class="bokeh b3"></div><div class="bokeh b4"></div>
      <div class="sparkle s1"></div><div class="sparkle s2"></div><div class="sparkle s3"></div><div class="sparkle s4"></div><div class="sparkle s5"></div><div class="sparkle s6"></div>
      <div class="product-wrap">
        <div class="glow"></div>
        <img src="https://m.media-amazon.com/images/I/416kUGx2rQL._SL1024_.jpg">
      </div>
      <div class="tag">skincare essential ✨</div>
      <div class="reviews">⭐ 98K reviews</div>
    </div>
    <div class="bottom">
      <h1>the skincare product <span>everyone needs</span></h1>
      <div class="info">COSRX Snail Mucin 96% · hydrates, plumps, repairs</div>
      <div class="review-box">"my skin has never been this smooth. i use it every single night." <b>★★★★★</b></div>
      <div class="cta">under $25 → shop now</div>
      <div class="brand">prettypicked.netlify.app</div>
    </div>
    </body></html>`
  },
  {
    file: 'aesthetic-rare-beauty.png',
    // Soft pink dreamy vibe
    html: `<html><head>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
    *{margin:0;padding:0;box-sizing:border-box}
    body{width:1000px;height:1500px;font-family:'Inter',sans-serif;overflow:hidden;background:#1a1215}
    .scene{height:900px;position:relative;overflow:hidden;background:linear-gradient(160deg,#2a1520 0%,#3d2030 30%,#4a2838 50%,#2a1520 100%)}
    .bokeh{position:absolute;border-radius:50%;filter:blur(50px);opacity:0.25}
    .b1{width:350px;height:350px;background:#d4708a;top:30px;right:-80px}
    .b2{width:250px;height:250px;background:#e8a0b0;top:350px;left:-30px}
    .b3{width:200px;height:200px;background:#c46080;bottom:100px;right:150px}
    .b4{width:180px;height:180px;background:#f5c0d0;top:150px;left:300px;opacity:0.15}
    .sparkle{position:absolute;width:4px;height:4px;background:#ffd0e0;border-radius:50%;opacity:0.5}
    .s1{top:80px;left:120px}.s2{top:250px;right:150px}.s3{top:500px;left:400px}.s4{top:150px;left:550px}.s5{top:700px;right:200px}
    .product-wrap{position:absolute;top:48%;left:50%;transform:translate(-50%,-50%);display:flex;align-items:center;justify-content:center}
    .product-wrap img{max-height:700px;object-fit:contain;filter:drop-shadow(0 30px 60px rgba(0,0,0,0.5));position:relative;z-index:2}
    .glow{position:absolute;width:300px;height:400px;background:radial-gradient(ellipse,rgba(212,112,138,0.2),transparent);border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%)}
    .tag{position:absolute;top:30px;left:30px;background:rgba(212,112,138,0.15);backdrop-filter:blur(10px);padding:10px 20px;border-radius:10px;font-size:13px;font-weight:500;color:#f0b0c0;z-index:5;border:1px solid rgba(212,112,138,0.15)}
    .celeb{position:absolute;top:30px;right:30px;background:rgba(0,0,0,0.4);backdrop-filter:blur(10px);padding:10px 20px;border-radius:10px;font-size:14px;font-weight:600;color:#f5ebe0;z-index:5}
    .bottom{padding:35px 55px;display:flex;flex-direction:column;gap:14px;color:#f5ebe0}
    h1{font-size:40px;font-weight:700;line-height:1.2}
    h1 span{color:#d4708a}
    .info{font-size:15px;color:#8a6a7a;font-weight:400}
    .shades{display:flex;gap:10px;padding:5px 0}
    .shade{width:40px;height:40px;border-radius:50%;border:2px solid rgba(255,255,255,0.15);box-shadow:0 2px 8px rgba(0,0,0,0.3)}
    .review-box{background:rgba(212,112,138,0.08);border:1px solid rgba(212,112,138,0.12);border-radius:14px;padding:16px 22px;font-size:15px;color:#d4a0b0;font-style:italic}
    .review-box b{font-style:normal;color:#daa520}
    .cta{background:linear-gradient(135deg,#c4506a,#d4708a);color:#fff;padding:18px;border-radius:14px;text-align:center;font-weight:600;font-size:16px}
    .brand{text-align:center;font-size:13px;color:#555;margin-top:5px}
    </style></head><body>
    <div class="scene">
      <div class="bokeh b1"></div><div class="bokeh b2"></div><div class="bokeh b3"></div><div class="bokeh b4"></div>
      <div class="sparkle s1"></div><div class="sparkle s2"></div><div class="sparkle s3"></div><div class="sparkle s4"></div><div class="sparkle s5"></div>
      <div class="product-wrap">
        <div class="glow"></div>
        <img src="https://m.media-amazon.com/images/I/4176CRjN4+L._SL1000_.jpg">
      </div>
      <div class="tag">viral on tiktok 💄</div>
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
      <div class="review-box">"one tiny dot gives you the prettiest natural flush. one tube lasts forever." <b>★★★★★</b></div>
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
