import type { LucideIcon } from "lucide-react"
import {
  Beaker,
  Pill,
  Candy,
  Wheat,
  Milk,
  CupSoda,
  Sparkles,
  FlaskConical,
  Dog,
} from "lucide-react"

/**
 * Central data + configuration for the Zoyo Chemicals site.
 * Editing these values is all that is required to update most of the site,
 * making it straightforward to later back this with a CMS or database.
 */

/**
 * Single source of truth for the WhatsApp Business number.
 * International format only — no "+", spaces, or leading zero.
 * Change this one value to update every WhatsApp link across the site.
 */
export const WHATSAPP_NUMBER = "2348101203653"

export const COMPANY = {
  name: "Zoyo Chemicals Nig. Ltd.",
  shortName: "Zoyo Chemicals",
  rc: "RC 1765134",
  tagline: "Quality Chemicals. Reliable Supply. Built for Industry.",
  // Contact details are placeholders — update with the company's real details.
  phone: "+234 810 120 3653",
  phoneHref: "tel:+2348101203653",
  email: "gfaekeson@gmail.com",
  whatsappNumber: WHATSAPP_NUMBER, // international format, no "+" or spaces
  address: "Lagos, Nigeria",
} as const

/** Reusable pre-filled messages used throughout the site. */
export const WHATSAPP_MESSAGES = {
  default: "Hello ZOYO CHEMICALS, I would like to make an enquiry about your chemical products.",
  hero: "Hello ZOYO CHEMICALS, I would like to enquire about your products and pricing.",
  business: "Hello ZOYO CHEMICALS, I would like to discuss my chemical supply requirements.",
} as const

export const WHATSAPP_MESSAGE = WHATSAPP_MESSAGES.default

/**
 * Build a WhatsApp Click-to-Chat link with a properly encoded message.
 * Works across Android, iOS, Windows, macOS, desktop and mobile browsers.
 */
export function createWhatsAppLink(message: string = WHATSAPP_MESSAGES.default) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

/** Build a product-specific WhatsApp enquiry link from a product name. */
export function createProductWhatsAppLink(productName: string) {
  return createWhatsAppLink(
    `Hello ZOYO CHEMICALS, I am interested in ${productName}. Please send me the current price, available packaging and delivery information.`,
  )
}

/** Backwards-compatible alias. Prefer createWhatsAppLink going forward. */
export const whatsappLink = createWhatsAppLink

export type CategoryKey =
  | "acids"
  | "preservatives"
  | "sweeteners"
  | "vitamins"
  | "flavours"
  | "additives"
  | "industrial"

export interface FilterOption {
  key: CategoryKey | "all"
  label: string
}

export const PRODUCT_FILTERS: FilterOption[] = [
  { key: "all", label: "All" },
  { key: "acids", label: "Acids" },
  { key: "preservatives", label: "Preservatives" },
  { key: "sweeteners", label: "Sweeteners" },
  { key: "vitamins", label: "Vitamins" },
  { key: "flavours", label: "Flavours" },
  { key: "additives", label: "Food Additives" },
  { key: "industrial", label: "Industrial Raw Materials" },
]

export const CATEGORY_LABELS: Record<CategoryKey, string> = {
  acids: "Food Acid",
  preservatives: "Preservative",
  sweeteners: "Sweetener",
  vitamins: "Vitamin",
  flavours: "Flavour & Essence",
  additives: "Food Additive",
  industrial: "Industrial Raw Material",
}

export interface Product {
  id: string
  name: string
  category: CategoryKey
  description: string
  applications: string[]
  image: string
  /** relative visual weight used by the masonry gallery */
  gallerySpan?: "wide" | "tall" | "large" | "normal"
  featured?: boolean
}

