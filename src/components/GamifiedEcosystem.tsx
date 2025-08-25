import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Target, Award, Users, ShoppingBag, Crown } from "lucide-react";

const leaderboard = [
  { rank: 1, name: "Alex Kumar", level: 12, xp: 15420, badge: "🏆" },
  { rank: 2, name: "Maria Silva", level: 11, xp: 14890, badge: "🥈" },
  { rank: 3, name: "John Davis", level: 11, xp: 14350, badge: "🥉" }
];

const achievements = [
  { name: "First Trade", icon: "🎯", unlocked: true },
  { name: "Quiz Master", icon: "🧠", unlocked: true },
  { name: "Week Streak", icon: "🔥", unlocked: true },
  { name: "Portfolio Pro", icon: "📊", unlocked: false },
  { name: "Market Guru", icon: "👑", unlocked: false },
  { name: "Mentor Badge", icon: "🌟", unlocked: false }
];

export default function GamifiedEcosystem() {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20">
            <Trophy className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Gamified Learning</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Track Progress and <span className="text-gradient-secondary">Compete</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience a thriving community-driven platform where mentorship and content sharing are rewarded.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Left Column - Progress & Shop */}
          <div className="space-y-6">
            {/* Level Progress */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg">Your Progress</h3>
                <div className="flex items-center gap-2">
                  <Crown className="w-5 h-5 text-gold" />
                  <span className="font-bold text-xl">Level 5</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Experience Points</span>
                    <span className="font-medium">3,250 / 5,000 XP</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-[65%] bg-gradient-secondary rounded-full animate-pulse-slow" />
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">1,750 XP</span> to reach Level 6
                </p>
              </div>
            </Card>

            {/* Achievements */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg">Achievements</h3>
                <Award className="w-5 h-5 text-primary" />
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.name}
                    className={`text-center p-3 rounded-lg transition-all ${
                      achievement.unlocked 
                        ? 'bg-card-hover hover:scale-105 cursor-pointer' 
                        : 'bg-muted/50 opacity-50'
                    }`}
                  >
                    <div className="text-2xl mb-1">{achievement.icon}</div>
                    <p className="text-xs font-medium">{achievement.name}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* In-App Shop Preview */}
            <Card className="p-6 bg-gradient-to-r from-gold/5 to-gold/10 border-gold/20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg">Coin Shop</h3>
                <ShoppingBag className="w-5 h-5 text-gold" />
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg bg-background/80">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-gold flex items-center justify-center text-sm">
                      🚀
                    </div>
                    <div>
                      <p className="font-medium text-sm">XP Booster</p>
                      <p className="text-xs text-muted-foreground">2x XP for 24h</p>
                    </div>
                  </div>
                  <Button size="sm" variant="gold">500 Coins</Button>
                </div>
                
                <div className="flex items-center justify-between p-3 rounded-lg bg-background/80">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-gold flex items-center justify-center text-sm">
                      🎓
                    </div>
                    <div>
                      <p className="font-medium text-sm">Premium Tutor</p>
                      <p className="text-xs text-muted-foreground">Unlock advanced AI</p>
                    </div>
                  </div>
                  <Button size="sm" variant="gold">1000 Coins</Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Leaderboard */}
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-lg">Weekly Leaderboard</h3>
                <Users className="w-5 h-5 text-primary" />
              </div>
              
              <div className="space-y-3">
                {/* Top 3 */}
                {leaderboard.map((user) => (
                  <div
                    key={user.rank}
                    className={`flex items-center gap-4 p-4 rounded-lg transition-all ${
                      user.rank === 1 ? 'bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/20' :
                      'bg-card-hover'
                    }`}
                  >
                    <div className="text-2xl">{user.badge}</div>
                    <div className="flex-1">
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-sm text-muted-foreground">Level {user.level}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">{user.xp.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">XP</p>
                    </div>
                  </div>
                ))}
                
                {/* Your Position */}
                <div className="pt-4 mt-4 border-t border-border">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                      42
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">You</p>
                      <p className="text-sm text-muted-foreground">Level 5</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">3,250</p>
                      <p className="text-xs text-muted-foreground">XP</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Button variant="gradient" className="w-full mt-4">
                View Full Leaderboard
              </Button>
            </Card>

            {/* Stats Card */}
            <Card className="glass p-6 border-glass-border">
              <h3 className="font-semibold text-lg mb-4">Your Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 rounded-lg bg-card-hover">
                  <Target className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold">24</p>
                  <p className="text-xs text-muted-foreground">Challenges Won</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-card-hover">
                  <Trophy className="w-6 h-6 text-gold mx-auto mb-2" />
                  <p className="text-2xl font-bold">8</p>
                  <p className="text-xs text-muted-foreground">Achievements</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Button variant="secondary" size="lg">
            View My Progress
          </Button>
        </div>
      </div>
    </section>
  );
}