const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const tailwind = require('@tailwindcss/postcss');

async function buildCss() {
  const inputPath = path.join(__dirname, '../src/app/globals.source.css');
  const outputPath = path.join(__dirname, '../src/app/globals.css');

  console.log('Compiling Tailwind CSS from:', inputPath);
  const css = fs.readFileSync(inputPath, 'utf8');

  try {
    const result = await postcss([tailwind()]).process(css, {
      from: inputPath,
      to: outputPath,
    });

    fs.writeFileSync(outputPath, result.css, 'utf8');
    console.log(`✓ Tailwind CSS successfully compiled to ${outputPath} (${(result.css.length / 1024).toFixed(1)} KB)`);
  } catch (error) {
    console.error('Error compiling Tailwind CSS:', error);
    process.exit(1);
  }
}

buildCss();