export const PRODUCTS: Product[] = [
  {
    id: "citric-acid",
    name: "Citric Acid",
    category: "acids",
    description:
      "Anhydrous food-grade citric acid, widely used across food, beverage, confectionery and pharmaceutical manufacturing as an acidulant and preservative.",
    applications: ["Food & Beverage", "Confectionery", "Pharmaceutical"],
    image: "/images/citric-acid.jpg",
    gallerySpan: "large",
    featured: true,
  },
  {
    id: "sodium-benzoate",
    name: "Sodium Benzoate",
    category: "preservatives",
    description:
      "High-purity food-grade sodium benzoate, a trusted preservative that extends shelf life across beverages, sauces and packaged foods.",
    applications: ["Beverages", "Sauces & Condiments", "Packaged Foods"],
    image: "/images/sodium-benzoate.png",
    gallerySpan: "tall",
  },
  {
    id: "potassium-sorbate",
    name: "Potassium Sorbate",
    category: "preservatives",
    description:
      "Food-grade potassium sorbate granular, an effective mould and yeast inhibitor for dairy, baked goods, wine and personal care products.",
    applications: ["Dairy", "Bakery", "Beverages"],
    image: "/images/potassium-sorbate.jpg",
    gallerySpan: "wide",
  },
  {
    id: "sorbic-acid",
    name: "Sorbic Acid",
    category: "preservatives",
    description:
      "Food-grade sorbic acid, a versatile preservative valued for its effectiveness against moulds, yeasts and fungi in a wide range of foods.",
    applications: ["Cheese & Dairy", "Baked Goods", "Beverages"],
    image: "/images/sorbic-acid.jpg",
    gallerySpan: "normal",
  },
  {
    id: "calcium-propionate",
    name: "Calcium Propionate",
    category: "preservatives",
    description:
      "Food-grade calcium propionate, the preferred mould inhibitor for bread, baked goods and animal feed while maintaining product freshness.",
    applications: ["Bakery & Flour Mills", "Animal Feed", "Packaged Foods"],
    image: "/images/calcium-propionate.png",
    gallerySpan: "normal",
  },
  {
    id: "aspartame",
    name: "Aspartame",
    category: "sweeteners",
    description:
      "High-intensity food-grade aspartame sweetener delivering clean sugar-like sweetness for diet beverages, tabletop sweeteners and low-calorie foods.",
    applications: ["Diet Beverages", "Tabletop Sweeteners", "Confectionery"],
    image: "/images/aspartame.png",
    gallerySpan: "tall",
  },
  {
    id: "sodium-cyclamate",
    name: "Sodium Cyclamate",
    category: "sweeteners",
    description:
      "Food-grade sodium cyclamate, a stable non-nutritive sweetener delivering balanced sweetness for beverages and a broad range of foods.",
    applications: ["Beverages", "Confectionery", "Food Processing"],
    image: "/images/sodium-cyclamate.png",
    gallerySpan: "normal",
  },
  {
    id: "acesulfame-k",
    name: "Acesulfame-K (ACK)",
    category: "sweeteners",
    description:
      "Food-grade Acesulfame Potassium, a heat-stable high-intensity sweetener ideal for baked goods, beverages and dairy applications.",
    applications: ["Beverages", "Bakery", "Dairy"],
    image: "/images/acesulfame-k.png",
    gallerySpan: "normal",
  },
  {
    id: "ascorbic-acid",
    name: "Ascorbic Acid (Vitamin C)",
    category: "vitamins",
    description:
      "Food-grade ascorbic acid (Vitamin C), used for fortification, antioxidant protection and freshness in food, beverage and pharmaceutical products.",
    applications: ["Fortification", "Beverages", "Pharmaceutical"],
    image: "/images/ascorbic-acid.png",
    gallerySpan: "wide",
  },
  {
    id: "xanthan-gum",
    name: "Xanthan Gum",
    category: "additives",
    description:
      "Food-grade xanthan gum, a highly effective thickener and stabiliser for sauces, dressings, dairy, bakery and gluten-free formulations.",
    applications: ["Sauces & Dressings", "Bakery", "Dairy"],
    image: "/images/xanthan-gum.png",
    gallerySpan: "tall",
  },
  {
    id: "milk-flavours",
    name: "Milk Flavours",
    category: "flavours",
    description:
      "Concentrated milk flavour powders that deliver rich, authentic dairy notes to confectionery, bakery, dairy and beverage products.",
    applications: ["Confectionery", "Bakery", "Dairy"],
    image: "/images/milk-flavour.png",
    gallerySpan: "normal",
  },
  {
    id: "food-flavours",
    name: "Food Flavours",
    category: "flavours",
    description:
      "A broad range of liquid and powder food flavour concentrates formulated to enhance taste across food and beverage production.",
    applications: ["Beverages", "Confectionery", "Food Processing"],
    image: "/images/food-flavours.png",
    gallerySpan: "wide",
  },
  {
    id: "food-essences",
    name: "Food Essences",
    category: "flavours",
    description:
      "Concentrated food essences that provide consistent aroma and taste for beverages, confectionery, bakery and dairy applications.",
    applications: ["Beverages", "Bakery", "Confectionery"],
    image: "/images/food-essences.jpg",
    gallerySpan: "normal",
  },
  {
    id: "sls",
    name: "Sodium Lauryl Sulphate (SLS)",
    category: "industrial",
    description:
      "Industrial-grade Sodium Lauryl Sulphate, a versatile surfactant and foaming agent for cleaning, detergent and personal care manufacturing.",
    applications: ["Detergents", "Personal Care", "Industrial Cleaning"],
    image: "/images/sls.png",
    gallerySpan: "tall",
  },
]

