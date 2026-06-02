export interface Product {
  id: number;
  name: string;
  category: string;
  subcategory?: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  description: string;
  features: string[];
  inStock: boolean;
  brand: string;
  carTypes?: string[];
}

export interface Alloy {
  id: number;
  name: string;
  size: string;
  pcd: string;
  finish: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  brand: string;
  rating: number;
  reviews: number;
  description: string;
  fitment: string[];
}

export interface Category {
  id: string;
  name: string;
  desc: string;
  icon: string;
  count: number;
}

/* ─── Categories ─── */
export const categories: Category[] = [
  { id: 'seat-covers',  name: 'Premium Seat Covers', desc: 'Luxury leather & fabric wraps',    icon: '🪑', count: 34 },
  { id: 'exterior',     name: 'Exterior Styling',    desc: 'Body kits, spoilers & trim',       icon: '🚗', count: 28 },
  { id: 'interior',     name: 'Interior Accessories', desc: 'Dashboard, mats & more',          icon: '🎛️', count: 46 },
  { id: 'audio',        name: 'Car Audio',            desc: 'Head units, speakers & subs',     icon: '🔊', count: 22 },
  { id: 'lighting',     name: 'LED Lighting',         desc: 'Headlights, DRLs & ambient',      icon: '💡', count: 19 },
  { id: 'modification', name: 'Car Modification',     desc: 'All types of car upgrades',       icon: '⚙️', count: 15 },
  { id: 'safety',       name: 'Safety & Security',    desc: 'Dash cams, locks & sensors',      icon: '🛡️', count: 18 },
  { id: 'cleaning',     name: 'Car Care',             desc: 'Cleaning & detailing kits',       icon: '✨', count: 31 },
];

