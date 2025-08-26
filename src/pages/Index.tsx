import Navbar from "@/components/Navbar";
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
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <PurseSystem />
      <div id="tutors">
        <AITutors />
      </div>
      <div id="trading">
        <SimulatedTrading />
      </div>
      <div id="challenges">
        <Challenges />
      </div>
      <div id="finance">
        <FinanceCorner />
      </div>
      <div id="blog">
        <BloggerSpace />
      </div>
      <div id="dashboard">
        <GamifiedEcosystem />
      </div>
      <div id="community">
        <CommunitySection />
      </div>
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
