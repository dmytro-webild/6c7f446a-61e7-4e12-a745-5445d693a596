"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import ProductCardThree from "@/components/sections/product/ProductCardThree";
import MetricCardTen from "@/components/sections/metrics/MetricCardTen";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import { Crown, Star } from "lucide-react";

export default function ShopPage() {
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
      {/* Navbar */}
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

      {/* Complete Product Collection */}
      <div id="all-products" data-section="all-products">
        <ProductCardThree
          title="Complete Product Collection"
          description="Browse our full range of premium artifacts and décor items. Each piece is carefully curated for quality and elegance."
          tag="Shop Now"
          tagIcon={Crown}
          tagAnimation="slide-up"
          products={[
            {
              id: "1",
              name: "Brass Wall Clock",
              price: "₹8,500",
              imageSrc:
                "http://img.b2bpic.net/free-photo/ramadan-concept-with-glasses_23-2147791753.jpg",
              imageAlt: "Elegant brass wall clock",
              initialQuantity: 1,
            },
            {
              id: "2",
              name: "Decorative Wind Chime",
              price: "₹5,200",
              imageSrc:
                "http://img.b2bpic.net/free-photo/young-woman-decorating-house-with-christmas-toys_1303-25883.jpg",
              imageAlt: "Traditional wind chime",
              initialQuantity: 1,
            },
            {
              id: "3",
              name: "Abstract Painting",
              price: "₹12,000",
              imageSrc:
                "http://img.b2bpic.net/free-vector/geometric-shapes-abstract-watercolor-cover-template_52683-45061.jpg",
              imageAlt: "Modern abstract artwork",
              initialQuantity: 1,
            },
            {
              id: "4",
              name: "Stone Artifact Vase",
              price: "₹7,800",
              imageSrc:
                "http://img.b2bpic.net/free-photo/close-up-arrangement-modern-vases_23-2149646530.jpg",
              imageAlt: "Handcrafted stone vase",
              initialQuantity: 1,
            },
            {
              id: "5",
              name: "Wooden Frame Set",
              price: "₹4,500",
              imageSrc:
                "http://img.b2bpic.net/free-photo/ramadan-frames-wall-front-view-white-background_187299-38104.jpg",
              imageAlt: "Premium wooden frames",
              initialQuantity: 1,
            },
            {
              id: "6",
              name: "Ceramic Décor Bowl",
              price: "₹6,200",
              imageSrc:
                "http://img.b2bpic.net/free-photo/side-view-shaped-blank-white-simple-ceramic-coffee-cups-pyramide-thick-wooden-table-isolated_346278-1399.jpg",
              imageAlt: "Handmade ceramic bowl",
              initialQuantity: 1,
            },
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttonAnimation="slide-up"
        />
      </div>

      {/* Best Sellers from Shop */}
      <div id="shop-bestsellers" data-section="shop-bestsellers">
        <MetricCardTen
          title="Shop Bestsellers"
          description="Our most popular items that customers love. High demand, premium quality, and exceptional value."
          tag="Customer Favorites"
          tagIcon={Star}
          tagAnimation="slide-up"
          metrics={[
            {
              id: "1",
              title: "Brass Door Knocker",
              subtitle: "Traditional Design | Handcrafted",
              category: "Home Accents",
              value: "₹3,200",
              buttons: [{ text: "Add to Cart", href: "https://wa.me/919822066686" }],
            },
            {
              id: "2",
              title: "Marble Wall Art",
              subtitle: "Modern Elegance | Premium Material",
              category: "Wall Décor",
              value: "₹9,500",
              buttons: [{ text: "Add to Cart", href: "https://wa.me/919822066686" }],
            },
            {
              id: "3",
              title: "Copper Artifacts Set",
              subtitle: "3-Piece Collection | Oxidized Finish",
              category: "Collectibles",
              value: "₹11,000",
              buttons: [{ text: "Add to Cart", href: "https://wa.me/919822066686" }],
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttonAnimation="slide-up"
          carouselMode="buttons"
        />
      </div>

      {/* Premium Collections Showcase */}
      <div id="premium-showcase" data-section="premium-showcase">
        <ProductCardThree
          title="Premium Collections"
          description="Handpicked premium selections for those seeking the finest artifacts and décor. Limited edition and exclusive pieces."
          tag="Exclusive Range"
          tagIcon={Crown}
          tagAnimation="slide-up"
          products={[
            {
              id: "7",
              name: "Wooden Shelf Décor",
              price: "₹6,800",
              imageSrc:
                "http://img.b2bpic.net/free-photo/ramadan-frames-wall-front-view-white-background_187299-38104.jpg",
              imageAlt: "Premium wooden shelving",
              initialQuantity: 1,
            },
            {
              id: "8",
              name: "Stone Planters",
              price: "₹5,500",
              imageSrc:
                "http://img.b2bpic.net/free-photo/close-up-arrangement-modern-vases_23-2149646530.jpg",
              imageAlt: "Stone planter set",
              initialQuantity: 1,
            },
            {
              id: "9",
              name: "Vintage Mirror Frame",
              price: "₹4,200",
              imageSrc:
                "http://img.b2bpic.net/free-photo/ramadan-concept-with-glasses_23-2147791753.jpg",
              imageAlt: "Antique mirror frame",
              initialQuantity: 1,
            },
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttonAnimation="slide-up"
        />
      </div>

      {/* Footer */}
      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="Mayur Artifacts"
          leftLink={{ text: "Privacy Policy", href: "#" }}
          rightLink={{ text: "Terms of Service", href: "#" }}
        />
      </div>
    </ThemeProvider>
  );
}