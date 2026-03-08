"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import Link from "next/link";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroSplitTestimonial from "@/components/sections/hero/HeroSplitTestimonial";
import TestimonialCardTwo from "@/components/sections/testimonial/TestimonialCardTwo";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import { Sparkles, Heart, Award } from "lucide-react";

export default function AboutPage() {
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

      <div id="hero" data-section="hero" className="mx-auto px-4 md:px-6">
        <HeroSplitTestimonial
          title="About Mayur Artifacts - Your Premier Luxury Gallery"
          description="For over a decade, Mayur Artifacts has been the trusted destination for premium home décor and handcrafted artifacts in Pune. We specialize in sourcing unique, authentic pieces that combine timeless elegance with contemporary design. Our mission is to help you transform your living spaces into showcases of refined taste and personal style."
          tag="Our Story"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          background={{ variant: "glowing-orb" }}
          imageSrc="http://img.b2bpic.net/free-photo/handcrafted-wooden-decorative-vase_23-2151003058.jpg?_wi=3"
          imageAlt="About Mayur Artifacts showroom"
          imagePosition="left"
          mediaAnimation="slide-up"
          buttons={[
            { text: "Visit Our Showroom", href: "/shop" },
            { text: "Contact Us", href: "/contact" },
          ]}
          buttonAnimation="slide-up"
          testimonials={[
            {
              name: "Founded 2015",
              handle: "Milestone",
              testimonial:
                "Mayur Artifacts was established with a vision to bring world-class artifacts to Pune.",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-stylish-young-woman-sitting-cafe_23-2148161555.jpg?_wi=3",
            },
            {
              name: "Expert Curation",
              handle: "Excellence",
              testimonial:
                "Every piece in our collection is hand-selected by our team of design experts.",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-man-grey-shirt-looking-front-with-clenched-fists-happy-excited-standing-pink-wall_141793-52902.jpg?_wi=3",
            },
            {
              name: "Customer First",
              handle: "Philosophy",
              testimonial:
                "We believe in building lasting relationships with our customers through exceptional service.",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-young-woman-using-her-mobile-phone-street_1301-4689.jpg?_wi=3",
            },
            {
              name: "Sustainability",
              handle: "Values",
              testimonial:
                "We source responsibly and support artisans who practice traditional craftsmanship.",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/studio-portrait-serious-bearded-male-dressed-suit_613910-14795.jpg?_wi=3",
            },
          ]}
          testimonialRotationInterval={5000}
          useInvertedBackground={false}
          marqueeItems={[
            { type: "text", text: "10+ Years" },
            { type: "text", text: "1000+ Customers" },
            { type: "text", text: "500+ Products" },
            { type: "text", text: "Trusted Partner" },
          ]}
          showMarqueeCard={true}
          marqueeSpeed={30}
        />
      </div>

      <div id="testimonials" data-section="testimonials" className="mx-auto px-4 md:px-6">
        <TestimonialCardTwo
          title="Why Choose Mayur Artifacts"
          description="Discover what sets us apart in the world of premium home décor and artifacts."
          tag="Our Strengths"
          tagIcon={Heart}
          tagAnimation="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Premium Quality",
              role: "Finest Materials & Craftsmanship",
              testimonial:
                "Every artifact is crafted using superior materials and traditional techniques, ensuring longevity and timeless beauty in your home.",
              imageSrc: "http://img.b2bpic.net/free-photo/front-view-smiley-business-woman-posing-outdoors_23-2148603023.jpg?_wi=3",
            },
            {
              id: "2",
              name: "Expert Curation",
              role: "Handpicked Collections",
              testimonial:
                "Our team travels extensively to discover unique pieces that meet our exacting standards for quality and design.",
              imageSrc: "http://img.b2bpic.net/free-photo/business-career-success-concept-cheerful-stylish-young-unshaven-businessman-with-happy-smile-sitting-armchair-against-blank-wall-with-copy-space-your-information_343059-1785.jpg?_wi=3",
            },
            {
              id: "3",
              name: "Personalized Service",
              role: "Customer-Centric Approach",
              testimonial:
                "We believe in understanding your unique taste and helping you find pieces that perfectly complement your personal style.",
              imageSrc: "http://img.b2bpic.net/free-photo/young-girl-smiling-with-headphones-tablet_1157-1875.jpg?_wi=3",
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          carouselMode="buttons"
        />
      </div>

      <div id="social-proof" data-section="social-proof" className="mx-auto px-4 md:px-6">
        <SocialProofOne
          title="Recognized Excellence"
          description="Our commitment to quality has earned recognition from industry leaders and design publications"
          tag="Awards & Recognition"
          tagIcon={Award}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          names={[
            "Best Home Décor Store",
            "Excellence in Design",
            "Customer Choice Award",
            "Premium Retailer",
            "Artisan Partnership Award",
            "Sustainability Champion",
            "Design Innovation Leader",
            "Community Choice",
          ]}
          speed={40}
          showCard={true}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="footer" data-section="footer" className="mx-auto px-4 md:px-6">
        <FooterLogoReveal
          logoText="Mayur Artifacts"
          leftLink={{ text: "Privacy Policy", href: "#" }}
          rightLink={{ text: "Terms of Service", href: "#" }}
        />
      </div>
    </ThemeProvider>
  );
}