export interface Industry {
  name: string
  description: string
  icon: LucideIcon
}

export const INDUSTRIES: Industry[] = [
  {
    name: "Food & Beverage Manufacturing",
    description: "Reliable ingredients for food processors and beverage manufacturers.",
    icon: CupSoda,
  },
  {
    name: "Pharmaceutical Industry",
    description: "Quality raw materials supporting pharmaceutical formulation and production.",
    icon: Pill,
  },
  {
    name: "Confectionery Production",
    description: "Sweeteners, acids and flavours for sweets, candies and treats.",
    icon: Candy,
  },
  {
    name: "Bakery & Flour Mills",
    description: "Preservatives and additives that keep baked goods fresh and consistent.",
    icon: Wheat,
  },
  {
    name: "Dairy Processing",
    description: "Stabilisers and preservatives tailored to dairy production needs.",
    icon: Milk,
  },
  {
    name: "Beverage Production",
    description: "Acidulants, sweeteners and preservatives for soft and functional drinks.",
    icon: Beaker,
  },
  {
    name: "Cosmetics & Personal Care",
    description: "Surfactants and functional raw materials for personal care formulations.",
    icon: Sparkles,
  },
  {
    name: "Chemical Manufacturing",
    description: "Dependable industrial raw materials for downstream manufacturing.",
    icon: FlaskConical,
  },
  {
    name: "Animal Feed Industry",
    description: "Feed-grade additives and preservatives for consistent feed quality.",
    icon: Dog,
  },
]

import {
  BadgeCheck,
  Tag,
  Truck,
  Headset,
  Handshake,
  ShieldCheck,
} from "lucide-react"

export interface Advantage {
  title: string
  description: string
  icon: LucideIcon
}

export const ADVANTAGES: Advantage[] = [
  {
    title: "Premium Quality",
    description: "Products sourced with strong attention to quality and consistency.",
    icon: BadgeCheck,
  },
  {
    title: "Competitive Pricing",
    description: "Market-conscious pricing designed to support business growth.",
    icon: Tag,
  },
  {
    title: "Reliable Supply",
    description: "Dependable sourcing and inventory planning for business continuity.",
    icon: ShieldCheck,
  },
  {
    title: "Nationwide Delivery",
    description: "Efficient supply and delivery solutions across Nigeria.",
    icon: Truck,
  },
  {
    title: "Professional Support",
    description: "Responsive customer service and product assistance.",
    icon: Headset,
  },
  {
    title: "Long-Term Partnerships",
    description: "Business relationships built on trust, integrity and consistency.",
    icon: Handshake,
  },
]

export interface Stat {
  value: string
  label: string
}

export const STATS: Stat[] = [
  { value: "100%", label: "Quality Focus" },
  { value: "9+", label: "Core Product Categories" },
  { value: "Nationwide", label: "Distribution" },
  { value: "B2B", label: "Supply Solutions" },
]

export const TRUST_ITEMS = [
  "Quality Assured",
  "Global Sourcing",
  "Competitive Pricing",
  "Nationwide Delivery",
]

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Gallery", href: "#gallery" },
  { label: "Industries", href: "#industries" },
  { label: "Why Zoyo", href: "#why-zoyo" },
  { label: "Contact", href: "#contact" },
]
