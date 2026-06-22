/* ============================================
   FRENZO — Lookbook Data (Mock API)
   Agent 2: Backend & Data Engineer
   ============================================ */

const FRENZO_LOOKBOOK = {
  collection: "Spring/Summer 2025",
  brand: "FRENZO",
  looks: [
    {
      id: "look-001",
      title: "THE LINEN EDIT",
      subtitle: "Relaxed Tailoring",
      season: "mens",
      // Supports both external URLs and local paths (e.g. images/filename.jpg)
      image: "images/olive-green.webp",
      alt: "Model wearing beige linen blazer with cream wide-leg trousers",
      products: [
        {
          id: "prod-001",
          index: 1,
          label: "SHOP THE BLAZER",
          name: "Relaxed Linen Blazer",
          tagline: "Effortlessly tailored linen for warm days",
          brand: "FRENZO Selection",
          image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&h=250&fit=crop&q=80",
          affiliateUrl: "https://www.amazon.com/dp/B0EXAMPLE01?tag=frenzo-20",
          category: "outerwear"
        },
        {
          id: "prod-002",
          index: 2,
          label: "SHOP THE TOP",
          name: "Silk Camisole",
          tagline: "Lightweight silk with a luxurious drape",
          brand: "FRENZO Essentials",
          image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=200&h=250&fit=crop&q=80",
          affiliateUrl: "https://www.amazon.com/dp/B0EXAMPLE02?tag=frenzo-20",
          category: "tops"
        },
        {
          id: "prod-003",
          index: 3,
          label: "SHOP THE TROUSERS",
          name: "Wide-Leg Linen Trousers",
          tagline: "Relaxed silhouette, breathable all day",
          brand: "FRENZO Selection",
          image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=200&h=250&fit=crop&q=80",
          affiliateUrl: "https://www.amazon.com/dp/B0EXAMPLE03?tag=frenzo-20",
          category: "bottoms"
        },
        {
          id: "prod-004",
          index: 4,
          label: "SHOP THE SHOES",
          name: "Pointed Leather Heels",
          tagline: "Sleek pointed toe, Italian-inspired design",
          brand: "FRENZO Footwear",
          image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=250&fit=crop&q=80",
          affiliateUrl: "https://www.amazon.com/dp/B0EXAMPLE04?tag=frenzo-20",
          category: "shoes"
        }
      ]
    },
    {
      id: "look-002",
      title: "DARK MINIMALISM",
      subtitle: "Monochrome Layers",
      season: "mens",
      // Supports both external URLs and local paths (e.g. images/filename.jpg)
      image: "images/mens1.jpg",
      alt: "Model wearing charcoal overcoat with black turtleneck",
      products: [
        {
          id: "prod-005",
          index: 1,
          label: "SHOP THE COAT",
          name: "Wool Blend Overcoat",
          tagline: "Premium wool, structured and refined",
          brand: "FRENZO Premium",
          image: "https://images.unsplash.com/photo-1544923246-77307dd270b1?w=200&h=250&fit=crop&q=80",
          affiliateUrl: "https://www.amazon.com/dp/B0EXAMPLE05?tag=frenzo-20",
          category: "outerwear"
        },
        {
          id: "prod-006",
          index: 2,
          label: "SHOP THE KNIT",
          name: "Merino Turtleneck",
          tagline: "Ultra-fine merino, soft against the skin",
          brand: "FRENZO Essentials",
          image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=200&h=250&fit=crop&q=80",
          affiliateUrl: "https://www.amazon.com/dp/B0EXAMPLE06?tag=frenzo-20",
          category: "knitwear"
        },
        {
          id: "prod-007",
          index: 3,
          label: "SHOP THE TROUSERS",
          name: "Tailored Navy Trousers",
          tagline: "Sharp navy cut with a modern slim fit",
          brand: "FRENZO Selection",
          image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=200&h=250&fit=crop&q=80",
          affiliateUrl: "https://www.amazon.com/dp/B0EXAMPLE07?tag=frenzo-20",
          category: "bottoms"
        },
        {
          id: "prod-008",
          index: 4,
          label: "SHOP THE BOOTS",
          name: "Leather Chelsea Boots",
          tagline: "Classic Chelsea silhouette in full-grain leather",
          brand: "FRENZO Footwear",
          image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=200&h=250&fit=crop&q=80",
          affiliateUrl: "https://www.amazon.com/dp/B0EXAMPLE08?tag=frenzo-20",
          category: "shoes"
        }
      ]
    },
    {
      id: "look-003",
      title: "AUTUMN WARMTH",
      subtitle: "Earthy Textures",
      season: "womens",
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=1067&fit=crop&q=80",
      alt: "Model wearing camel cashmere sweater with chocolate midi skirt",
      products: [
        {
          id: "prod-009",
          index: 1,
          label: "SHOP THE SWEATER",
          name: "Oversized Cashmere Knit",
          tagline: "Pure cashmere in an oversized cozy cut",
          brand: "FRENZO Premium",
          image: "https://images.unsplash.com/photo-1434389677669-e08b4cda3a07?w=200&h=250&fit=crop&q=80",
          affiliateUrl: "https://www.amazon.com/dp/B0EXAMPLE09?tag=frenzo-20",
          category: "knitwear"
        },
        {
          id: "prod-010",
          index: 2,
          label: "SHOP THE SKIRT",
          name: "Pleated Midi Skirt",
          tagline: "Fluid pleats in a rich chocolate tone",
          brand: "FRENZO Selection",
          image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=200&h=250&fit=crop&q=80",
          affiliateUrl: "https://www.amazon.com/dp/B0EXAMPLE10?tag=frenzo-20",
          category: "bottoms"
        },
        {
          id: "prod-011",
          index: 3,
          label: "SHOP THE BOOTS",
          name: "Suede Knee-High Boots",
          tagline: "Luxe suede reaching just above the knee",
          brand: "FRENZO Footwear",
          image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=250&fit=crop&q=80",
          affiliateUrl: "https://www.amazon.com/dp/B0EXAMPLE11?tag=frenzo-20",
          category: "shoes"
        }
      ]
    },
    {
      id: "look-004",
      title: "SUMMER EASE",
      subtitle: "Casual Refinement",
      season: "kids",
      // Supports both external URLs and local paths (e.g. images/filename.jpg)
      image: "images/kids1.jpg",
      alt: "Model wearing cream linen shirt with olive chinos",
      products: [
        {
          id: "prod-012",
          index: 1,
          label: "SHOP THE SHIRT",
          name: "Linen Button-Down",
          tagline: "Breezy linen in a relaxed button-down cut",
          brand: "FRENZO Essentials",
          image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=200&h=250&fit=crop&q=80",
          affiliateUrl: "https://www.amazon.com/dp/B0EXAMPLE12?tag=frenzo-20",
          category: "tops"
        },
        {
          id: "prod-013",
          index: 2,
          label: "SHOP THE CHINOS",
          name: "Relaxed Cotton Chinos",
          tagline: "Soft cotton chino with an easy relaxed fit",
          brand: "FRENZO Selection",
          image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=200&h=250&fit=crop&q=80",
          affiliateUrl: "https://www.amazon.com/dp/B0EXAMPLE13?tag=frenzo-20",
          category: "bottoms"
        },
        {
          id: "prod-014",
          index: 3,
          label: "SHOP THE SNEAKERS",
          name: "Minimal Leather Sneakers",
          tagline: "Clean leather profile, effortlessly minimal",
          brand: "FRENZO Footwear",
          image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200&h=250&fit=crop&q=80",
          affiliateUrl: "https://www.amazon.com/dp/B0EXAMPLE14?tag=frenzo-20",
          category: "shoes"
        }
      ]
    },
    {
      id: "look-005",
      title: "THE SILK HOUR",
      subtitle: "Evening Minimal",
      season: "couples",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=1067&fit=crop&q=80",
      alt: "Model wearing champagne silk slip dress with draped cardigan",
      products: [
        {
          id: "prod-015",
          index: 1,
          label: "SHOP THE DRESS",
          name: "Silk Slip Dress",
          tagline: "Champagne silk with a fluid bias cut",
          brand: "FRENZO Premium",
          image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&h=250&fit=crop&q=80",
          affiliateUrl: "https://www.amazon.com/dp/B0EXAMPLE15?tag=frenzo-20",
          category: "dresses"
        },
        {
          id: "prod-016",
          index: 2,
          label: "SHOP THE CARDIGAN",
          name: "Draped Knit Cardigan",
          tagline: "Open-front drape for effortless layering",
          brand: "FRENZO Essentials",
          image: "https://images.unsplash.com/photo-1434389677669-e08b4cda3a07?w=200&h=250&fit=crop&q=80",
          affiliateUrl: "https://www.amazon.com/dp/B0EXAMPLE16?tag=frenzo-20",
          category: "knitwear"
        },
        {
          id: "prod-017",
          index: 3,
          label: "SHOP THE SANDALS",
          name: "Strappy Leather Sandals",
          tagline: "Delicate leather straps, all-day comfort",
          brand: "FRENZO Footwear",
          image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=250&fit=crop&q=80",
          affiliateUrl: "https://www.amazon.com/dp/B0EXAMPLE17?tag=frenzo-20",
          category: "shoes"
        }
      ]
    },
    {
      id: "look-006",
      title: "URBAN LAYER",
      subtitle: "Casual Structure",
      season: "mens",
      image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=800&h=1067&fit=crop&q=80",
      alt: "Model wearing denim jacket with white tee and tailored trousers",
      products: [
        {
          id: "prod-018",
          index: 1,
          label: "SHOP THE JACKET",
          name: "Washed Denim Jacket",
          tagline: "Vintage-wash denim with structured shoulders",
          brand: "FRENZO Selection",
          image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=200&h=250&fit=crop&q=80",
          affiliateUrl: "https://www.amazon.com/dp/B0EXAMPLE18?tag=frenzo-20",
          category: "outerwear"
        },
        {
          id: "prod-019",
          index: 2,
          label: "SHOP THE TEE",
          name: "Heavyweight Cotton Tee",
          tagline: "240gsm cotton with a clean boxy silhouette",
          brand: "FRENZO Essentials",
          image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=250&fit=crop&q=80",
          affiliateUrl: "https://www.amazon.com/dp/B0EXAMPLE19?tag=frenzo-20",
          category: "tops"
        },
        {
          id: "prod-020",
          index: 3,
          label: "SHOP THE TROUSERS",
          name: "Pleated Wide Trousers",
          tagline: "High-waist pleats with an elegant wide leg",
          brand: "FRENZO Selection",
          image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=200&h=250&fit=crop&q=80",
          affiliateUrl: "https://www.amazon.com/dp/B0EXAMPLE20?tag=frenzo-20",
          category: "bottoms"
        },
        {
          id: "prod-021",
          index: 4,
          label: "SHOP THE LOAFERS",
          name: "Suede Penny Loafers",
          tagline: "Velvety suede with a timeless penny strap",
          brand: "FRENZO Footwear",
          image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=200&h=250&fit=crop&q=80",
          affiliateUrl: "https://www.amazon.com/dp/B0EXAMPLE21?tag=frenzo-20",
          category: "shoes"
        }
      ]
    }
  ]
};

/**
 * Mock API: Simulates fetching lookbook data with realistic delay
 * @returns {Promise<Object>} The complete lookbook data
 */
function fetchLookbook() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(FRENZO_LOOKBOOK);
    }, 300);
  });
}

/**
 * Mock API: Fetch a single look by ID
 * @param {string} lookId
 * @returns {Promise<Object|null>}
 */
function fetchLookById(lookId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const look = FRENZO_LOOKBOOK.looks.find(l => l.id === lookId);
      resolve(look || null);
    }, 150);
  });
}

/**
 * Track affiliate click (mock analytics)
 * @param {string} productId
 * @param {string} affiliateUrl
 */
function trackAffiliateClick(productId, affiliateUrl) {
  console.log(`[FRENZO Analytics] Affiliate click tracked:`, {
    productId,
    affiliateUrl,
    timestamp: new Date().toISOString()
  });
}
