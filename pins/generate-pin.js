const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const pins = [
  {
    file: 'pin-tiktok-made-me-buy-it.png',
    bg: 'linear-gradient(145deg, #f8e8d4, #f5d5c8, #e8c4d0)',
    emoji: '🛒',
    title: '15 TikTok Products',
    subtitle: 'That Are Actually Worth It',
    tag: '#tiktokmademebuyit',
    accent: '#c4956a',
    items: ['COSRX Snail Mucin', 'elf Halo Glow', 'Sunset Lamp', 'Ice Roller', 'Lip Mask']
  },
  {
    file: 'pin-room-glow-up.png',
    bg: 'linear-gradient(145deg, #d5cce6, #c8d4e8, #bdd0df)',
    emoji: '✨',
    title: 'Room Glow Up',
    subtitle: '10 Finds Under $25',
    tag: '#roomdecor',
    accent: '#8b7bb5',
    items: ['Sunset Lamp', 'Cloud Vase', 'LED Lights', 'Mushroom Candle', 'Wall Art']
  },
  {
    file: 'pin-skincare-routine.png',
    bg: 'linear-gradient(145deg, #c8d4c0, #d4dcc8, #e0e8d4)',
    emoji: '🧴',
    title: 'The Only Skincare',
    subtitle: 'Routine You Need',
    tag: '#skincareroutine',
    accent: '#7a9b6a',
    items: ['Cleanser', 'Serum', 'Moisturizer', 'SPF', 'Retinol']
  },
  {
    file: 'pin-best-tech-under-50.png',
    bg: 'linear-gradient(145deg, #1c1917, #2d2926, #3d3530)',
    emoji: '🎧',
    title: 'Best Tech Gadgets',
    subtitle: 'Under $50',
    tag: '#techfinds',
    accent: '#c4956a',
    items: ['Bluetooth Speaker', 'Laptop Stand', 'Phone Mount', 'USB Hub', 'Earbuds'],
    dark: true
  }
];

async function generatePin(pin) {
  const textColor = pin.dark ? '#f8f6f3' : '#1c1917';
  const mutedColor = pin.dark ? '#9c9590' : '#6b6560';
  
  const html = `<!DOCTYPE html>
<html><head><style>
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap');
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1000px; height: 1500px;
    background: ${pin.bg};
    font-family: 'DM Sans', sans-serif;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    padding: 80px;
  }
  .badge {
    background: ${pin.accent}22;
    border: 2px solid ${pin.accent}44;
    color: ${pin.accent};
    padding: 12px 28px;
    border-radius: 50px;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 40px;
  }
  .emoji { font-size: 80px; margin-bottom: 30px; }
  .title {
    font-family: 'Instrument Serif', serif;
    font-size: 82px;
    color: ${textColor};
    text-align: center;
    line-height: 1.1;
    margin-bottom: 10px;
  }
  .subtitle {
    font-family: 'Instrument Serif', serif;
    font-size: 64px;
    font-style: italic;
    color: ${pin.accent};
    text-align: center;
    margin-bottom: 50px;
  }
  .items {
    display: flex; flex-direction: column; gap: 16px;
    width: 100%;
  }
  .item {
    background: ${pin.dark ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.6)'};
    backdrop-filter: blur(10px);
    border-radius: 16px;
    padding: 22px 32px;
    font-size: 26px;
    font-weight: 500;
    color: ${textColor};
    display: flex; align-items: center; gap: 16px;
  }
  .item .dot {
    width: 10px; height: 10px;
    background: ${pin.accent};
    border-radius: 50%;
    flex-shrink: 0;
  }
  .footer {
    margin-top: 50px;
    display: flex; flex-direction: column; align-items: center; gap: 12px;
  }
  .tag {
    color: ${mutedColor};
    font-size: 20px;
    font-weight: 500;
  }
  .brand {
    font-family: 'Instrument Serif', serif;
    font-size: 28px;
    color: ${pin.accent};
    font-style: italic;
  }
</style></head><body>
  <div class="badge">Amazon Finds</div>
  <div class="emoji">${pin.emoji}</div>
  <div class="title">${pin.title}</div>
  <div class="subtitle">${pin.subtitle}</div>
  <div class="items">
    ${pin.items.map(i => `<div class="item"><span class="dot"></span>${i}</div>`).join('\n    ')}
  </div>
  <div class="footer">
    <div class="tag">${pin.tag}</div>
    <div class="brand">PrettyPicked ✨</div>
  </div>
</body></html>`;
  return html;
}

(async () => {
  const browser = await puppeteer.launch({ 
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  for (const pin of pins) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1000, height: 1500 });
    const html = await generatePin(pin);
    await page.setContent(html, { waitUntil: 'networkidle0' });
    const outPath = path.join(__dirname, pin.file);
    await page.screenshot({ path: outPath, type: 'png' });
    await page.close();
    console.log('✅ ' + pin.file);
  }
  
  await browser.close();
  console.log('Done!');
})();
