import BlogsSection from '@/components/BlogsSection';
import Features from '@/components/Features';
import Feedback from '@/components/Feedback';
import Footer from '@/components/Footer';
import FreeTrial from '@/components/FreeTrial';
import FrequentlyAsked from '@/components/FrequentlyAsked';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StillHaveQuestions from '@/components/StillHaveQuestions';

export default function Home() {
  return (
    <div className=''>
      <Header />
      <HeroSection />
      <Features />
      <Feedback />
      <FrequentlyAsked />
      <StillHaveQuestions />
      <BlogsSection />
      <FreeTrial />
      <Footer />
    </div>
  );
}
