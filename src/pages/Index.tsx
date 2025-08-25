import Hero from "@/components/Hero";
import PurseSystem from "@/components/PurseSystem";
import AITutors from "@/components/AITutors";
import SimulatedTrading from "@/components/SimulatedTrading";
import Challenges from "@/components/Challenges";
import FinanceCorner from "@/components/FinanceCorner";
import BloggerSpace from "@/components/BloggerSpace";
import GamifiedEcosystem from "@/components/GamifiedEcosystem";
import CommunitySection from "@/components/CommunitySection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <PurseSystem />
      <AITutors />
      <SimulatedTrading />
      <Challenges />
      <FinanceCorner />
      <BloggerSpace />
      <GamifiedEcosystem />
      <CommunitySection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
