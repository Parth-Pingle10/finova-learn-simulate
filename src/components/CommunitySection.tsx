import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, MessageCircle, ThumbsUp, Clock, Hash } from "lucide-react";

const discussions = [
  {
    id: 1,
    author: "David Kim",
    avatar: "DK",
    title: "Best strategies for beginners in crypto trading?",
    category: "Crypto",
    replies: 23,
    likes: 45,
    lastActivity: "2 hours ago"
  },
  {
    id: 2,
    author: "Lisa Anderson",
    avatar: "LA",
    title: "How to manage risk in volatile markets",
    category: "Risk Management",
    replies: 18,
    likes: 67,
    lastActivity: "5 hours ago"
  },
  {
    id: 3,
    author: "Robert Chen",
    avatar: "RC",
    title: "ETF vs Individual Stocks - My Analysis",
    category: "Investment",
    replies: 34,
    likes: 89,
    lastActivity: "1 day ago"
  }
];

export default function CommunitySection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Community Hub</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Join the <span className="text-gradient-primary">Finova Community</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Connect with fellow learners, discuss strategies, ask questions, and share insights in a vibrant community space.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
          <Card className="glass p-4 text-center border-glass-border">
            <Users className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold">50K+</p>
            <p className="text-sm text-muted-foreground">Active Members</p>
          </Card>
          <Card className="glass p-4 text-center border-glass-border">
            <MessageCircle className="w-8 h-8 text-secondary mx-auto mb-2" />
            <p className="text-2xl font-bold">10K+</p>
            <p className="text-sm text-muted-foreground">Discussions</p>
          </Card>
          <Card className="glass p-4 text-center border-glass-border">
            <ThumbsUp className="w-8 h-8 text-success mx-auto mb-2" />
            <p className="text-2xl font-bold">95%</p>
            <p className="text-sm text-muted-foreground">Helpful Replies</p>
          </Card>
          <Card className="glass p-4 text-center border-glass-border">
            <Clock className="w-8 h-8 text-gold mx-auto mb-2" />
            <p className="text-2xl font-bold">&lt;5min</p>
            <p className="text-sm text-muted-foreground">Avg Response Time</p>
          </Card>
        </div>

        {/* Discussion Threads */}
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold">Trending Discussions</h3>
            <Button variant="outline" size="sm">
              View All Threads
            </Button>
          </div>

          <div className="space-y-4">
            {discussions.map((discussion) => (
              <Card 
                key={discussion.id}
                className="p-5 transition-all duration-300 hover:shadow-lg hover:border-primary/30 cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-sm">
                    {discussion.avatar}
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold hover:text-primary transition-colors">
                          {discussion.title}
                        </h4>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-sm text-muted-foreground">{discussion.author}</span>
                          <span className="text-xs text-muted-foreground">•</span>
                          <div className="flex items-center gap-1">
                            <Hash className="w-3 h-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">{discussion.category}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <MessageCircle className="w-4 h-4" />
                        <span>{discussion.replies} replies</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <ThumbsUp className="w-4 h-4" />
                        <span>{discussion.likes}</span>
                      </div>
                      <span className="text-muted-foreground ml-auto">{discussion.lastActivity}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Start Discussion CTA */}
          <Card className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-semibold text-lg">Have a Question?</h3>
                <p className="text-sm text-muted-foreground">
                  Start a discussion and get insights from our expert community
                </p>
              </div>
              <Button variant="gradient">
                Start a Discussion
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}