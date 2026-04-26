// interfaces for the KPop Albums eCommerce application


export interface Dimensions {
  width: number;
  height: number;
  depth: number;
  unit: "cm" | "mm" | "in";
}

export interface Address {
  street: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
}

export interface Product {
  sku: string;
  name: string;
  brand: string;
  quantity: number;
  price: number;
  isActive: boolean;
  category: "album" | "lightstick" | "merchandise" | "photocard";
  imageUrl: string;
  createdAt: string;
  // Optional properties
  description?: string;
  tags?: string[];
  dimensions?: Dimensions;
  discount?: number;
  rating?: number;
}

export interface User {
  id: string;
  fullName: string;
  email: string;
  isActive: boolean;
  role: "admin" | "customer" | "moderator";
  address: Address;
  createdAt: string;
  // Optional properties
  avatarUrl?: string;
  phone?: string;
  favoriteGroups?: string[];
}

// Props interfaces for components
export interface ProductCardProps {
  product: Product;
}

export interface UserCardProps {
  user: User;
}
