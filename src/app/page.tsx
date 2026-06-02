'use client';
import Link from'next/link';
import Image from'next/image';
import{ArrowRight,Shield,Truck,RefreshCw,Headphones,Star,ChevronRight,Wrench,MapPin}from'lucide-react';
import{products,categories,testimonials,carTypes,alloys}from'@/data/products';
import ProductCard from'@/components/ui/ProductCard';
import AlloyCard from'@/components/ui/AlloyCard';
import{useState,useEffect}from'react';

const slides=[
  {
    tag:'Premium Seat Covers',
    title:'YOUR CAR\nDESERVES\nBETTER',
    sub:'Nappa leather, 7D mats, full modification for all car types. Best prices on Ranchi Road.',
    cta:'Shop Seat Covers',href:'/products?category=seat-covers',
    img:'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1400&q=80',
  },
  {
    tag:'Malwa Alloys Showroom',
    title:'LATEST\nALLOY\nWHEELS',
    sub:'Biggest selection of 4-wheeler alloys in the region. Fitting & balancing included.',
    cta:'Browse Alloys',href:'/alloys',
    img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80',
  },
  {
    tag:'Car Modification',
    title:'FULL CAR\nTRANSFOR\nMATION',
    sub:'Wrapping, LED upgrades, audio systems and more. All car types welcomed.',
    cta:'Explore Services',href:'/products?category=modification',
    img:'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1400&q=80',
  },
];

const features=[
  {icon:Truck,    title:'Free Fitting',      desc:'On all seat covers & floor mats'},
  {icon:Shield,   title:'Genuine Products',  desc:'100% authentic accessories'},
  {icon:Wrench,   title:'Expert Fitment',    desc:'Experienced installation team'},
  {icon:Headphones,title:'24/7 Support',     desc:'+91 94xxx xxxxx · Always here'},
];

const stats=[
  {val:'10,000+',label:'Cars Served'},
  {val:'5,000+',label:'Happy Customers'},
  {val:'4.9★',  label:'Avg Rating'},
  {val:'8+',    label:'Years Experience'},
];

