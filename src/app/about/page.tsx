import Image from'next/image';
import Link from'next/link';
import{Target,Heart,Zap,MapPin}from'lucide-react';

const team=[
  {name:'Malwas (Founder)',   role:'Owner & Head of Operations', av:'MW', bio:'8+ years in car accessories & modification'},
  {name:'Rahul Singh',       role:'Sr. Fitment Technician',     av:'RS', bio:'Expert in seat cover & modification fitment'},
  {name:'Ankit Kumar',       role:'Alloys Specialist',          av:'AK', bio:'Alloy wheel expert — fitting & balancing'},
  {name:'Pooja Devi',        role:'Customer Relations',         av:'PD', bio:'Ensuring every customer leaves happy'},
];

const services=[
  {icon:'🪑',t:'Premium Seat Covers',d:'Nappa leather, PU leather, fabric — free fitting'},
  {icon:'🎛️',t:'Interior Makeover',  d:'Mats, steering covers, ambient lighting'},
  {icon:'🚗',t:'Exterior Styling',   d:'Body kits, spoilers, chrome trim'},
  {icon:'⚙️',t:'Car Modification',   d:'Full wraps, LED upgrades, custom builds'},
  {icon:'⚙️',t:'Alloy Fitment',      d:'All PCD, all brands — fitting & balancing'},
  {icon:'🔊',t:'Car Audio',          d:'Android stereo, speakers, subwoofers'},
];

export default function AboutPage(){
  return(
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-72 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1400&q=80"
          alt="About" fill className="object-cover grayscale opacity-35" unoptimized/>
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent"/>
        <div className="absolute inset-0 grid-overlay opacity-30"/>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4">
            <span className="section-tag">Our Story</span>
            <h1 className="display font-black text-white uppercase leading-none" style={{fontSize:'clamp(3rem,8vw,6rem)'}}>ABOUT US</h1>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="section-tag">Who We Are</span>
            <h2 className="display font-black text-white text-4xl md:text-5xl uppercase tracking-wider mb-6 leading-none">Malwas CCA<br/>EST. 2016</h2>
            <p className="text-zinc-400 leading-relaxed mb-4 text-sm">
              Malwas Car Care & Accessories started with a single vision — give every car owner access to premium accessories at honest prices. Located on Ranchi Road, right next to the Hyundai Showroom, we have served thousands of customers across Jharkhand.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-4 text-sm">
              From premium Nappa leather seat covers to full car modification, we do it all. Our sister showroom <strong className="text-white">Malwas Alloys</strong> carries the latest 4-wheeler alloy wheels in every size and finish — with on-site fitting and balancing.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-6 text-sm">
              All car types are welcome — hatchback, sedan, SUV, MUV or luxury. Our experienced team ensures every fitment is perfect.
            </p>
            <div className="flex gap-3">
              <Link href="/products" className="btn-white">Shop Now</Link>
              <Link href="/contact" className="btn-outline">Get Directions</Link>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-square bg-zinc-900 border border-zinc-800 overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80"
                alt="Showroom" fill className="object-cover opacity-60 grayscale" unoptimized/>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white text-black p-5 cut-corner">
              <div className="display font-black text-4xl">8+</div>
              <div className="mono text-[10px] uppercase tracking-widest">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-zinc-900 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="section-tag">What We Do</span>
            <h2 className="section-title">OUR SERVICES</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(({icon,t,d})=>(
              <div key={t} className="card p-6 hover:border-zinc-600 transition-all group">
                <div className="text-2xl mb-3">{icon}</div>
                <h3 className="display font-bold text-white text-lg uppercase tracking-wider mb-1">{t}</h3>
                <p className="text-zinc-500 text-sm">{d}</p>
                <div className="w-0 group-hover:w-full h-px bg-white mt-4 transition-all duration-300"/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <span className="section-tag">What Drives Us</span>
          <h2 className="section-title">OUR VALUES</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {icon:Target,t:'Quality First',    d:'We stock only genuine, tested products from certified brands.'},
            {icon:Heart, t:'Customer Love',    d:'Your satisfaction is our measure of success — always.'},
            {icon:Zap,   t:'Expert Fitment',   d:'Our technicians ensure every accessory is fitted to perfection.'},
          ].map(({icon:Icon,t,d})=>(
            <div key={t} className="card p-8 text-center hover:border-zinc-600 transition-all group">
              <div className="w-12 h-12 border border-zinc-700 flex items-center justify-center mx-auto mb-4 group-hover:border-white transition-colors">
                <Icon size={20} className="text-white"/>
              </div>
              <h3 className="display font-bold text-white text-xl uppercase tracking-wider mb-2">{t}</h3>
              <p className="text-zinc-500 text-sm">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-zinc-900 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="section-tag">The People</span>
            <h2 className="section-title">OUR TEAM</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {team.map(m=>(
              <div key={m.name} className="card p-6 text-center group hover:border-zinc-600 transition-all">
                <div className="w-14 h-14 bg-white flex items-center justify-center mx-auto mb-4 display font-black text-black text-lg cut-corner">
                  {m.av}
                </div>
                <h3 className="text-white font-semibold text-sm">{m.name}</h3>
                <p className="mono text-zinc-500 text-[10px] uppercase tracking-wider mt-1">{m.role}</p>
                <p className="text-zinc-600 text-xs mt-2">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="card p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 grid-overlay opacity-30"/>
          <div className="relative">
            <span className="section-tag">Visit Us</span>
            <h2 className="display font-black text-white text-5xl uppercase tracking-wider mb-4 leading-none">FIND OUR SHOWROOM</h2>
            <div className="flex items-center justify-center gap-2 text-zinc-400 text-sm mb-6">
              <MapPin size={14} className="text-white shrink-0"/>
              Ranchi Road, Near Hyundai Showroom — Open Mon–Sat 9 AM to 8 PM
            </div>
            <Link href="/contact" className="btn-white">Get Directions</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
