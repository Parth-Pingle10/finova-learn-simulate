import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, Activity, AlertCircle, Bot, BarChart3 } from "lucide-react";

const mockEvents = [
  { id: 1, text: "Tech giant releases new AI tool – stock jumps 4%", impact: "positive" },
  { id: 2, text: "Global market alert: Crypto volatility spikes", impact: "negative" },
  { id: 3, text: "ETF sector shows strong growth momentum", impact: "positive" }
];

export default function SimulatedTrading() {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20">
            <Activity className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">AI-Powered Simulation</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Experience a Realistic <span className="text-gradient-secondary">AI-Powered Market</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Trade in a dynamic, simulated market powered by AI-generated events and fake news scenarios 
            that impact stock and cryptocurrency prices.
          </p>
        </div>

        {/* Trading Dashboard Preview */}
        <div className="max-w-6xl mx-auto">
          <Card className="glass border-glass-border overflow-hidden">
            {/* Dashboard Header */}
            <div className="bg-gradient-dark p-4 border-b border-glass-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <h3 className="text-lg font-semibold text-white">Trading Dashboard</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                    <span className="text-sm text-white/80">Live Market</span>
                  </div>
                </div>
                <Button variant="glass" size="sm">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  View Full Dashboard
                </Button>
              </div>
            </div>

            <div className="p-6">
              {/* Portfolio Summary */}
              <div className="grid md:grid-cols-4 gap-4 mb-6">
                <Card className="p-4 bg-card-hover border-0">
                  <p className="text-sm text-muted-foreground mb-1">Portfolio Value</p>
                  <p className="text-2xl font-bold">$125,430</p>
                  <div className="flex items-center gap-1 mt-1">
                    <TrendingUp className="w-4 h-4 text-success" />
                    <span className="text-sm text-success">+5.2%</span>
                  </div>
                </Card>
                <Card className="p-4 bg-card-hover border-0">
                  <p className="text-sm text-muted-foreground mb-1">Today's P&L</p>
                  <p className="text-2xl font-bold text-success">+$2,345</p>
                  <div className="flex items-center gap-1 mt-1">
                    <TrendingUp className="w-4 h-4 text-success" />
                    <span className="text-sm text-success">+1.9%</span>
                  </div>
                </Card>
                <Card className="p-4 bg-card-hover border-0">
                  <p className="text-sm text-muted-foreground mb-1">Open Positions</p>
                  <p className="text-2xl font-bold">12</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Activity className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Active</span>
                  </div>
                </Card>
                <Card className="p-4 bg-card-hover border-0">
                  <p className="text-sm text-muted-foreground mb-1">Win Rate</p>
                  <p className="text-2xl font-bold">68%</p>
                  <div className="flex items-center gap-1 mt-1">
                    <TrendingUp className="w-4 h-4 text-success" />
                    <span className="text-sm text-success">Above avg</span>
                  </div>
                </Card>
              </div>

              {/* AI Events Ticker */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-muted-foreground mb-3">AI Market Events</h4>
                <div className="space-y-2">
                  {mockEvents.map((event) => (
                    <div 
                      key={event.id}
                      className="flex items-center gap-3 p-3 rounded-lg bg-card-hover border border-border/50"
                    >
                      <AlertCircle className={`w-4 h-4 ${
                        event.impact === 'positive' ? 'text-success' : 'text-destructive'
                      }`} />
                      <p className="text-sm flex-1">{event.text}</p>
                      {event.impact === 'positive' ? (
                        <TrendingUp className="w-4 h-4 text-success" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-destructive" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Portfolio Analyst Bot */}
              <Card className="p-4 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <Bot className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">AI Portfolio Analyst</h4>
                    <p className="text-sm text-muted-foreground">
                      Your portfolio is tech-heavy with 65% allocation. Consider diversifying into ETFs 
                      for better risk management. Your trading style matches a "Growth Investor" personality.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Action Footer */}
            <div className="p-4 bg-muted/30 border-t border-border">
              <Button variant="gradient" size="lg" className="w-full">
                Start Trading Simulation
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}