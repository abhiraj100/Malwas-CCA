# 🚗 Malwas CCA — Car Care & Accessories

A complete Next.js 14 e-commerce website for Malwas Car Care & Accessories, featuring a striking **black & white** industrial design.

## 📍 About the Shop

**Malwas CCA** — Premium car accessories, seat covers & full car modification for all car types.
**Malwas Alloys** — Sister showroom with latest 4-wheeler alloy wheels.
**Location:** Ranchi Road, Near Hyundai Showroom, Jharkhand.

## ✨ Features

- 🛒 **Cart & Checkout** — Full multi-step checkout with payment options
- ❤️ **Wishlist** — Save & manage favourite products
- 🔍 **Smart Filters** — Category, price range, search, sort, grid/list
- 🏎️ **Malwas Alloys Section** — Dedicated alloys showroom page with filter by size & finish
- 📱 **Fully Responsive** — Mobile-first with ticker tape, mobile menu
- 🎨 **B&W Industrial Theme** — Barlow Condensed + Barlow + Share Tech Mono fonts
- 🖼️ **Hero Carousel** — Auto-rotating with slide indicators
- 📋 **All Pages** — Home, Products, Product Detail, Cart, Checkout, Alloys, Alloy Detail, Wishlist, About, Contact, Order Success, 404

## 🚀 Quick Start

```bash
cd Malwas-cca
npm install
npm run dev
# → http://localhost:3000
```

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx                  # Home
│   ├── layout.tsx                # Root layout
│   ├── globals.css               # Global styles + B&W design tokens
│   ├── products/
│   │   ├── page.tsx              # Products listing
│   │   └── [id]/page.tsx         # Product detail
│   ├── alloys/
│   │   ├── page.tsx              # Malwas Alloys listing
│   │   └── [id]/page.tsx         # Alloy detail
│   ├── cart/page.tsx
│   ├── checkout/page.tsx
│   ├── wishlist/page.tsx
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── order-success/page.tsx
│   └── not-found.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            # With ticker tape & mega menu
│   │   └── Footer.tsx
│   └── ui/
│       ├── CartDrawer.tsx
│       ├── ProductCard.tsx
│       └── AlloyCard.tsx
├── context/
│   ├── CartContext.tsx
│   └── WishlistContext.tsx
└── data/
    └── products.ts               # All product, alloy & category data
```

## 🎨 Design System

- **Display Font**: Barlow Condensed Black (bold headings)
- **Body Font**: Barlow (clean body text)
- **Mono Font**: Share Tech Mono (labels, codes, tags)
- **Theme**: Pure Black (#0a0a0a) + White (#fff) + Zinc grays
- **Accent**: White on dark / Black on white
- **No colour** — strict B&W aesthetic

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Toast**: React Hot Toast
- **State**: React Context + useReducer
- **TypeScript**: Full type safety

## 📦 Build

```bash
npm run build
npm start
```