/* ─── Products ─── */
export const products: Product[] = [
  {
    id: 1,
    name: 'Nappa Leather Seat Cover – Full Set',
    category: 'seat-covers',
    price: 8499,  originalPrice: 12999,
    rating: 4.9, reviews: 218,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=700&q=80',
    badge: 'Best Seller',
    description: 'Premium imported Nappa leather seat covers with triple stitching. Fits all popular hatchbacks and sedans. Airbag-compatible with back-seat armrest access.',
    features: ['Imported Nappa Leather','Triple Stitch','Airbag Safe','Full 7-Piece Set','5 Colour Options'],
    inStock: true, brand: 'Malwas Premium',
    carTypes: ['Hatchback','Sedan','SUV'],
  },
  {
    id: 2,
    name: 'Perforated Leatherette Seat Cover',
    category: 'seat-covers',
    price: 5499, originalPrice: 7999,
    rating: 4.7, reviews: 156,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=700&q=80',
    badge: 'Hot Deal',
    description: 'Breathable perforated leatherette with elegant diamond-quilted pattern.',
    features: ['Perforated PU Leather','Diamond Quilted','Breathable','Easy Install'],
    inStock: true, brand: 'Malwas Premium',
    carTypes: ['Hatchback','Sedan'],
  },
  {
    id: 3,
    name: '7D Moulded Floor Mat Set',
    category: 'interior',
    price: 3299, originalPrice: 4999,
    rating: 4.8, reviews: 342,
    image: 'https://images.unsplash.com/photo-1567818735868-e71b99932e29?w=700&q=80',
    badge: 'Top Rated',
    description: 'Custom moulded 7D floor mats – perfect fit, waterproof and odour-free.',
    features: ['7D Moulded','Waterproof','Anti-Slip','Custom Fit','Easy Clean'],
    inStock: true, brand: 'FloorPro',
    carTypes: ['All Cars'],
  },
  {
    id: 4,
    name: 'Android Car Stereo 9" IPS',
    category: 'audio',
    price: 13999, originalPrice: 18999,
    rating: 4.6, reviews: 189,
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=700&q=80',
    badge: 'New Arrival',
    description: '9-inch IPS Android 12 head unit with wireless CarPlay, Android Auto, 4G SIM support.',
    features: ['9" IPS Display','Wireless CarPlay','Android Auto','4G SIM Slot','32GB Storage'],
    inStock: true, brand: 'AudioMax',
    carTypes: ['Universal'],
  },
  {
    id: 5,
    name: 'Full Body Wrap Kit – Matte Black',
    category: 'modification',
    price: 24999, originalPrice: 34999,
    rating: 4.9, reviews: 67,
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=700&q=80',
    badge: 'Premium',
    description: 'Professional-grade 3M / Avery Dennison full car vinyl wrap in matte black. Includes labour.',
    features: ['3M / Avery Film','Matte Black Finish','Labour Included','2-Year Warranty','Removable'],
    inStock: true, brand: '3M Partner',
    carTypes: ['All Cars'],
  },
  {
    id: 6,
    name: 'LED DRL + Projector Headlight Set',
    category: 'lighting',
    price: 7999, originalPrice: 11999,
    rating: 4.7, reviews: 104,
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=700&q=80',
    badge: 'Best Seller',
    description: 'Bi-xenon projector headlights with integrated LED DRL and sequential turn signal.',
    features: ['Bi-Xenon Projector','LED DRL','Sequential Turn Signal','Plug & Play','DOT Approved'],
    inStock: true, brand: 'LuxBeam',
    carTypes: ['Hatchback','Sedan','SUV'],
  },
  {
    id: 7,
    name: '4K UHD Dashcam + ADAS',
    category: 'safety',
    price: 8999, originalPrice: 12999,
    rating: 4.8, reviews: 231,
    image: 'https://images.unsplash.com/photo-1596768077976-aab1baa6ccfe?w=700&q=80',
    badge: 'Top Rated',
    description: 'Ultra HD 4K front dashcam with Advanced Driver Assistance (ADAS), GPS logging and cloud upload.',
    features: ['4K Recording','ADAS System','GPS Logger','Night Vision','Cloud Backup'],
    inStock: true, brand: 'SafeCam',
    carTypes: ['All Cars'],
  },
  {
    id: 8,
    name: 'Roof Spoiler – ABS Painted',
    category: 'exterior',
    price: 4299, originalPrice: 6499,
    rating: 4.5, reviews: 88,
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=700&q=80',
    description: 'OEM-style ABS plastic roof spoiler, factory-painted & ready to fit.',
    features: ['ABS Plastic','Factory Paint','OEM Style','Easy Fit','Universal Kit'],
    inStock: true, brand: 'AeroCraft',
    carTypes: ['Hatchback','Sedan'],
  },
  {
    id: 9,
    name: 'Premium Car Perfume – Oud',
    category: 'interior',
    price: 799, originalPrice: 1299,
    rating: 4.4, reviews: 567,
    image: 'https://images.unsplash.com/photo-1567818735868-e71b99932e29?w=700&q=80',
    description: 'Long-lasting luxury Oud fragrance for car interiors. Lasts 60+ days.',
    features: ['Oud Fragrance','60+ Day Life','Non-Drip','Elegant Design'],
    inStock: true, brand: 'FragranceCo',
    carTypes: ['All Cars'],
  },
  {
    id: 10,
    name: 'Reverse Parking Sensor Kit',
    category: 'safety',
    price: 1499, originalPrice: 2499,
    rating: 4.6, reviews: 412,
    image: 'https://images.unsplash.com/photo-1596768077976-aab1baa6ccfe?w=700&q=80',
    description: '4-sensor ultrasonic parking kit with buzzer display. DIY install in 30 min.',
    features: ['4 Sensors','Buzzer + Display','DIY Install','Universal Fit','Weatherproof'],
    inStock: true, brand: 'ParkSafe',
    carTypes: ['All Cars'],
  },
  {
    id: 11,
    name: 'Suede Steering Wheel Cover',
    category: 'interior',
    price: 1299, originalPrice: 1999,
    rating: 4.7, reviews: 278,
    image: 'https://images.unsplash.com/photo-1567818735868-e71b99932e29?w=700&q=80',
    description: 'Microfibre suede steering cover with anti-slip grip and sporty contrast stitching.',
    features: ['Microfibre Suede','Anti-Slip','Sport Stitching','38–40cm Fit'],
    inStock: true, brand: 'GripMaster',
    carTypes: ['All Cars'],
  },
  {
    id: 12,
    name: 'Ceramic Car Wash Kit (12-Piece)',
    category: 'cleaning',
    price: 2299, originalPrice: 3499,
    rating: 4.5, reviews: 389,
    image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=700&q=80',
    badge: 'Value Pack',
    description: 'Complete 12-piece ceramic detailing kit. Gives showroom-level finish at home.',
    features: ['12 Piece Kit','Ceramic Formula','Nano Coating','All Paint Safe','Includes Pads'],
    inStock: true, brand: 'ShineMax',
    carTypes: ['All Cars'],
  },
];

