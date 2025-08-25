import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Target, Brain, Clock, Coins, Zap } from "lucide-react";

const challenges = [
  {
    type: "Daily Quiz",
    icon: Brain,
    difficulty: "Easy",
    reward: { coins: 100, xp: 50 },
    timeLimit: "5 min",
    description: "Test your knowledge on today's market basics",
    color: "secondary"
  },
  {
    type: "Trading Scenario",
    icon: Target,
    difficulty: "Medium",
    reward: { coins: 250, xp: 100 },
    timeLimit: "15 min",
    description: "Navigate a simulated market crash scenario",
    color: "primary"
  },
  {
    type: "Problem Solving",
    icon: Trophy,
    difficulty: "Hard",
    reward: { coins: 500, xp: 200 },
    timeLimit: "30 min",
    description: "Optimize a portfolio for maximum returns",
    color: "gold"
  }
];

export default function Challenges() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/20">
            <Trophy className="w-4 h-4 text-success" />
            <span className="text-sm font-medium text-success">Gamified Learning</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Daily Challenges to <span className="text-gradient-success">Keep You Sharp</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Earn coins, purse money, and XP by completing challenges that unlock additional tutors, 
            tools, and advanced trading simulations.
          </p>
        </div>

        {/* Challenge Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {challenges.map((challenge) => {
            const Icon = challenge.icon;
            
            return (
              <Card 
                key={challenge.type}
                className="group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Difficulty Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                  challenge.difficulty === 'Easy' ? 'bg-secondary/10 text-secondary' :
                  challenge.difficulty === 'Medium' ? 'bg-primary/10 text-primary' :
                  'bg-gold/10 text-gold'
                }`}>
                  {challenge.difficulty}
                </div>
                
                <div className="p-6 space-y-4">
                  {/* Icon & Type */}
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      challenge.color === 'secondary' ? 'bg-gradient-secondary' :
                      challenge.color === 'primary' ? 'bg-gradient-primary' :
                      'bg-gradient-gold'
                    } group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg">{challenge.type}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Clock className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{challenge.timeLimit}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground">
                    {challenge.description}
                  </p>

                  {/* Rewards */}
                  <div className="flex items-center gap-4 py-3 px-4 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-1.5">
                      <Coins className="w-4 h-4 text-gold" />
                      <span className="text-sm font-medium">{challenge.reward.coins}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Zap className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">{challenge.reward.xp} XP</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button 
                    variant={
                      challenge.color === 'secondary' ? 'secondary' :
                      challenge.color === 'primary' ? 'gradient' :
                      'gold'
                    }
                    className="w-full"
                  >
                    Participate Now
                  </Button>
                </div>

                {/* Animated Background Element */}
                <div className={`absolute -bottom-20 -right-20 w-40 h-40 rounded-full opacity-10 ${
                  challenge.color === 'secondary' ? 'bg-secondary' :
                  challenge.color === 'primary' ? 'bg-primary' :
                  'bg-gold'
                } group-hover:scale-150 transition-transform duration-500`} />
              </Card>
            );
          })}
        </div>

        {/* Progress Section */}
        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="glass p-6 border-glass-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Today's Progress</h3>
              <span className="text-sm text-muted-foreground">3/5 Challenges Completed</span>
            </div>
            <div className="space-y-4">
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div className="h-full w-3/5 bg-gradient-success rounded-full animate-pulse-slow" />
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Coins className="w-4 h-4 text-gold" />
                  <span>850 coins earned today</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  <span>350 XP gained</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}