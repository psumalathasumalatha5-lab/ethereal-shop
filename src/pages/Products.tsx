import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold">All Products</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse our complete collection of premium items
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 stagger-children">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
