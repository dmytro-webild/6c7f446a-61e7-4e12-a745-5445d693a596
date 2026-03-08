"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import TestimonialCardTwo from "@/components/sections/testimonial/TestimonialCardTwo";
import TestimonialAboutCard from "@/components/sections/about/TestimonialAboutCard";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import Link from "next/link";
import { Heart, MapPin } from "lucide-react";

export default function ReviewsPage() {
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
              testimonial:
                "Mayur Artifacts has an incredible selection of unique pieces. The quality is exceptional and the staff is extremely helpful. My clients love the artifacts I source from here.",
              imageSrc:
                "http://img.b2bpic.net/free-photo/front-view-smiley-business-woman-posing-outdoors_23-2148603023.jpg",
            },
            {
              id: "2",
              name: "Arjun Nair",
              role: "Home Owner",
              testimonial:
                "Found exactly what I was looking for to complete my living room makeover. The artifacts are authentic, well-crafted, and add tremendous character to my home.",
              imageSrc:
                "http://img.b2bpic.net/free-photo/business-career-success-concept-cheerful-stylish-young-unshaven-businessman-with-happy-smile-sitting-armchair-against-blank-wall-with-copy-space-your-information_343059-1785.jpg",
            },
            {
              id: "3",
              name: "Divya Patel",
              role: "Event Planner",
              testimonial:
                "Huge variety of artifacts perfect for different occasions. Whether for weddings or housewarming, they have something special for everyone. Highly recommended!",
              imageSrc:
                "http://img.b2bpic.net/free-photo/young-girl-smiling-with-headphones-tablet_1157-1875.jpg",
            },
            {
              id: "4",
              name: "Ravi Sharma",
              role: "Collector",
              testimonial:
                "Excellent service and beautiful décor pieces. The team is knowledgeable and guides you well to choose the perfect artifact for your space. Worth every visit!",
              imageSrc:
                "http://img.b2bpic.net/free-photo/man-with-bag-outside_1303-5836.jpg",
            },
            {
              id: "5",
              name: "Sneha Desai",
              role: "Architect",
              testimonial:
                "As an architect, I appreciate fine details. Mayur Artifacts delivers quality and craftsmanship that elevates any interior design project. My go-to place for artifacts.",
              imageSrc:
                "http://img.b2bpic.net/free-photo/smiley-business-woman-with-files_23-2148692755.jpg",
            },
            {
              id: "6",
              name: "Karan Malhotra",
              role: "Customer",
              testimonial:
                "Amazing collection of unique artifacts. The prices are fair and the quality is outstanding. Staff is courteous and always happy to help. Five stars!",
              imageSrc:
                "http://img.b2bpic.net/free-photo/man-taking-measure-with-his-hands_1187-1585.jpg",
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          carouselMode="buttons"
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
          imageSrc="http://img.b2bpic.net/free-photo/adult-woman-carrying-shopping-bags-mall_23-2148660707.jpg"
          imageAlt="Mayur Artifacts Showroom"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
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