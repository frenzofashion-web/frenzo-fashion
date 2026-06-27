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
      title: "THE CASUAL MENSWEAR",
      subtitle: "Olive Green Sophistication",
      season: "mens",
      // Supports both external URLs and local paths (e.g. images/filename.jpg)
      image: "images/001/olive-green.webp",
      alt: "Olive green sophistication with modern basics",
      products: [
        {
          id: "prod-001",
          index: 1,
          label: "SHOP THE SHIRT",
          name: "Glowic Men's Plain Casual Shirt",
          tagline: "Effortlessly tailored linen for warm days",
          brand: "FRENZO Selection",
          image: "images/001/shirt.webp",
          affiliateUrl: "https://amzn.to/4uJP0rP",
          category: "shirt"
        },
        {
          id: "prod-002",
          index: 2,
          label: "SHOP THE PANT",
          name: "Highlander Men Jeans",
          tagline: "Crafted For Modern Style",
          brand: "FRENZO Selection",
          image: "images/001/pant.webp",
          affiliateUrl: "https://amzn.to/43Pchha",
          category: "pant"
        },
        {
          id: "prod-003",
          index: 3,
          label: "SHOP THE SHOES",
          name: "Wide-Leg Linen Trousers",
          tagline: "U.S. Polo Assn",
          brand: "FRENZO Selection",
          image: "images/001/shoes.webp",
          affiliateUrl: "https://amzn.to/3QDv4ci",
          category: "shoes"
        },
        {
          id: "prod-004",
          index: 4,
          label: "SHOP THE WATCH",
          name: "Sonata Black Analog",
          tagline: "Sleek Quartz Analog Black Dial Black Leather Strap",
          brand: "FRENZO Selection",
          image: "images/001/watch.webp",
          affiliateUrl: "https://amzn.to/3QuJBqL",
          category: "watch"
        }
      ]
    },
    {
      id: "look-002",
      title: "SOFT ELEGANCE",
      subtitle: "Elegance in every layer",
      season: "womens",
      // Supports both external URLs and local paths (e.g. images/filename.jpg)
      image: "images/002/baegi_kurti.webp",
      alt: "Delicate details crafted for timeless grace.",
      products: [
        {
          id: "prod-005",
          index: 1,
          label: "SHOP THE KURTI",
          name: "Ethnic Dress",
          tagline: "Women Solid Flared Anarkali Gown with Dupatta",
          brand: "FRENZO Selection",
          image: "images/002/beige-kurti_set.webp",
          affiliateUrl: "https://amzn.to/4nVRTE7",
          category: "kurti"
        },
        {
          id: "prod-006",
          index: 2,
          label: "SHOP THE SANDALS",
          name: "Women's Stylish Heels",
          tagline: "Premium women's 'desk to dinner' open toe sandals",
          brand: "FRENZO Selection",
          image: "images/002/002_sandles.webp",
          affiliateUrl: "https://amzn.to/4xS85uX",
          category: "Sandals"
        },
        {
          id: "prod-007",
          index: 3,
          label: "SHOP THE WATCH",
          name: "LOUIS DEVIN",
          tagline: "Rose Gold Plated Mesh Chain Analog Wrist Watch for Women",
          brand: "FRENZO Selection",
          image: "images/002/002_watch.webp",
          affiliateUrl: "https://amzn.to/4uXFlOH",
          category: "Watch"
        }
      ]
    },
    {
      id: "look-003",
      title: "ROYAL PURPLE",
      subtitle: "Premium Casual Shirt Collection",
      season: "mens",
      image: "images/003/purple.webp",
      alt: "Modern Fit • Soft Fabric • All-Day Comfort",
      products: [
        {
          id: "prod-009",
          index: 1,
          label: "SHOP THE SHIRT",
          name: "Cotton Blend Shirt",
          tagline: "Crafted for Comfort. Designed for Style.",
          brand: "FRENZO Selection",
          image: "images/003/purple shirt.webp",
          affiliateUrl: "https://amzn.to/4aqcFX8",
          category: "Shirt"
        },
        {
          id: "prod-010",
          index: 2,
          label: "SHOP THE PANT",
          name: "PURE WHITE",
          tagline: "Tailored for Everyday Confidence",
          brand: "FRENZO Selection",
          image: "images/003/white pant.webp",
          affiliateUrl: "https://amzn.to/4wecwys",
          category: "Pant"
        },
        {
          id: "prod-011",
          index: 3,
          label: "SHOP THE SHOES",
          name: "U.S. POLO ASSN",
          tagline: "Wide-Leg Linen Trousers",
          brand: "FRENZO Footwear",
          image: "images/003/shoes.webp",
          affiliateUrl: "https://amzn.to/44wXNCL",
          category: "Shoes"
        },
        {
          id: "prod-012",
          index: 4,
          label: "SHOP THE WATCH",
          name: "SONATA",
          tagline: "PRECISION. STYLE. CONFIDENCE.",
          brand: "FRENZO Selection",
          image: "images/003/watch.webp",
          affiliateUrl: "https://amzn.to/4wj03tv",
          category: "Watch"
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
          id: "prod-013",
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
          id: "prod-014",
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
          id: "prod-015",
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
          id: "prod-016",
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
          id: "prod-017",
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
          id: "prod-018",
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
          id: "prod-019",
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
          id: "prod-020",
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
          id: "prod-021",
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
          id: "prod-022",
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
