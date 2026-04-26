// ============================================================
// ProductCard component
// Displays a single product with image, name, price, category
// and optional discount badge. Strictly typed via ProductCardProps.
// ============================================================

import React, { useState } from "react";
import { ProductCardProps } from "../interfaces";
import "./ProductCard.css";

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [imgError, setImgError] = useState(false);

  // Calculate final price when discount exists
  const finalPrice = product.discount
    ? product.price * (1 - product.discount / 100)
    : product.price;

  // Map category keys to readable Spanish labels
  const categoryLabels: Record<string, string> = {
    album: "Álbum",
    lightstick: "Lightstick",
    merchandise: "Merchandise",
    photocard: "Photocard",
  };

  // Fallback image if the original fails to load
  const fallbackImage =
    "https://placehold.co/300x300/1a1a2e/e94560?text=KPop+Store";

  return (
    <div className={`product-card ${!product.isActive ? "inactive" : ""}`}>
      {/* Discount badge overlay */}
      {product.discount && (
        <span className="badge-discount">-{product.discount}%</span>
      )}

      {/* Category tag */}
      <span className={`badge-category cat-${product.category}`}>
        {categoryLabels[product.category]}
      </span>

      {/* Product image */}
      <div className="product-image-wrapper">
        <img
          src={imgError ? fallbackImage : product.imageUrl}
          alt={product.name}
          className="product-image"
          onError={() => setImgError(true)}
        />
      </div>

      {/* Product info */}
      <div className="product-info">
        <p className="product-brand">{product.brand}</p>
        <h3 className="product-name">{product.name}</h3>

        {product.description && (
          <p className="product-description">{product.description}</p>
        )}

        {/* Price section */}
        <div className="product-price-row">
          {product.discount ? (
            <>
              <span className="price-original">${product.price.toFixed(2)}</span>
              <span className="price-final">${finalPrice.toFixed(2)}</span>
            </>
          ) : (
            <span className="price-final">${product.price.toFixed(2)}</span>
          )}
        </div>

        {/* Tags */}
        {product.tags && (
          <div className="product-tags">
            {product.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="tag">
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Stock & rating row */}
        <div className="product-meta">
          <span className={`stock ${product.quantity < 30 ? "low-stock" : ""}`}>
            {product.quantity < 30
              ? `⚡ Solo ${product.quantity} restantes`
              : `✓ En stock (${product.quantity})`}
          </span>
          {product.rating && (
            <span className="rating">★ {product.rating}</span>
          )}
        </div>

        {/* Add to cart button */}
        <button
          className="btn-cart"
          disabled={!product.isActive}
          aria-label={`Agregar ${product.name} al carrito`}
        >
          {product.isActive ? "Agregar al carrito" : "No disponible"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
