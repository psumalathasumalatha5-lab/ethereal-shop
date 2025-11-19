import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 hero-gradient opacity-80" />
      </div>
      
      <div className="relative z-10 text-center space-y-6 px-4 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground">
          Elevate Your Style
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
          Discover our curated collection of premium products designed for the modern lifestyle
        </p>
        <Link to="/products">
          <Button size="lg" className="gap-2 mt-4">
            Shop Now
            <ArrowRight className="h-5 w-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
