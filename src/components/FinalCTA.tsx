import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-gold shadow-gold mx-auto">
            <Sparkles className="w-10 h-10 text-gold-foreground" />
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Ready to <span className="text-gradient-gold">Invest in Yourself?</span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Start learning, simulating, and mentoring with Finova today.
          </p>

          {/* Features List */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
              <div className="w-2 h-2 bg-success rounded-full" />
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
              <div className="w-2 h-2 bg-success rounded-full" />
              <span>10,000 Free Coins</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
              <div className="w-2 h-2 bg-success rounded-full" />
              <span>AI Tutors Included</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="xl" variant="gold" className="group">
              Start Free
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="xl" variant="outline">
              Explore Finova
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              Trusted by over <span className="font-semibold text-foreground">50,000 learners</span> worldwide
            </p>
          </div>
        </div>
      </div>

      {/* Floating Coins */}
      <div className="absolute bottom-20 left-20 w-16 h-16 bg-gradient-gold rounded-full animate-coin-spin shadow-gold opacity-30" />
      <div className="absolute top-20 right-20 w-12 h-12 bg-gradient-gold rounded-full animate-coin-spin shadow-gold opacity-20" style={{ animationDelay: '1s' }} />
    </section>
  );
}