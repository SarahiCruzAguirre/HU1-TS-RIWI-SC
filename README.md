# ecommerce-lite

KPop Albums eCommerce — React + TypeScript

A single-page eCommerce application for a KPop store built with React 18 and TypeScript. It demonstrates strict interface-based data modeling, reusable typed components, and mock data rendering.

---

## Prerequisites

- Node.js 16 or higher
- npm 8 or higher

To verify your versions run:

```
node -v
npm -v
```

---

## Project Setup (from scratch)

If you want to create the project from scratch using Create React App, run:

```
npx create-react-app ecommerce-lite --template typescript
cd ecommerce-lite
```

Then replace the generated files with the source files provided in this project.

---

## Installation and Execution

1. Clone or download this repository.

2. Navigate to the project root:

```
cd ecommerce-lite
```

3. Install dependencies:

```
npm install
```

4. Start the development server:

```
npm start
```

The application will open automatically at http://localhost:3000

---

## Project Structure

```
ecommerce-lite/
  public/
    index.html              Base HTML template
  src/
    components/
      ProductCard.tsx       Product display component (typed via ProductCardProps)
      ProductCard.css       Product card styles
      UserCard.tsx          User profile component (typed via UserCardProps)
      UserCard.css          User card styles
    data/
      data.ts               Mock data: 15 products and 5 users
    interfaces/
      index.ts              TypeScript interfaces: Product, User, Address, Dimensions
    App.tsx                 Root component with product grid and user panel
    App.css                 Global styles and layout
    index.tsx               Application entry point
    index.css               Base CSS reset
  package.json
  tsconfig.json
  README.md
```

---

## Interfaces

### Product

| Field       | Type                                        | Required |
|-------------|---------------------------------------------|----------|
| sku         | string                                      | Yes      |
| name        | string                                      | Yes      |
| brand       | string                                      | Yes      |
| quantity    | number                                      | Yes      |
| price       | number                                      | Yes      |
| isActive    | boolean                                     | Yes      |
| category    | "album" or "lightstick" or "merchandise" or "photocard" | Yes |
| imageUrl    | string                                      | Yes      |
| createdAt   | string                                      | Yes      |
| description | string                                      | No       |
| tags        | string[]                                    | No       |
| dimensions  | Dimensions                                  | No       |
| discount    | number                                      | No       |
| rating      | number                                      | No       |

### User

| Field          | Type                              | Required |
|----------------|-----------------------------------|----------|
| id             | string                            | Yes      |
| fullName       | string                            | Yes      |
| email          | string                            | Yes      |
| isActive       | boolean                           | Yes      |
| role           | "admin" or "customer" or "moderator" | Yes   |
| address        | Address                           | Yes      |
| createdAt      | string                            | Yes      |
| avatarUrl      | string                            | No       |
| phone          | string                            | No       |
| favoriteGroups | string[]                          | No       |

---

## Available Scripts

| Script        | Description                        |
|---------------|------------------------------------|
| npm start     | Starts the development server      |
| npm run build | Builds the app for production      |
| npm test      | Runs the test suite                |

---

## Mock Data Summary

- 15 products: 10 KPop albums and 5 official lightsticks from groups including BTS, BLACKPINK, TWICE, EXO, Stray Kids, ATEEZ, ENHYPEN, ITZY, CHERRY BULLET and XDINARY HEROES.
- 5 users: 1 admin, 1 moderator, and 3 customers located across Colombia.

---

## Notes

- All images are loaded from Wikimedia Commons public URLs.
- If an image fails to load, a fallback placeholder is displayed automatically.
- The interface uses `strict: true` in tsconfig.json to enforce full TypeScript type checking.
