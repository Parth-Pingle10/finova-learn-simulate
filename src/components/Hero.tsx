import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-20 w-24 h-24 bg-gold/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-10 w-20 h-20 bg-primary/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-gold">AI-Powered Financial Learning Platform</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-gradient-primary">Finova</span>
            <span className="block mt-2 text-foreground">Learn. Simulate. Mentor.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Master finance with AI-powered tutors, simulated trading, and gamified learning experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="xl" variant="gradient" className="group">
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="xl" variant="glass" className="group">
              <Play className="w-5 h-5 mr-2" />
              Explore Simulation
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/50">
            <div className="space-y-2">
              <p className="text-3xl font-bold text-primary">50K+</p>
              <p className="text-muted-foreground">Active Learners</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-secondary">1M+</p>
              <p className="text-muted-foreground">Simulated Trades</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-gold">95%</p>
              <p className="text-muted-foreground">Success Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Coins */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4 z-10">
        <div className="w-12 h-12 bg-gradient-gold rounded-full animate-coin-spin shadow-gold" />
        <div className="w-12 h-12 bg-gradient-gold rounded-full animate-coin-spin shadow-gold" style={{ animationDelay: '0.5s' }} />
        <div className="w-12 h-12 bg-gradient-gold rounded-full animate-coin-spin shadow-gold" style={{ animationDelay: '1s' }} />
      </div>
    </section>
  );
}