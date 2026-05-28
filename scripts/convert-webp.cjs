const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const root = path.join(__dirname, '..');
const screenshotsDir = path.join(root, 'public/screenshots');
const blockImages = [
  path.join(root, 'public/block_cobble.png'),
  path.join(root, 'public/block_diamond.png'),
  path.join(root, 'public/block_grass.png'),
  path.join(root, 'public/hero_head.png'),
  path.join(root, 'public/logo.png'),
];

async function convertToWebP(inputPath) {
  const ext = path.extname(inputPath);
  const outputPath = inputPath.replace(ext, '.webp');
  try {
    const info = await sharp(inputPath)
      .webp({ quality: 85, effort: 6 })
      .toFile(outputPath);
    const inSize = fs.statSync(inputPath).size;
    const saving = (((inSize - info.size) / inSize) * 100).toFixed(1);
    console.log(`✓ ${path.basename(inputPath)} → ${path.basename(outputPath)} (${(inSize/1024).toFixed(0)}KB → ${(info.size/1024).toFixed(0)}KB, -${saving}%)`);
  } catch (e) {
    console.error(`✗ ${path.basename(inputPath)}: ${e.message}`);
  }
}

async function main() {
  const screenshotFiles = fs.readdirSync(screenshotsDir)
    .filter(f => f.endsWith('.png'))
    .map(f => path.join(screenshotsDir, f));

  const allFiles = [...screenshotFiles, ...blockImages.filter(f => fs.existsSync(f))];
  console.log(`Converting ${allFiles.length} images to WebP...`);
  await Promise.all(allFiles.map(convertToWebP));
  console.log('Done!');
}

main();
