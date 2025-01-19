import Features from '@/components/Features';
import Feedback from '@/components/Feedback';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <div className=''>
      <Header />
      <HeroSection />
      <Features />
      <Feedback />
    </div>
  );
}
