import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet, Coins, TrendingUp, Zap } from "lucide-react";

export default function PurseSystem() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Quick Start with Your <span className="text-gradient-gold">Digital Purse</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Sign up in seconds and receive your starting simulation currency along with learning coins.
          </p>
        </div>

        {/* Purse Card */}
        <div className="max-w-5xl mx-auto">
          <Card className="glass p-8 border-glass-border">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20">
                  <Zap className="w-4 h-4 text-gold" />
                  <span className="text-sm font-medium text-gold">Instant Setup</span>
                </div>
                
                <h3 className="text-2xl font-bold">Your Financial Learning Wallet</h3>
                
                <p className="text-muted-foreground">
                  Use your coins to unlock advanced AI tutors, premium learning modules, and exclusive features. 
                  The Finova Purse allows you to track your earnings from quizzes, challenges, and simulated trades 
                  in a simple, intuitive wallet interface.
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-success" />
                    </div>
                    <span className="text-sm">Start with 10,000 simulation coins</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-success" />
                    </div>
                    <span className="text-sm">Earn coins from daily challenges</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-success" />
                    </div>
                    <span className="text-sm">Unlock premium features with your earnings</span>
                  </li>
                </ul>

                <Button variant="gold" size="lg" className="w-full sm:w-auto">
                  Create My Purse
                </Button>
              </div>

              {/* Right Visual - Wallet Display */}
              <div className="relative">
                <div className="glass rounded-2xl p-6 space-y-4 border border-glass-border">
                  {/* Wallet Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center">
                        <Wallet className="w-6 h-6 text-gold-foreground" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Total Balance</p>
                        <p className="text-2xl font-bold">10,000</p>
                      </div>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-success/10 text-success text-sm font-medium">
                      +2.5%
                    </div>
                  </div>

                  {/* Wallet Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass rounded-lg p-4 border border-glass-border">
                      <div className="flex items-center gap-2 mb-2">
                        <Coins className="w-4 h-4 text-gold" />
                        <span className="text-sm text-muted-foreground">Coins</span>
                      </div>
                      <p className="text-xl font-bold">8,500</p>
                      <p className="text-xs text-success">+500 today</p>
                    </div>
                    <div className="glass rounded-lg p-4 border border-glass-border">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-4 h-4 text-secondary" />
                        <span className="text-sm text-muted-foreground">XP Points</span>
                      </div>
                      <p className="text-xl font-bold">1,500</p>
                      <p className="text-xs text-secondary">Level 3</p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Next Level</span>
                      <span className="font-medium">75%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-gradient-primary rounded-full animate-pulse-slow" />
                    </div>
                  </div>
                </div>

                {/* Floating Coins Animation */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-gold rounded-full animate-coin-spin shadow-gold opacity-80" />
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-gold rounded-full animate-coin-spin shadow-gold opacity-60" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}