import { Header, Footer } from "@/components/layout";
import {
  Hero,
  HeroBold,
  HeroTextCanvas,
  HeroOrganic,
  HeroSplit,
  HeroEditorial,
  HeroSlices,
  WhatIDo,
  WhatIDoBold,
  SelectedWork,
  SelectedWorkBold,
  Contact,
  ContactBold,
} from "@/components/landing";

// Force dynamic rendering to avoid static generation issues with client components
export const dynamic = "force-dynamic";

interface HomeProps {
  searchParams: Promise<{ hero?: string }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const heroVariant = params.hero;

  const renderHero = () => {
    switch (heroVariant) {
      case "classic":
        return <Hero />;
      case "text-canvas":
        return <HeroTextCanvas />;
      case "organic":
        return <HeroOrganic />;
      case "split":
        return <HeroSplit />;
      case "editorial":
        return <HeroEditorial />;
      case "slices":
        return <HeroSlices />;
      default:
        return <HeroBold />;
    }
  };

  return (
    <>
      <Header />
      <main>
        {renderHero()}
        <WhatIDoBold />
        <SelectedWorkBold />
        <ContactBold />
      </main>
      <Footer />
    </>
  );
}
