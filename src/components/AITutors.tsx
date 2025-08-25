import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, BookOpen, TrendingUp, Brain, Lock, Unlock } from "lucide-react";

const tutorLevels = [
  {
    level: "Beginner",
    icon: BookOpen,
    status: "unlocked",
    modules: ["Stocks Basics", "Crypto 101", "ETF Fundamentals"],
    color: "secondary",
    description: "Learn the basics of the market and trading strategies."
  },
  {
    level: "Intermediate",
    icon: TrendingUp,
    status: "locked",
    modules: ["Technical Analysis", "Risk Management", "Portfolio Building"],
    color: "primary",
    description: "Advance your skills with market analysis and strategy."
  },
  {
    level: "Advanced",
    icon: Brain,
    status: "locked",
    modules: ["Derivatives", "Behavioral Finance", "Portfolio Optimization"],
    color: "gold",
    description: "Master complex strategies with AI guidance."
  }
];

export default function AITutors() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Bot className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Learning</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Learn with <span className="text-gradient-primary">AI Tutors</span> at Every Level
          </h2>
          <p className="text-lg text-muted-foreground">
            Start your journey with free beginner AI tutors and progress through advanced topics 
            as you earn coins and complete learning modules.
          </p>
        </div>

        {/* Tutor Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tutorLevels.map((tutor, index) => {
            const Icon = tutor.icon;
            const isLocked = tutor.status === "locked";
            
            return (
              <Card 
                key={tutor.level}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  isLocked ? 'opacity-90' : ''
                } ${index === 0 ? 'border-secondary/50 hover:border-secondary' : 
                   index === 1 ? 'border-primary/50 hover:border-primary' : 
                   'border-gold/50 hover:border-gold'}`}
              >
                {/* Lock Overlay */}
                {isLocked && (
                  <div className="absolute inset-0 bg-background/50 backdrop-blur-sm z-10 flex items-center justify-center">
                    <Lock className="w-8 h-8 text-muted-foreground" />
                  </div>
                )}
                
                <div className="p-6 space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                      index === 0 ? 'bg-gradient-secondary' : 
                      index === 1 ? 'bg-gradient-primary' : 
                      'bg-gradient-gold'
                    }`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    {!isLocked && (
                      <Unlock className="w-5 h-5 text-success" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold">{tutor.level} Tutor</h3>
                    <p className="text-sm text-muted-foreground">{tutor.description}</p>
                    
                    {/* Modules */}
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                        Modules Included:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {tutor.modules.map((module) => (
                          <span 
                            key={module}
                            className={`text-xs px-2 py-1 rounded-full ${
                              isLocked ? 'bg-muted text-muted-foreground' : 
                              index === 0 ? 'bg-secondary/10 text-secondary' :
                              index === 1 ? 'bg-primary/10 text-primary' :
                              'bg-gold/10 text-gold'
                            }`}
                          >
                            {module}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button 
                    variant={isLocked ? "outline" : index === 0 ? "secondary" : index === 1 ? "gradient" : "gold"}
                    className="w-full"
                    disabled={isLocked}
                  >
                    {isLocked ? "Unlock with Coins" : "Start Learning"}
                  </Button>

                  {/* Progress Indicator for Unlocked */}
                  {!isLocked && index === 0 && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">45%</span>
                      </div>
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                        <div className="h-full w-[45%] bg-gradient-secondary rounded-full" />
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Button variant="gradient" size="lg">
            Start Learning
          </Button>
        </div>
      </div>
    </section>
  );
}