/* ─── Alloys ─── */
export const alloys: Alloy[] = [
  {
    id: 1,
    name: 'Hawk Spoke – Gloss Black Machined',
    size: '17"', pcd: '5x114.3', finish: 'Gloss Black Machined',
    price: 8999, originalPrice: 11999,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80',
    badge: 'Best Seller', brand: 'Malwas Alloys',
    rating: 4.9, reviews: 134,
    description: 'Forged 10-spoke alloy with gloss black base and precision-machined highlights.',
    fitment: ['Hyundai Creta','Kia Seltos','Honda City','Toyota Innova Crysta'],
  },
  {
    id: 2,
    name: 'Stealth Mesh – Matte Gunmetal',
    size: '16"', pcd: '4x100', finish: 'Matte Gunmetal',
    price: 6499, originalPrice: 8999,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80',
    badge: 'Hot Deal', brand: 'Malwas Alloys',
    rating: 4.7, reviews: 98,
    description: 'Aggressive mesh design in matte gunmetal. Ideal for hatchbacks and compact sedans.',
    fitment: ['Maruti Swift','Hyundai i20','Tata Nexon','Mahindra XUV 3XO'],
  },
  {
    id: 3,
    name: 'Crown 10-Spoke – Chrome Lip',
    size: '18"', pcd: '5x112', finish: 'Silver with Chrome Lip',
    price: 12999, originalPrice: 17999,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80',
    badge: 'Premium', brand: 'Malwas Alloys',
    rating: 4.8, reviews: 72,
    description: 'Luxury 10-spoke with deep chrome lip – the statement wheel for premium SUVs.',
    fitment: ['Toyota Fortuner','Hyundai Tucson','VW Tiguan','Skoda Kodiaq'],
  },
  {
    id: 4,
    name: 'Apex Y-Spoke – Gloss Black',
    size: '17"', pcd: '5x100', finish: 'Full Gloss Black',
    price: 7999, originalPrice: 10499,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80',
    brand: 'Malwas Alloys', badge: 'New Stock',
    rating: 4.6, reviews: 55,
    description: 'Bold Y-spoke design in full gloss black with floating centre cap.',
    fitment: ['Toyota Glanza','Maruti Baleno','Volkswagen Polo','Skoda Rapid'],
  },
  {
    id: 5,
    name: 'Storm 5-Split – Hyper Silver',
    size: '16"', pcd: '4x108', finish: 'Hyper Silver',
    price: 5999, originalPrice: 7499,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80',
    brand: 'Malwas Alloys',
    rating: 4.5, reviews: 43,
    description: 'Clean 5-split spoke in hyper silver finish. Understated and elegant.',
    fitment: ['Ford Figo','Honda Amaze','Renault Triber','Nissan Magnite'],
  },
  {
    id: 6,
    name: 'Beast Concave – Bronze Tint',
    size: '18"', pcd: '5x114.3', finish: 'Bronze Tinted',
    price: 14999, originalPrice: 19999,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80',
    badge: 'Exclusive', brand: 'Malwas Alloys',
    rating: 4.9, reviews: 29,
    description: 'Concave-face deep-lip design in warm bronze tint. Limited stocks.',
    fitment: ['Hyundai Creta N-Line','Kia Sonet','MG Astor','Jeep Compass'],
  },
];

/* ─── Testimonials ─── */
export const testimonials = [
  { id:1, name:'Amit Sahu',     location:'Ranchi',    rating:5, avatar:'AS', car:'Hyundai i20',    text:'Got Nappa leather covers fitted here. Quality is showroom-level. The shop near Hyundai is very easy to find.' },
  { id:2, name:'Sandeep Kumar', location:'Hazaribagh', rating:5, avatar:'SK', car:'Maruti Swift',   text:'Bought Hawk Spoke alloys from Malwas Alloys. Looks stunning! They did balancing and fitting on-spot.' },
  { id:3, name:'Priya Verma',   location:'Ranchi',    rating:5, avatar:'PV', car:'Kia Seltos',     text:'Full matte black wrap done here. The finish is flawless. Highly recommend for any car modification.' },
  { id:4, name:'Rohit Tiwari',  location:'Ramgarh',   rating:4, avatar:'RT', car:'Toyota Fortuner', text:'Crown 18" alloys on my Fortuner. Everyone stops to ask where I got these. Great staff at Malwas Alloys.' },
];

/* ─── Car types they work on ─── */
export const carTypes = [
  { name:'Hatchback',  cars:'Swift, i20, Polo, Altroz…',   icon:'🚙' },
  { name:'Sedan',      cars:'City, Verna, Ciaz, Amaze…',   icon:'🚗' },
  { name:'SUV / MUV',  cars:'Creta, Seltos, Innova, XUV…', icon:'🚐' },
  { name:'Luxury',     cars:'BMW, Audi, Mercedes, Volvo…',  icon:'🏎️' },
];
