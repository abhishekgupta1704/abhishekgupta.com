import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const inputDir = './00-Documents/FilmPosters';
const outputDir = './00-Documents/FilmPosters/WebP';

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Get all PNG files
const files = fs.readdirSync(inputDir).filter(file => file.endsWith('.png'));

console.log(`Found ${files.length} PNG files to convert...`);

// Convert each file
files.forEach(async (file) => {
  const inputPath = path.join(inputDir, file);
  const outputFileName = file.replace('.png', '.webp');
  const outputPath = path.join(outputDir, outputFileName);
  
  try {
    await sharp(inputPath)
      .webp({ 
        quality: 85, // Good balance between quality and file size
        effort: 6,   // High compression effort
        smartSubsample: true // Better compression for photos
      })
      .toFile(outputPath);
    
    // Get file sizes for comparison
    const inputStats = fs.statSync(inputPath);
    const outputStats = fs.statSync(outputPath);
    const compressionRatio = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);
    
    console.log(`✅ ${file}`);
    console.log(`   Original: ${(inputStats.size / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   WebP: ${(outputStats.size / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   Compression: ${compressionRatio}%`);
    console.log('');
  } catch (error) {
    console.error(`❌ Error converting ${file}:`, error.message);
  }
});
