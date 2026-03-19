# 🥦 Food Supply App

A React-based web application that allows users to browse nearby food suppliers, search and filter products by category, and manage a shopping cart — all from a clean, responsive interface.

---

## Features

- **Product Browsing** — View a grid of food products with images, supplier names, and prices
- **Category Filtering** — Filter products by category: Vegetables, Fruits, Dairy, Grains, Meat, Seafood
- **Live Search** — Search products by name or supplier in real time
- **Cart Management** — Add items to cart with a live item count displayed in a fixed bottom bar

---

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| [React](https://react.dev/) | 18.2 | UI framework |
| [Vite](https://vitejs.dev/) | 4.4 | Build tool & dev server |
| [ESLint](https://eslint.org/) | 8.45 | Code linting |

---

## Project Structure

```
food-supply-app/
├── public/                  # Static assets
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Top navigation bar with search input
│   │   ├── Categories.jsx   # Category filter pill buttons
│   │   ├── ProductGrid.jsx  # Responsive product grid layout
│   │   ├── ProductCard.jsx  # Individual product card (image, name, price, add button)
│   │   └── CartBar.jsx      # Fixed bottom bar showing cart item count
│   ├── data/
│   │   └── products.js      # Mock product data (id, name, supplier, price, category, image)
│   ├── App.jsx              # Root component — manages state and filtering logic
│   ├── index.css            # Global styles
│   └── main.jsx             # React DOM entry point
├── index.html               # HTML shell
├── vite.config.js           # Vite configuration
├── package.json             # Project dependencies and scripts
└── .eslintrc.cjs            # ESLint configuration
```

---

## Prerequisites

Make sure you have the following installed before running the app:

- **Node.js** `v18` or higher — [Download](https://nodejs.org/)
- **npm** `v9` or higher (comes with Node.js)

Verify your versions:

```bash
node --version
npm --version
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd food-supply-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The app will be available at **http://localhost:5173** by default.

---

## Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| Dev server | `npm run dev` | Starts the local development server with hot reload |
| Build | `npm run build` | Bundles the app for production into the `dist/` folder |
| Preview | `npm run preview` | Serves the production build locally for testing |
| Lint | `npm run lint` | Runs ESLint to check for code issues |

---

## Adding New Products

Products are defined in `src/data/products.js`. To add a new product, append an entry to the array:

```js
{
  id: 9,
  name: "Cherry Tomatoes",
  supplier: "Sunrise Farms",
  price: "$4.00 / kg",
  category: "Vegetables",
  img: "https://your-image-url.com/photo.jpg"
}
```

Valid category values: `Vegetables`, `Fruits`, `Dairy`, `Grains`, `Meat`, `Seafood`

---

## Building for Production

```bash
npm run build
```

The optimised output will be in the `dist/` directory, ready to be deployed to any static hosting service (e.g. AWS S3 + CloudFront, Netlify, Vercel).

To preview the production build locally before deploying:

```bash
npm run preview
```
