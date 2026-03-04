const puppeteer = require('puppeteer');

const products = [
  {
    file: 'product-snail-mucin.png',
    img: 'https://m.media-amazon.com/images/I/416kUGx2rQL._SL1024_.jpg',
    name: 'COSRX Snail Mucin',
    subtitle: '96% Essence',
    price: 'Under $25',
    tag: '#1 Best Seller in K-Beauty',
    bg: 'linear-gradient(160deg, #fef1ec, #fce4ec, #f8e0ef)',
    accent: '#d4788a',
    quote: '"My skin has never looked this good"',
    stars: '⭐⭐⭐⭐⭐ 98K+ reviews'
  },
  {
    file: 'product-rare-beauty.png',
    img: 'https://m.media-amazon.com/images/I/4176CRjN4+L._SL1000_.jpg',
    name: 'Rare Beauty',
    subtitle: 'Soft Pinch Liquid Blush',
    price: 'Under $25',
    tag: 'By Selena Gomez',
    bg: 'linear-gradient(160deg, #f5e6f0, #eedaf0, #e4d0ee)',
    accent: '#b065a0',
    quote: '"One tiny dot = all day flush"',
    stars: '⭐⭐⭐⭐⭐ Most viral blush on TikTok'
  },
  {
    file: 'product-sunset-lamp.png',
    img: 'https://m.media-amazon.com/images/I/71zjJtLCl5L._AC_SL1500_.jpg',
    name: 'Sunset Lamp',
    subtitle: '21 Colors Projector',
    price: 'Under $20',
    tag: 'Golden hour vibes 24/7',
    bg: 'linear-gradient(160deg, #fde8d0, #fdd9b5, #f8c896)',
    accent: '#d4874a',
    quote: '"Changed my whole room aesthetic"',
    stars: '⭐⭐⭐⭐⭐ TikTok viral sensation'
  }
];

function makeHtml(p) {
  return `<!DOCTYPE html>
<html><head>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{width:1000px;height:1500px;background:${p.bg};font-family:'DM Sans',sans-serif;display:flex;flex-direction:column;align-items:center;padding:60px 70px;overflow:hidden}
.top-tag{background:${p.accent}18;border:1.5px solid ${p.accent}35;color:${p.accent};padding:10px 24px;border-radius:50px;font-size:15px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:40px}
.img-wrap{width:420px;height:420px;background:rgba(255,255,255,0.55);border-radius:40px;display:flex;align-items:center;justify-content:center;box-shadow:0 20px 60px rgba(0,0,0,0.06);margin-bottom:40px;border:1px solid rgba(255,255,255,0.8)}
.img-wrap img{max-width:300px;max-height:300px;object-fit:contain;filter:drop-shadow(0 10px 30px rgba(0,0,0,0.1))}
.name{font-family:'Instrument Serif',serif;font-size:72px;color:#1c1917;text-align:center;line-height:1.1;margin-bottom:6px}
.sub{font-family:'Instrument Serif',serif;font-size:48px;font-style:italic;color:${p.accent};text-align:center;margin-bottom:30px}
.quote{font-size:22px;color:#555;text-align:center;font-style:italic;margin-bottom:20px;padding:0 40px}
.stars{font-size:18px;color:#888;text-align:center;margin-bottom:30px}
.price-btn{background:${p.accent};color:#fff;padding:18px 50px;border-radius:60px;font-size:22px;font-weight:700;letter-spacing:0.5px;margin-bottom:30px;box-shadow:0 8px 25px ${p.accent}40}
.tag-line{color:${p.accent};font-size:16px;font-weight:600;letter-spacing:1px;text-transform:uppercase;margin-bottom:auto}
.footer{display:flex;flex-direction:column;align-items:center;gap:6px;margin-top:20px}
.brand{font-family:'Instrument Serif',serif;font-size:26px;color:${p.accent};font-style:italic}
.cta{font-size:14px;color:#999;letter-spacing:1px;text-transform:uppercase}
</style></head><body>
<div class="top-tag">PrettyPicked Approved ✨</div>
<div class="img-wrap"><img src="${p.img}"></div>
<div class="name">${p.name}</div>
<div class="sub">${p.subtitle}</div>
<div class="quote">${p.quote}</div>
<div class="stars">${p.stars}</div>
<div class="price-btn">${p.price} → Shop Now</div>
<div class="tag-line">${p.tag}</div>
<div class="footer">
<div class="brand">PrettyPicked ✨</div>
<div class="cta">prettypicked.netlify.app</div>
</div>
</body></html>`;
}

(async () => {
  const browser = await puppeteer.launch({headless:'new', args:['--no-sandbox','--disable-setuid-sandbox']});
  for (const p of products) {
    const page = await browser.newPage();
    await page.setViewport({width:1000, height:1500});
    await page.setContent(makeHtml(p), {waitUntil:'networkidle0', timeout:10000});
    await page.screenshot({path:p.file, type:'png'});
    await page.close();
    console.log('✅ ' + p.file);
  }
  await browser.close();
  console.log('Done!');
})();
