import { Card } from "@/components/ui/card";
import { TrendingUp, Globe, AlertTriangle, DollarSign, Bitcoin, BarChart } from "lucide-react";

const newsItems = [
  {
    icon: TrendingUp,
    headline: "Global markets rally amid tech sector growth",
    time: "2 hours ago",
    category: "Markets",
    trend: "up"
  },
  {
    icon: Bitcoin,
    headline: "Crypto market experiences sudden volatility – top coins affected",
    time: "4 hours ago",
    category: "Crypto",
    trend: "down"
  },
  {
    icon: BarChart,
    headline: "ETF trends: Diversification strategies that outperform",
    time: "6 hours ago",
    category: "ETFs",
    trend: "neutral"
  },
  {
    icon: DollarSign,
    headline: "Federal Reserve hints at policy changes in Q2",
    time: "8 hours ago",
    category: "Economy",
    trend: "neutral"
  }
];

export default function FinanceCorner() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Globe className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Real-World Insights</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Stay Informed with <span className="text-gradient-primary">AI-Curated Finance Insights</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Keep up with the financial world through Finova's Real-World Finance Corner.
          </p>
        </div>

        {/* News Ticker */}
        <div className="max-w-6xl mx-auto">
          {/* Live Indicator */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full animate-pulse" />
              <span className="text-sm font-medium">LIVE MARKET UPDATES</span>
            </div>
          </div>

          {/* News Grid */}
          <div className="grid gap-4">
            {newsItems.map((item, index) => {
              const Icon = item.icon;
              
              return (
                <Card 
                  key={index}
                  className="group p-4 transition-all duration-300 hover:shadow-lg hover:border-primary/30 cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      item.trend === 'up' ? 'bg-success/10' :
                      item.trend === 'down' ? 'bg-destructive/10' :
                      'bg-primary/10'
                    }`}>
                      <Icon className={`w-5 h-5 ${
                        item.trend === 'up' ? 'text-success' :
                        item.trend === 'down' ? 'text-destructive' :
                        'text-primary'
                      }`} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-1">
                      <div className="flex items-start justify-between">
                        <h3 className="font-semibold group-hover:text-primary transition-colors">
                          {item.headline}
                        </h3>
                        {item.trend === 'up' && (
                          <TrendingUp className="w-4 h-4 text-success ml-2" />
                        )}
                        {item.trend === 'down' && (
                          <AlertTriangle className="w-4 h-4 text-destructive ml-2" />
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="px-2 py-0.5 rounded-full bg-muted text-xs font-medium">
                          {item.category}
                        </span>
                        <span>{item.time}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Market Summary Cards */}
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <Card className="glass p-4 border-glass-border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-muted-foreground">S&P 500</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-success/10 text-success">
                  +1.2%
                </span>
              </div>
              <p className="text-2xl font-bold">4,892.45</p>
              <p className="text-xs text-muted-foreground mt-1">+58.32 points</p>
            </Card>
            
            <Card className="glass p-4 border-glass-border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-muted-foreground">Bitcoin</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-destructive/10 text-destructive">
                  -2.3%
                </span>
              </div>
              <p className="text-2xl font-bold">$43,250</p>
              <p className="text-xs text-muted-foreground mt-1">-$1,020</p>
            </Card>
            
            <Card className="glass p-4 border-glass-border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-muted-foreground">Gold</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-success/10 text-success">
                  +0.5%
                </span>
              </div>
              <p className="text-2xl font-bold">$2,045/oz</p>
              <p className="text-xs text-muted-foreground mt-1">+$10.25</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}