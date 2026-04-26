// ============================================================
// App.tsx - Root component
// Renders the KPop eCommerce store with product grid,
// category filters, and user panel sections
// ============================================================

import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import UserCard from "./components/UserCard";
import { products, users } from "./data/data";
import { Product } from "./interfaces";
import "./App.css";

// Valid filter categories including the "all" wildcard
type FilterCategory = Product["category"] | "all";

const App: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  const [showUsers, setShowUsers] = useState<boolean>(false);

  // Filter products by selected category
  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((p) => p.category === activeFilter);

  const filterButtons: { key: FilterCategory; label: string }[] = [
    { key: "all",         label: "Todos" },
    { key: "album",       label: "Álbumes" },
    { key: "lightstick",  label: "Lightsticks" },
    { key: "merchandise", label: "Merch" },
    { key: "photocard",   label: "Photocards" },
  ];

  return (
    <div className="app">
      {/* ── Header ──────────────────────────────────────── */}
      <header className="app-header">
        <div className="header-inner">
          <div className="logo">
            <span className="logo-icon">✦</span>
            <span className="logo-text">KPop<span className="logo-accent">Store</span></span>
          </div>
          <nav className="header-nav">
            <button
              className={`nav-btn ${!showUsers ? "active" : ""}`}
              onClick={() => setShowUsers(false)}
            >
              Productos
            </button>
            <button
              className={`nav-btn ${showUsers ? "active" : ""}`}
              onClick={() => setShowUsers(true)}
            >
              Usuarios
            </button>
          </nav>
          <div className="header-tagline">Colombia 🇨🇴</div>
        </div>
      </header>

      {/* ── Hero banner ─────────────────────────────────── */}
      {!showUsers && (
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              Tu tienda de<br />
              <span className="gradient-text">K-Pop favorita</span>
            </h1>
            <p className="hero-subtitle">
              Álbumes oficiales, lightsticks y merch de los mejores grupos
            </p>
          </div>
          <div className="hero-orbs">
            <div className="orb orb-1" />
            <div className="orb orb-2" />
            <div className="orb orb-3" />
          </div>
        </section>
      )}

      <main className="app-main">
        {!showUsers ? (
          <>
            {/* ── Filter tabs ───────────────────────────── */}
            <div className="filter-bar" role="tablist" aria-label="Filtrar por categoría">
              {filterButtons.map(({ key, label }) => (
                <button
                  key={key}
                  role="tab"
                  aria-selected={activeFilter === key}
                  className={`filter-btn ${activeFilter === key ? "filter-active" : ""}`}
                  onClick={() => setActiveFilter(key)}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* ── Products counter ──────────────────────── */}
            <p className="results-count">
              {filteredProducts.length} producto{filteredProducts.length !== 1 ? "s" : ""} encontrado{filteredProducts.length !== 1 ? "s" : ""}
            </p>

            {/* ── Product grid using .map() ──────────────── */}
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.sku} product={product} />
              ))}
            </div>
          </>
        ) : (
          <>
            {/* ── Users section ─────────────────────────── */}
            <div className="section-header">
              <h2 className="section-title">Usuarios registrados</h2>
              <span className="section-count">{users.length} usuarios</span>
            </div>
            <div className="users-grid">
              {users.map((user) => (
                <UserCard key={user.id} user={user} />
              ))}
            </div>
          </>
        )}
      </main>

      {/* ── Footer ──────────────────────────────────────── */}
      <footer className="app-footer">
        <p>✦ KPopStore Colombia — Proyecto React + TypeScript</p>
      </footer>
    </div>
  );
};

export default App;
