"use client";

import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { AboutMe } from "@/components/AboutMe";
import { CaseStudy } from "@/components/CaseStudy";
import { Contact } from "@/components/Contact";
import { getAllCaseStudies } from "@/lib/case-studies";
import { FinPayThumbnail } from "@/components/finpay/FinPayThumbnail";
import { ShopSphereThumbnail } from "@/components/shopsphere/ShopSphereThumbnail";
import { HealthHubThumbnail } from "@/components/healthhub/HealthHubThumbnail";
import { FitProThumbnail } from "@/components/fitpro/FitProThumbnail";
import { TravelEaseThumbnail } from "@/components/travelease/TravelEaseThumbnail";
import { FoodHubThumbnail } from "@/components/foodhub/FoodHubThumbnail";

export default function HomePage() {
  const caseStudies = getAllCaseStudies();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <AboutMe />

      {/* Featured Work Section */}
      <section id="work" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-12">Featured Work</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => {
              const isComingSoon = study.comingSoon;

              // Determine custom thumbnail based on case study title
              let customThumbnail;
              if (study.title === "FinPay - Mobile Banking Revolution") {
                customThumbnail = <FinPayThumbnail />;
              } else if (study.title === "ShopSphere - E-commerce Platform") {
                customThumbnail = <ShopSphereThumbnail />;
              } else if (study.title === "HealthHub - Telemedicine Platform") {
                customThumbnail = <HealthHubThumbnail />;
              } else if (study.title === "FitPro - Fitness Tracking App") {
                customThumbnail = <FitProThumbnail />;
              } else if (
                study.title === "TravelEase - Trip Planning Platform"
              ) {
                customThumbnail = <TravelEaseThumbnail />;
              } else if (study.title === "FoodHub - Recipe Discovery App") {
                customThumbnail = <FoodHubThumbnail />;
              }

              return (
                <CaseStudy
                  key={study.id}
                  title={study.title}
                  description={study.description}
                  image={study.image}
                  customThumbnail={customThumbnail}
                  tags={study.tags}
                  outcome={study.outcome}
                  index={index}
                  comingSoon={isComingSoon}
                  slug={study.slug}
                />
              );
            })}
          </div>
        </div>
      </section>

      <Contact />

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400">
            © {new Date().getFullYear()} Priscilla Ajayi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
