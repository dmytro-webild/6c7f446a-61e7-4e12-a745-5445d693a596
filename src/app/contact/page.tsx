"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroSplitTestimonial from "@/components/sections/hero/HeroSplitTestimonial";
import TestimonialAboutCard from "@/components/sections/about/TestimonialAboutCard";
import TestimonialCardTwo from "@/components/sections/testimonial/TestimonialCardTwo";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import Link from "next/link";
import { MapPin, Sparkles, Heart } from "lucide-react";

export default function ContactPage() {
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
      {/* Navbar */}
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Mayur Artifacts"
          navItems={[
            { name: "Home", id: "/" },
            { name: "Shop", id: "/shop" },
            { name: "Gallery", id: "/gallery" },
            { name: "About", id: "/about" },
            { name: "Contact", id: "/contact" },
          ]}
          button={{
            text: "WhatsApp Inquiry",
            href: "https://wa.me/919822066686",
          }}
          animateOnLoad={true}
        />
      </div>

      {/* Hero Section with Contact Focus */}
      <div id="hero" data-section="hero">
        <HeroSplitTestimonial
          title="Get in Touch with Mayur Artifacts"
          description="Have questions about our collection? Want to schedule a private viewing at our Pune showroom? Reach out to us and let our team help you find the perfect artifacts for your space."
          tag="Premium Collection"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          background={{ variant: "glowing-orb" }}
          imageSrc="http://img.b2bpic.net/free-photo/handcrafted-wooden-decorative-vase_23-2151003058.jpg"
          imageAlt="Premium artifact collection display"
          imagePosition="right"
          mediaAnimation="slide-up"
          buttons={[
            {
              text: "WhatsApp Us",
              href: "https://wa.me/919822066686",
            },
            {
              text: "Email Inquiry",
              href: "mailto:contact@mayurartifacts.com",
            },
          ]}
          buttonAnimation="slide-up"
          testimonials={[
            {
              name: "Priya Sharma",
              handle: "Home Owner",
              testimonial: "Amazing collection! The artifacts transformed my living room completely. Highly recommended!",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-stylish-young-woman-sitting-cafe_23-2148161555.jpg",
            },
            {
              name: "Rajesh Kumar",
              handle: "Interior Designer",
              testimonial: "Best artifacts supplier in Pune. Great quality and excellent customer service.",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-man-grey-shirt-looking-front-with-clenched-fists-happy-excited-standing-pink-wall_141793-52902.jpg",
            },
            {
              name: "Ananya Desai",
              handle: "Customer",
              testimonial: "Unique pieces that can't be found anywhere else. Worth every rupee!",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-young-woman-using-her-mobile-phone-street_1301-4689.jpg",
            },
            {
              name: "Vikram Singh",
              handle: "Collector",
              testimonial: "Exceptional craftsmanship and attention to detail. A true gem in Pune's décor scene.",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/studio-portrait-serious-bearded-male-dressed-suit_613910-14795.jpg",
            },
          ]}
          testimonialRotationInterval={5000}
          useInvertedBackground={false}
          marqueeItems={[
            {
              type: "text",
              text: "4.8★ Rating",
            },
            {
              type: "text",
              text: "1000+ Reviews",
            },
            {
              type: "text",
              text: "Premium Quality",
            },
            {
              type: "text",
              text: "Expert Curation",
            },
          ]}
          showMarqueeCard={true}
          marqueeSpeed={30}
        />
      </div>

      {/* Showroom Location Card */}
      <div id="cta-section" data-section="cta-section">
        <TestimonialAboutCard
          tag="Visit Us Today"
          tagIcon={MapPin}
          tagAnimation="slide-up"
          title="Experience Premium Artifacts at Our Pune Showroom"
          description="Swargate, Pune"
          subdescription="9 Shankar Sheth Rd, Swargate, Pune | 10:30 AM - 9 PM Daily"
          icon={MapPin}
          imageSrc="http://img.b2bpic.net/free-photo/adult-woman-carrying-shopping-bags-mall_23-2148660707.jpg"
          imageAlt="Mayur Artifacts Showroom"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      {/* Customer Testimonials for Trust */}
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Customers Say"
          description="Trusted by over 1000 satisfied customers with a 4.8★ rating. Here are their stories."
          tag="Customer Reviews"
          tagIcon={Heart}
          tagAnimation="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Meera Joshi",
              role: "Interior Decorator",
              testimonial: "Mayur Artifacts has an incredible selection of unique pieces. The quality is exceptional and the staff is extremely helpful. My clients love the artifacts I source from here.",
              imageSrc: "http://img.b2bpic.net/free-photo/front-view-smiley-business-woman-posing-outdoors_23-2148603023.jpg",
            },
            {
              id: "2",
              name: "Arjun Nair",
              role: "Home Owner",
              testimonial: "Found exactly what I was looking for to complete my living room makeover. The artifacts are authentic, well-crafted, and add tremendous character to my home.",
              imageSrc: "http://img.b2bpic.net/free-photo/business-career-success-concept-cheerful-stylish-young-unshaven-businessman-with-happy-smile-sitting-armchair-against-blank-wall-with-copy-space-your-information_343059-1785.jpg",
            },
            {
              id: "3",
              name: "Divya Patel",
              role: "Event Planner",
              testimonial: "Huge variety of artifacts perfect for different occasions. Whether for weddings or housewarming, they have something special for everyone. Highly recommended!",
              imageSrc: "http://img.b2bpic.net/free-photo/young-girl-smiling-with-headphones-tablet_1157-1875.jpg",
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          carouselMode="buttons"
        />
      </div>

      {/* Footer */}
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