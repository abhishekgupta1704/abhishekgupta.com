import sharp from 'sharp';
import fs from 'fs';

/**
 * Convert image to WebP format with target file size
 * @param {string} inputFile - Path to input image
 * @param {string} outputFile - Path for output WebP file
 * @param {number} targetSizeKB - Target file size in KB (default: 150)
 * @param {number} initialQuality - Initial quality to try (default: 85)
 */
async function convertToWebP(inputFile, outputFile, targetSizeKB = 150, initialQuality = 85) {
  try {
    console.log(`Converting ${inputFile} to WebP...`);
    
    // First attempt with initial quality
    await sharp(inputFile)
      .webp({ quality: initialQuality, effort: 6 })
      .toFile(outputFile);
    
    const stats = await sharp(outputFile).metadata();
    const fileSize = fs.statSync(outputFile).size;
    const fileSizeKB = fileSize / 1024;
    
    console.log(`Initial result: ${stats.width}x${stats.height}, ${fileSizeKB.toFixed(2)} KB`);
    
    // If file is too large, try progressively lower quality
    if (fileSizeKB > targetSizeKB * 1.1) { // 10% tolerance
      console.log(`File too large, optimizing for target ${targetSizeKB} KB...`);
      
      let quality = initialQuality - 10;
      while (quality > 10 && fileSizeKB > targetSizeKB) {
        await sharp(inputFile)
          .webp({ quality, effort: 6 })
          .toFile(outputFile);
        
        const newFileSize = fs.statSync(outputFile).size;
        const newFileSizeKB = newFileSize / 1024;
        
        console.log(`Quality ${quality}: ${newFileSizeKB.toFixed(2)} KB`);
        
        if (newFileSizeKB <= targetSizeKB) break;
        quality -= 10;
      }
    }
    
    // Final check
    const finalStats = await sharp(outputFile).metadata();
    const finalFileSize = fs.statSync(outputFile).size;
    const finalFileSizeKB = finalFileSize / 1024;
    
    console.log(`\n✅ Conversion complete!`);
    console.log(`📁 Output: ${outputFile}`);
    console.log(`📐 Dimensions: ${finalStats.width}x${finalStats.height}`);
    console.log(`💾 File size: ${finalFileSizeKB.toFixed(2)} KB`);
    console.log(`🎯 Target: ${targetSizeKB} KB`);
    
    if (finalFileSizeKB <= targetSizeKB) {
      console.log(`✨ Successfully met target size!`);
    } else {
      console.log(`⚠️  File is ${((finalFileSizeKB - targetSizeKB) / targetSizeKB * 100).toFixed(1)}% over target`);
    }
    
  } catch (error) {
    console.error('❌ Error converting image:', error.message);
  }
}

// Command line usage
if (process.argv.length >= 4) {
  const inputFile = process.argv[2];
  const outputFile = process.argv[3];
  const targetSize = process.argv[4] ? parseInt(process.argv[4]) : 150;
  
  convertToWebP(inputFile, outputFile, targetSize);
} else {
  console.log(`
Usage:
  node convert-to-webp.js <input-file> <output-file> [target-size-kb]

Examples:
  node convert-to-webp.js image.jpg image.webp
  node convert-to-webp.js photo.JPG photo.webp 200
  
Default target size: 150 KB
  `);
}

export default convertToWebP;
