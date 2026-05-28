# PocketMC Website 🌐

The official landing page for **PocketMC**, the local-first Windows client for automated Minecraft server management. 

🚀 **Live Website**: [pocketmc.github.io/pocket-mc-website](https://pocketmc.github.io/pocket-mc-website/)

---

## 🎨 Tech Stack & Features

This website is designed with a premium, game-inspired aesthetic featuring rich, interactive micro-animations, fully responsive light/dark themes, and modern SEO structures.

### Core Stack
* **Framework**: React 19 + TypeScript
* **Build Tool**: Vite
* **Styling**: Tailwind CSS v4
* **Animation & Rendering**: Motion (Framer Motion v12) & Three.js

### Key UI Features
* **Scroll-Driven WebP Backdrop**: Plays a smooth, scroll-controlled background sequence of WebP frames.
* **Interactive Screenshot Tour**: A centered carousel tour of the desktop client views navigated by a custom floating **Dock** (featuring Client-Coordinate hover-scaling and dynamic active icons).
* **Fullscreen Lightbox Viewer**: View full-resolution, uncropped screenshots with touch gestures (swipes), close hooks (`Escape`, backdrop click), and keyboard/tap arrows.
* **Premium Dynamic Effects**:
  * `<ElectricBorder />`: Neon electric canvas trace with random noise wave algorithms (under details cards).
  * `<BorderGlow />`: Mouse-proximity edge lighting with multi-color gradients (under server stack).
  * `<LiquidEther />`: Interactive WebGL liquid shader background (under requirements/quickstart).
  * `<ClickSpark />`: Cursor-click physics particles.
  * `<PixelSnow />`: Retro pixelated snow fall overlay.
* **100% Theme-Adaptive**: All dynamic effects dynamically balance color palettes, opacities, and canvas blend-modes (`mix-blend-mode: normal` in light mode; `plus-lighter` in dark mode) to look perfect on both `#f7f5ef` (light beige) and `#09090b` (dark slate) backdrops.

### SEO & Developer Crawlers
* **SEO-Friendly Metadata**: Configured with Canonical URLs, JSON-LD Schema (`SoftwareApplication` rich snippets), Open Graph headers, and custom crawl controls (`robots.txt` + `sitemap.xml`).
* **LLM Context (`llm.txt`)**: A machine-readable developer log located in `public/llm.txt` containing codebase summaries, features, and target OS specifications for AI agents.

---

## 🛠️ Development & Commands

### Prerequisites
* [Node.js](https://nodejs.org/) (v18+ recommended)
* npm

### Installation
```bash
# Clone the repository
git clone https://github.com/PocketMC/pocket-mc-website.git
cd pocket-mc-website

# Install dependencies
npm install
```

### Local Development
```bash
# Run the Vite local development server
npm run dev
```

### Production Build
```bash
# Validate TypeScript compiles and build production distribution bundle
npm run build
```
The compiled output is emitted to the `dist/` directory, configured for sub-folder routing under the base path `/pocket-mc-website/`.

---

## 📂 Project Structure

```text
├── public/                 # Static assets (icons, screenshots, sitemap.xml, llm.txt)
├── src/
│   ├── components/         # Interactive canvas and layout components
│   │   ├── ui/             # Core skeleton components
│   │   ├── BorderGlow.tsx  # Dynamic edge-lighting components
│   │   ├── ClickSpark.tsx  # Click-spark effect
│   │   ├── Dock.tsx        # View-switching navigation dock
│   │   ├── ElectricBorder.tsx # Neon canvas path distortion
│   │   ├── LiquidEther.tsx # Fluid WebGL background
│   │   └── PixelSnow.tsx   # Pixelated snow overlays
│   ├── App.tsx             # Main page layout & state coordination
│   ├── index.css           # Global custom Tailwind classes & design variables
│   └── main.tsx            # React application entry point
├── package.json
└── vite.config.ts
```

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/PocketMC/pocket-mc-windows/blob/main/LICENSE) in the main app repository for details.
