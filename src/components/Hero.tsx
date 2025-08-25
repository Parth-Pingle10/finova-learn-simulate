import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-hero animate-gradient-shift" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/90" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 20}s`
            }}
          />
        ))}
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-10 w-32 h-32 bg-gold/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '6s' }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-slide-up bg-background/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 border border-gold/30">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-gold">AI-Powered Financial Learning Platform</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent drop-shadow-sm">Finova</span>
            <span className="block mt-2 text-foreground drop-shadow-sm">Learn. Simulate. Mentor.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto font-medium">
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
    </section>
  );
}