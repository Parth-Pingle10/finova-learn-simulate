import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge, CheckCircle2, MessageSquare, Heart, Share2, Award } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    author: "Sarah Chen",
    avatar: "SC",
    certified: true,
    title: "Top 5 Trading Strategies for 2025",
    excerpt: "Discover the most effective trading strategies that have been proven to work in today's volatile markets...",
    category: "Strategy",
    likes: 234,
    comments: 45,
    readTime: "5 min read"
  },
  {
    id: 2,
    author: "Michael Torres",
    avatar: "MT",
    certified: true,
    title: "Understanding Market Volatility in Simulated Trading",
    excerpt: "Learn how to navigate and profit from market volatility using advanced simulation techniques...",
    category: "Analysis",
    likes: 189,
    comments: 32,
    readTime: "7 min read"
  },
  {
    id: 3,
    author: "Emma Wilson",
    avatar: "EW",
    certified: true,
    title: "The Psychology of Successful Trading",
    excerpt: "Master your emotions and develop a winning mindset for consistent trading success...",
    category: "Psychology",
    likes: 312,
    comments: 67,
    readTime: "6 min read"
  }
];

export default function BloggerSpace() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20">
            <Award className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-gold">Community Content</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Become a <span className="text-gradient-gold">Certified Contributor</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Share your insights, mentor fellow learners, and gain recognition in the Finova ecosystem.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blogPosts.map((post) => (
            <Card 
              key={post.id}
              className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="p-6 space-y-4">
                {/* Author Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
                      {post.avatar}
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <p className="font-semibold text-sm">{post.author}</p>
                        {post.certified && (
                          <CheckCircle2 className="w-4 h-4 text-gold" />
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">{post.readTime}</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 rounded-full bg-muted text-xs font-medium">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Engagement Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <Heart className="w-4 h-4" />
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <MessageSquare className="w-4 h-4" />
                      <span>{post.comments}</span>
                    </button>
                  </div>
                  <button className="text-muted-foreground hover:text-primary transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Read More */}
                <Button variant="ghost" className="w-full group-hover:bg-primary/10">
                  Read More
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Become Contributor CTA */}
        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="glass p-8 border-glass-border bg-gradient-to-r from-gold/5 to-gold/10">
            <div className="text-center space-y-4">
              <Badge className="w-12 h-12 text-gold mx-auto" />
              <h3 className="text-2xl font-bold">Ready to Share Your Knowledge?</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Complete your certification to start publishing articles, market analyses, and financial 
                insights. Our Mentor Checker Bot ensures quality content for the community.
              </p>
              <Button variant="gold" size="lg">
                Become a Certified Contributor
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}