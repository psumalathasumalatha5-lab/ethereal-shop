import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Home = () => {
  const featuredProducts = products.filter((p) => p.featured);

  return (
    <div className="min-h-screen">
      <Hero />
      
      <section className="container py-16">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold">Featured Products</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked items from our latest collection
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 stagger-children">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
