# Collection Carousel — Shopify Theme OS 2.0

Custom Shopify section developed as part of a technical test.

This section renders a responsive collection carousel using Shopify Theme OS 2.0 standards, Liquid best practices, and Swiper.js for interaction.

---

## ✨ Features

- Custom section compatible with **Shopify Theme OS 2.0**
- Supports **0 / 1 / N slides** without breaking layout or functionality
- Uses **Swiper.js** for carousel behavior
- Fully responsive with `srcset` and `sizes`
- Slide-level image override with fallback to collection featured image
- Shopify-native placeholder when no image is available
- Configurable through the Theme Editor (blocks & settings)
- Clean, maintainable, and well-structured code

---

## 🧱 Section Structure

Each slide is configured as a **block**, allowing merchants to:

- Select a collection
- Optionally override the image
- Customize title and description
- Define a custom URL (fallbacks to collection URL)

---

## 🖼️ Image Handling Logic

Image rendering follows this priority:

1. Slide custom image
2. Selected collection featured image
3. Shopify default image placeholder (`placeholder_svg_tag`)

This ensures the section never breaks visually, even when images are missing.

---

## 📱 Responsive Behavior

- Images use `srcset` and `sizes` for optimized loading
- Layout adapts across mobile, tablet, and desktop
- Placeholder SVG is wrapped and styled to behave responsively like real images
- Carousel initializes **only when more than one slide exists**

---

## 🧪 Edge Cases Covered

- No blocks added → section does not render
- Single slide → static layout, no carousel initialization
- Multiple slides → full Swiper carousel behavior
- Missing images → graceful fallback with consistent layout

---

## 🛠️ Tech Stack

- Shopify Liquid
- Shopify Theme OS 2.0
- Swiper.js
- Vanilla JavaScript
- CSS (modern layout techniques)

---

## 🚀 How to Test

1. Add the section in the Theme Editor
2. Create 0, 1, or multiple blocks
3. Test slides with:
   - custom image
   - no image
   - collections without featured images
4. Resize the viewport to validate responsive behavior

---

## 📌 Notes

This implementation follows Shopify best practices and focuses on robustness, maintainability, and merchant experience.
