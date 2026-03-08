"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import Link from "next/link";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroSplitTestimonial from "@/components/sections/hero/HeroSplitTestimonial";
import ProductCardThree from "@/components/sections/product/ProductCardThree";
import MetricCardTen from "@/components/sections/metrics/MetricCardTen";
import TestimonialCardTwo from "@/components/sections/testimonial/TestimonialCardTwo";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import TestimonialAboutCard from "@/components/sections/about/TestimonialAboutCard";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import { Sparkles, Crown, Star, Heart, Award, MapPin } from "lucide-react";

export default function HomePage() {
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
          title="Unique Artifacts to Beautify Your Space"
          description="Discover our curated collection of premium home décor and artifacts. Each piece is selected with care to bring elegance and sophistication to your home. Visit our Pune showroom or inquire online today."
          tag="Premium Collection"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          background={{ variant: "glowing-orb" }}
          imageSrc="http://img.b2bpic.net/free-photo/handcrafted-wooden-decorative-vase_23-2151003058.jpg?_wi=1"
          imageAlt="Premium artifact collection display"
          imagePosition="right"
          mediaAnimation="slide-up"
          buttons={[
            { text: "Explore Shop", href: "/shop" },
            { text: "WhatsApp Us", href: "https://wa.me/919822066686" },
          ]}
          buttonAnimation="slide-up"
          testimonials={[
            {
              name: "Priya Sharma",
              handle: "Home Owner",
              testimonial:
                "Amazing collection! The artifacts transformed my living room completely. Highly recommended!",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-stylish-young-woman-sitting-cafe_23-2148161555.jpg?_wi=1",
            },
            {
              name: "Rajesh Kumar",
              handle: "Interior Designer",
              testimonial:
                "Best artifacts supplier in Pune. Great quality and excellent customer service.",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-man-grey-shirt-looking-front-with-clenched-fists-happy-excited-standing-pink-wall_141793-52902.jpg?_wi=1",
            },
            {
              name: "Ananya Desai",
              handle: "Customer",
              testimonial:
                "Unique pieces that can't be found anywhere else. Worth every rupee!",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-young-woman-using-her-mobile-phone-street_1301-4689.jpg?_wi=1",
            },
            {
              name: "Vikram Singh",
              handle: "Collector",
              testimonial:
                "Exceptional craftsmanship and attention to detail. A true gem in Pune's décor scene.",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/studio-portrait-serious-bearded-male-dressed-suit_613910-14795.jpg?_wi=1",
            },
          ]}
          testimonialRotationInterval={5000}
          useInvertedBackground={false}
          marqueeItems={[
            { type: "text", text: "4.8★ Rating" },
            { type: "text", text: "1000+ Reviews" },
            { type: "text", text: "Premium Quality" },
            { type: "text", text: "Expert Curation" },
          ]}
          showMarqueeCard={true}
          marqueeSpeed={30}
        />
      </div>

      <div id="featured-collections" data-section="featured-collections" className="mx-auto px-4 md:px-6">
        <ProductCardThree
          title="Featured Collections"
          description="Handpicked artifacts and décor items that exemplify craftsmanship and elegance"
          tag="Curated Selection"
          tagIcon={Crown}
          tagAnimation="slide-up"
          products={[
            {
              id: "1",
              name: "Brass Wall Clock",
              price: "₹8,500",
              imageSrc: "http://img.b2bpic.net/free-photo/ramadan-concept-with-glasses_23-2147791753.jpg?_wi=1",
              imageAlt: "Elegant brass wall clock",
              initialQuantity: 1,
            },
            {
              id: "2",
              name: "Decorative Wind Chime",
              price: "₹5,200",
              imageSrc: "http://img.b2bpic.net/free-photo/young-woman-decorating-house-with-christmas-toys_1303-25883.jpg?_wi=1",
              imageAlt: "Traditional wind chime",
              initialQuantity: 1,
            },
            {
              id: "3",
              name: "Abstract Painting",
              price: "₹12,000",
              imageSrc: "http://img.b2bpic.net/free-vector/geometric-shapes-abstract-watercolor-cover-template_52683-45061.jpg?_wi=1",
              imageAlt: "Modern abstract artwork",
              initialQuantity: 1,
            },
            {
              id: "4",
              name: "Stone Artifact Vase",
              price: "₹7,800",
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-arrangement-modern-vases_23-2149646530.jpg?_wi=1",
              imageAlt: "Handcrafted stone vase",
              initialQuantity: 1,
            },
            {
              id: "5",
              name: "Wooden Frame Set",
              price: "₹4,500",
              imageSrc: "http://img.b2bpic.net/free-photo/ramadan-frames-wall-front-view-white-background_187299-38104.jpg?_wi=1",
              imageAlt: "Premium wooden frames",
              initialQuantity: 1,
            },
            {
              id: "6",
              name: "Ceramic Décor Bowl",
              price: "₹6,200",
              imageSrc: "http://img.b2bpic.net/free-photo/side-view-shaped-blank-white-simple-ceramic-coffee-cups-pyramide-thick-wooden-table-isolated_346278-1399.jpg?_wi=1",
              imageAlt: "Handmade ceramic bowl",
              initialQuantity: 1,
            },
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[{ text: "View All Products", href: "/shop" }]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="best-sellers" data-section="best-sellers" className="mx-auto px-4 md:px-6">
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
              buttons: [{ text: "Inquire", href: "https://wa.me/919822066686" }],
            },
            {
              id: "2",
              title: "Marble Wall Art",
              subtitle: "Modern Elegance | Premium Material",
              category: "Wall Décor",
              value: "₹9,500",
              buttons: [{ text: "Inquire", href: "https://wa.me/919822066686" }],
            },
            {
              id: "3",
              title: "Copper Artifacts Set",
              subtitle: "3-Piece Collection | Oxidized Finish",
              category: "Collectibles",
              value: "₹11,000",
              buttons: [{ text: "Inquire", href: "https://wa.me/919822066686" }],
            },
            {
              id: "4",
              title: "Wooden Shelf Décor",
              subtitle: "Rustic Charm | Perfect Dimensions",
              category: "Furniture",
              value: "₹6,800",
              buttons: [{ text: "Inquire", href: "https://wa.me/919822066686" }],
            },
            {
              id: "5",
              title: "Stone Planters",
              subtitle: "Set of 2 | Weather Resistant",
              category: "Garden Décor",
              value: "₹5,500",
              buttons: [{ text: "Inquire", href: "https://wa.me/919822066686" }],
            },
            {
              id: "6",
              title: "Vintage Mirror Frame",
              subtitle: "Ornate Design | Antique Gold",
              category: "Wall Accents",
              value: "₹4,200",
              buttons: [{ text: "Inquire", href: "https://wa.me/919822066686" }],
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[{ text: "See More Bestsellers", href: "/shop" }]}
          buttonAnimation="slide-up"
          carouselMode="buttons"
        />
      </div>

      <div id="testimonials" data-section="testimonials" className="mx-auto px-4 md:px-6">
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
              imageSrc: "http://img.b2bpic.net/free-photo/front-view-smiley-business-woman-posing-outdoors_23-2148603023.jpg?_wi=1",
            },
            {
              id: "2",
              name: "Arjun Nair",
              role: "Home Owner",
              testimonial:
                "Found exactly what I was looking for to complete my living room makeover. The artifacts are authentic, well-crafted, and add tremendous character to my home.",
              imageSrc: "http://img.b2bpic.net/free-photo/business-career-success-concept-cheerful-stylish-young-unshaven-businessman-with-happy-smile-sitting-armchair-against-blank-wall-with-copy-space-your-information_343059-1785.jpg?_wi=1",
            },
            {
              id: "3",
              name: "Divya Patel",
              role: "Event Planner",
              testimonial:
                "Huge variety of artifacts perfect for different occasions. Whether for weddings or housewarming, they have something special for everyone. Highly recommended!",
              imageSrc: "http://img.b2bpic.net/free-photo/young-girl-smiling-with-headphones-tablet_1157-1875.jpg?_wi=1",
            },
            {
              id: "4",
              name: "Ravi Sharma",
              role: "Collector",
              testimonial:
                "Excellent service and beautiful décor pieces. The team is knowledgeable and guides you well to choose the perfect artifact for your space. Worth every visit!",
              imageSrc: "http://img.b2bpic.net/free-photo/man-with-bag-outside_1303-5836.jpg?_wi=1",
            },
            {
              id: "5",
              name: "Sneha Desai",
              role: "Architect",
              testimonial:
                "As an architect, I appreciate fine details. Mayur Artifacts delivers quality and craftsmanship that elevates any interior design project. My go-to place for artifacts.",
              imageSrc: "http://img.b2bpic.net/free-photo/smiley-business-woman-with-files_23-2148692755.jpg?_wi=1",
            },
            {
              id: "6",
              name: "Karan Malhotra",
              role: "Customer",
              testimonial:
                "Amazing collection of unique artifacts. The prices are fair and the quality is outstanding. Staff is courteous and always happy to help. Five stars!",
              imageSrc: "http://img.b2bpic.net/free-photo/man-taking-measure-with-his-hands_1187-1585.jpg?_wi=1",
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

      <div id="cta-section" data-section="cta-section" className="mx-auto px-4 md:px-6">
        <TestimonialAboutCard
          tag="Visit Us Today"
          tagIcon={MapPin}
          tagAnimation="slide-up"
          title="Experience Premium Artifacts at Our Pune Showroom"
          description="Swargate, Pune"
          subdescription="9 Shankar Sheth Rd, Swargate, Pune | 10:30 AM - 9 PM Daily"
          icon={MapPin}
          imageSrc="http://img.b2bpic.net/free-photo/adult-woman-carrying-shopping-bags-mall_23-2148660707.jpg?_wi=1"
          imageAlt="Mayur Artifacts Showroom"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
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