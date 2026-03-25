# Image Conversion Scripts

This folder contains reusable scripts for image optimization.

## convert-to-webp.js

Converts any image to WebP format with automatic file size optimization.

### Usage

```bash
node scripts/convert-to-webp.js <input-file> <output-file> [target-size-kb]
```

### Examples

```bash
# Basic usage (default 150KB target)
node scripts/convert-to-webp.js photo.jpg photo.webp

# Custom target size
node scripts/convert-to-webp.js large-image.JPG optimized.webp 200

# Convert profile picture
node scripts/convert-to-webp.js "00-Documents/AbhishekProfilePicture.JPG" "00-Documents/AbhishekProfilePicture.webp"
```

### Features

- **Automatic quality optimization**: Starts at 85% quality, reduces if file is too large
- **Target size control**: Aims for specified KB size (default: 150KB)
- **Progressive attempts**: Tries multiple quality levels until target is met
- **Detailed feedback**: Shows dimensions, file size, and success status
- **Error handling**: Graceful error messages

### Supported Formats

- Input: JPEG, PNG, TIFF, and other formats Sharp supports
- Output: WebP format

### Tips

- Use quotes around file paths with spaces
- Target size has 10% tolerance for optimal quality
- Minimum quality stops at 10% to prevent excessive compression
