import { Product } from "@/types/product";
import sneakersImg from "@/assets/product-sneakers.jpg";
import watchImg from "@/assets/product-watch.jpg";
import backpackImg from "@/assets/product-backpack.jpg";
import sunglassesImg from "@/assets/product-sunglasses.jpg";
import jacketImg from "@/assets/product-jacket.jpg";
import headphonesImg from "@/assets/product-headphones.jpg";

export const products: Product[] = [
  {
    id: 1,
    name: "Premium White Sneakers",
    price: 129.99,
    image: sneakersImg,
    category: "Footwear",
    description: "Comfortable and stylish premium white sneakers, perfect for everyday wear. Made with high-quality materials for lasting durability.",
    inStock: true,
    featured: true,
  },
  {
    id: 2,
    name: "Elegant Black Watch",
    price: 299.99,
    image: watchImg,
    category: "Accessories",
    description: "Luxury minimalist watch with premium leather strap. Perfect blend of style and functionality for the modern professional.",
    inStock: true,
    featured: true,
  },
  {
    id: 3,
    name: "Modern Backpack",
    price: 89.99,
    image: backpackImg,
    category: "Bags",
    description: "Spacious and durable backpack with multiple compartments. Ideal for work, travel, or daily commute.",
    inStock: true,
    featured: true,
  },
  {
    id: 4,
    name: "Classic Sunglasses",
    price: 149.99,
    image: sunglassesImg,
    category: "Accessories",
    description: "Stylish sunglasses with UV protection. Timeless design that complements any outfit.",
    inStock: true,
  },
  {
    id: 5,
    name: "Premium Leather Jacket",
    price: 399.99,
    image: jacketImg,
    category: "Clothing",
    description: "Genuine leather jacket with modern cut. A wardrobe essential that never goes out of style.",
    inStock: true,
    featured: true,
  },
  {
    id: 6,
    name: "Wireless Headphones",
    price: 199.99,
    image: headphonesImg,
    category: "Electronics",
    description: "Premium wireless headphones with noise cancellation. Superior sound quality for music lovers.",
    inStock: true,
  },
];
