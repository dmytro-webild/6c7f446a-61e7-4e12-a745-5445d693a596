"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import TestimonialAboutCard from "@/components/sections/about/TestimonialAboutCard";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import MetricCardTen from "@/components/sections/metrics/MetricCardTen";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import Link from "next/link";
import { MapPin, Award, Star } from "lucide-react";

export default function VisitPage() {
  const navItems = [
    { name: "Home", id: "/" },
    { name: "Shop", id: "/shop" },
    { name: "Gallery", id: "/gallery" },
    { name: "About", id: "/about" },
    { name: "Contact", id: "/contact" },
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="text-shift"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="mediumLarge"
      sizing="large"
      background="floatingGradient"
      cardStyle="layered-gradient"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Mayur Artifacts"
          navItems={navItems}
          button={{
            text: "WhatsApp Inquiry",
            href: "https://wa.me/919822066686",
          }}
          animateOnLoad={true}
        />
      </div>

      <div id="cta-section" data-section="cta-section">
        <TestimonialAboutCard
          tag="Visit Us Today"
          tagIcon={MapPin}
          tagAnimation="slide-up"
          title="Experience Premium Artifacts at Our Pune Showroom"
          description="Swargate, Pune"
          subdescription="9 Shankar Sheth Rd, Swargate, Pune | 10:30 AM - 9 PM Daily"
          icon={MapPin}
          imageSrc="http://img.b2bpic.net/free-photo/adult-woman-carrying-shopping-bags-mall_23-2148660707.jpg?_wi=4"
          imageAlt="Mayur Artifacts Showroom"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Featured in various interior design magazines and trusted by professional decorators across Pune"
          tag="Featured In"
          tagIcon={Award}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          names={[
            "Interior Design Magazine",
            "Home & Lifestyle",
            "Pune Décor Quarterly",
            "Art & Artifacts Weekly",
            "Premium Home Collection",
            "Crafted by Artisans",
            "Luxury Living Guide",
            "Collector's Choice Magazine",
          ]}
          speed={40}
          showCard={true}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="best-sellers" data-section="best-sellers">
        <MetricCardTen
          title="Best Sellers"
          description="Most loved items from our collection. These bestsellers have earned the trust of hundreds of customers."
          tag="Top Picks"
          tagIcon={Star}
          tagAnimation="slide-up"
          metrics={[
            {
              id: "1",
              title: "Brass Door Knocker",
              subtitle: "Traditional Design | Handcrafted",
              category: "Home Accents",
              value: "₹3,200",
              buttons: [
                {
                  text: "Inquire",
                  href: "https://wa.me/919822066686",
                },
              ],
            },
            {
              id: "2",
              title: "Marble Wall Art",
              subtitle: "Modern Elegance | Premium Material",
              category: "Wall Décor",
              value: "₹9,500",
              buttons: [
                {
                  text: "Inquire",
                  href: "https://wa.me/919822066686",
                },
              ],
            },
            {
              id: "3",
              title: "Copper Artifacts Set",
              subtitle: "3-Piece Collection | Oxidized Finish",
              category: "Collectibles",
              value: "₹11,000",
              buttons: [
                {
                  text: "Inquire",
                  href: "https://wa.me/919822066686",
                },
              ],
            },
            {
              id: "4",
              title: "Wooden Shelf Décor",
              subtitle: "Rustic Charm | Perfect Dimensions",
              category: "Furniture",
              value: "₹6,800",
              buttons: [
                {
                  text: "Inquire",
                  href: "https://wa.me/919822066686",
                },
              ],
            },
            {
              id: "5",
              title: "Stone Planters",
              subtitle: "Set of 2 | Weather Resistant",
              category: "Garden Décor",
              value: "₹5,500",
              buttons: [
                {
                  text: "Inquire",
                  href: "https://wa.me/919822066686",
                },
              ],
            },
            {
              id: "6",
              title: "Vintage Mirror Frame",
              subtitle: "Ornate Design | Antique Gold",
              category: "Wall Accents",
              value: "₹4,200",
              buttons: [
                {
                  text: "Inquire",
                  href: "https://wa.me/919822066686",
                },
              ],
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[
            {
              text: "See More Bestsellers",
              href: "/shop",
            },
          ]}
          buttonAnimation="slide-up"
          carouselMode="buttons"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="Mayur Artifacts"
          leftLink={{
            text: "Privacy Policy",
            href: "#",
          }}
          rightLink={{
            text: "Terms of Service",
            href: "#",
          }}
        />
      </div>
    </ThemeProvider>
  );
}