export default function Home(){
  const[cur,setCur]=useState(0);
  const featured=products.slice(0,8);
  const featuredAlloys=alloys.slice(0,3);

  useEffect(()=>{
    const t=setInterval(()=>setCur(p=>(p+1)%slides.length),5500);
    return()=>clearInterval(t);
  },[]);

  const s=slides[cur];

  return(
    <div className="min-h-screen">

      {/* ── HERO ── */}
      <section className="relative h-[88vh] min-h-[560px] overflow-hidden">
        {/* BG */}
        <div className="absolute inset-0">
          <Image src={s.img} alt="hero" fill
            className="object-cover transition-all duration-700 grayscale"
            priority unoptimized/>
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/85 to-zinc-950/30"/>
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 to-transparent"/>
        </div>
        <div className="absolute inset-0 grid-overlay opacity-40"/>

        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
          <div key={cur} className="max-w-xl">
            <span className="section-tag animate-fade-up">{s.tag}</span>
            <h1 className="display font-black text-white uppercase leading-none tracking-wider mb-6 animate-fade-up"
              style={{fontSize:'clamp(3.5rem,9vw,7rem)'}}>
              {s.title.split('\n').map((ln,i)=>(
                <span key={i} className="block">{ln}</span>
              ))}
            </h1>
            <p className="text-zinc-400 text-base max-w-sm mb-8 animate-fade-up leading-relaxed">{s.sub}</p>
            <div className="flex flex-wrap gap-3 animate-fade-up">
              <Link href={s.href} className="btn-white">{s.cta} <ArrowRight size={14}/></Link>
              <Link href="/contact" className="btn-outline">Get a Quote</Link>
            </div>
          </div>

          {/* Slide dots */}
          <div className="absolute bottom-10 left-4 flex items-center gap-2">
            {slides.map((_,i)=>(
              <button key={i} onClick={()=>setCur(i)}
                className={`transition-all duration-300 ${i===cur?'w-8 h-1.5 bg-white':'w-1.5 h-1.5 bg-zinc-600 hover:bg-zinc-400'}`}/>
            ))}
          </div>
          <div className="absolute bottom-10 right-4 mono text-zinc-700 text-xs">
            <span className="text-white">{String(cur+1).padStart(2,'0')}</span><span className="mx-1">/</span>{String(slides.length).padStart(2,'0')}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"/>
      </section>

      {/* ── FEATURES BAR ── */}
      <section className="bg-zinc-900 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-zinc-800">
            {features.map(({icon:Icon,title,desc})=>(
              <div key={title} className="flex items-center gap-3 px-5 py-5 hover:bg-zinc-850 transition-colors">
                <div className="w-9 h-9 border border-zinc-700 flex items-center justify-center shrink-0">
                  <Icon size={16} className="text-white"/>
                </div>
                <div>
                  <div className="text-white font-semibold text-xs">{title}</div>
                  <div className="text-zinc-600 text-xs mt-0.5">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAR TYPES ── */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <span className="section-tag">We Work On</span>
        <h2 className="section-title mb-8">ALL CAR TYPES</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {carTypes.map(ct=>(
            <Link key={ct.name} href="/products"
              className="card group p-6 text-center hover:bg-zinc-900 hover:border-zinc-600 transition-all">
              <div className="text-3xl mb-3">{ct.icon}</div>
              <div className="display font-bold text-white text-lg uppercase tracking-wider mb-1">{ct.name}</div>
              <div className="mono text-zinc-600 text-[10px]">{ct.cars}</div>
              <div className="w-0 group-hover:w-full h-px bg-white mt-4 transition-all duration-300"/>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="py-16 bg-zinc-900 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="section-tag">Browse By Type</span>
              <h2 className="section-title">SHOP CATEGORIES</h2>
            </div>
            <Link href="/products" className="hidden sm:flex items-center gap-1 mono text-zinc-500 hover:text-white text-xs uppercase tracking-wider transition-colors">
              All <ChevronRight size={12}/>
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {categories.map(cat=>(
              <Link key={cat.id} href={`/products?category=${cat.id}`}
                className="card group p-5 hover:border-zinc-600 transition-all">
                <div className="text-2xl mb-2">{cat.icon}</div>
                <div className="display font-bold text-white text-sm uppercase tracking-wider leading-tight mb-0.5">{cat.name}</div>
                <div className="mono text-zinc-600 text-[10px] mb-2">{cat.desc}</div>
                <div className="flex items-center justify-between">
                  <span className="mono text-zinc-700 text-[10px]">{cat.count} items</span>
                  <ChevronRight size={12} className="text-zinc-700 group-hover:text-white transition-colors"/>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="section-tag">Hand-picked</span>
            <h2 className="section-title">FEATURED PRODUCTS</h2>
          </div>
          <Link href="/products" className="hidden sm:flex btn-outline text-xs gap-2">
            View All <ArrowRight size={13}/>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {featured.map(p=><ProductCard key={p.id} product={p}/>)}
        </div>
        <div className="text-center mt-6 sm:hidden">
          <Link href="/products" className="btn-outline">View All Products</Link>
        </div>
      </section>

      {/* ── MALWA ALLOYS SPOTLIGHT ── */}
      <section className="py-16 bg-zinc-900 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="section-tag">Our Alloys Showroom</span>
              <h2 className="section-title">MALWA ALLOYS</h2>
              <p className="text-zinc-500 text-sm mt-2 max-w-md">Latest 4-wheeler alloys in every size, finish and PCD. Fitting & balancing at the showroom.</p>
            </div>
            <Link href="/alloys" className="hidden sm:flex btn-white text-xs gap-2">
              All Alloys <ArrowRight size={13}/>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredAlloys.map(a=><AlloyCard key={a.id} alloy={a}/>)}
          </div>
          <div className="text-center mt-6 sm:hidden">
            <Link href="/alloys" className="btn-white">View All Alloys</Link>
          </div>
        </div>
      </section>

      {/* ── PROMO BANNERS ── */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative overflow-hidden card p-10 group hover:border-zinc-600 transition-all">
            <div className="absolute inset-0 grid-overlay opacity-50"/>
            <div className="relative">
              <span className="badge-white mb-4 inline-block">Seat Covers</span>
              <h3 className="display font-black text-white text-4xl uppercase tracking-wider mb-2">Nappa Leather</h3>
              <p className="text-zinc-500 text-sm mb-6">Free fitting · Airbag safe · 5 colour options</p>
              <Link href="/products?category=seat-covers" className="btn-white text-xs">Shop Now</Link>
            </div>
            <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-white transition-all duration-500"/>
          </div>
          <div className="relative overflow-hidden bg-white text-black p-10 group hover:bg-zinc-100 transition-all cut-corner-lg">
            <div>
              <span className="badge-dark mb-4 inline-block bg-zinc-900 text-white">Malwa Alloys</span>
              <h3 className="display font-black text-black text-4xl uppercase tracking-wider mb-2">New Stock In</h3>
              <p className="text-zinc-600 text-sm mb-6">18" concave, 17" spoke & 16" mesh — all brands, all PCD</p>
              <Link href="/alloys" className="btn dark:btn-dark bg-black text-white hover:bg-zinc-800 border-0 btn text-xs">Browse Alloys</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-14 bg-zinc-900 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(({val,label})=>(
            <div key={label}>
              <div className="display font-black text-white text-5xl leading-none mb-1">{val}</div>
              <div className="mono text-zinc-600 text-[10px] uppercase tracking-widest">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <span className="section-tag">Real Customers</span>
          <h2 className="section-title">WHAT THEY SAY</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map(t=>(
            <div key={t.id} className="card p-6 flex flex-col gap-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_,i)=>(
                  <Star key={i} size={13} className={i<t.rating?'text-white fill-white':'text-zinc-800'}/>
                ))}
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3 pt-3 border-t border-zinc-800">
                <div className="w-9 h-9 bg-white flex items-center justify-center display font-black text-black text-sm shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="mono text-zinc-600 text-[10px]">{t.location} · {t.car}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── LOCATION CTA ── */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="relative overflow-hidden card p-10 md:p-14 text-center">
          <div className="absolute inset-0 grid-overlay opacity-30"/>
          <div className="relative">
            <span className="section-tag">Find Us</span>
            <h2 className="display font-black text-white text-5xl md:text-6xl uppercase tracking-wider mb-4 leading-none">
              VISIT OUR<br/>SHOWROOM
            </h2>
            <div className="flex items-center justify-center gap-2 text-zinc-400 text-sm mb-6">
              <MapPin size={15} className="text-white shrink-0"/>
              Ranchi Road, Near Hyundai Showroom — Open 9 AM to 8 PM
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact" className="btn-white">Get Directions</Link>
              <Link href="/products" className="btn-outline">Shop Online</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
