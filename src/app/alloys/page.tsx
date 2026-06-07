'use client';
import{useState}from'react';
import{alloys}from'@/data/products';
import AlloyCard from'@/components/ui/AlloyCard';
import Link from'next/link';
import Image from'next/image';
import{MapPin,Phone,CheckCircle}from'lucide-react';

const sizes=['All','16"','17"','18"'];
const finishes=['All','Gloss Black Machined','Matte Gunmetal','Silver with Chrome Lip','Full Gloss Black','Hyper Silver','Bronze Tinted'];

export default function AlloysPage(){
  const[size,setSize]=useState('All');
  const[finish,setFinish]=useState('All');

  const filtered=alloys.filter(a=>{
    if(size!=='All'&&a.size!==size)return false;
    if(finish!=='All'&&a.finish!==finish)return false;
    return true;
  });

  return(
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-72 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80"
          alt="Alloys" fill className="object-cover grayscale opacity-40" unoptimized/>
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent"/>
        <div className="absolute inset-0 grid-overlay opacity-30"/>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4">
            <span className="section-tag">Our Other Showroom</span>
            <h1 className="display font-black text-white uppercase leading-none"
              style={{fontSize:'clamp(3rem,8vw,6rem)'}}>
              Malwas ALLOYS
            </h1>
            <p className="text-zinc-400 text-sm mt-2 max-w-sm">Latest 4-wheeler alloy wheels in all sizes, finishes and PCD patterns. Fitting & balancing on-site.</p>
          </div>
        </div>
      </section>

      {/* USP strip */}
      <div className="bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-wrap gap-6">
          {['Fitting Included','Balance & Alignment','All PCD Patterns','Exchange Old Alloys','EMI Available'].map(u=>(
            <div key={u} className="flex items-center gap-2">
              <CheckCircle size={14} className="shrink-0"/>
              <span className="mono text-[11px] uppercase tracking-wider">{u}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div>
            <p className="mono text-zinc-600 text-[10px] uppercase tracking-widest mb-2">Size</p>
            <div className="flex gap-2">
              {sizes.map(s=>(
                <button key={s} onClick={()=>setSize(s)}
                  className={`mono text-[10px] uppercase tracking-wider px-4 py-2 border transition-all ${size===s?'bg-white text-black border-white':'border-zinc-700 text-zinc-500 hover:text-white hover:border-zinc-500'}`}>
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="mono text-zinc-600 text-[10px] uppercase tracking-widest mb-2">Finish</p>
            <div className="flex flex-wrap gap-2">
              {finishes.map(f=>(
                <button key={f} onClick={()=>setFinish(f)}
                  className={`mono text-[10px] uppercase tracking-wider px-3 py-2 border transition-all ${finish===f?'bg-white text-black border-white':'border-zinc-700 text-zinc-500 hover:text-white hover:border-zinc-500'}`}>
                  {f==='All'?'All Finishes':f}
                </button>
              ))}
            </div>
          </div>
        </div>

        <p className="mono text-zinc-600 text-[10px] uppercase tracking-widest mb-5">{filtered.length} alloys found</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(a=><AlloyCard key={a.id} alloy={a}/>)}
          {filtered.length===0&&(
            <div className="sm:col-span-2 lg:col-span-3 text-center py-16 text-zinc-600">
              <p className="text-4xl mb-3">⚙️</p>
              <p className="display font-black text-white text-3xl uppercase tracking-wider mb-2">No Alloys Found</p>
              <p className="mono text-xs">Try different filters</p>
            </div>
          )}
        </div>

        {/* Fitment guide */}
        <div className="mt-16 card p-8 md:p-10">
          <span className="section-tag">Don't Know Your PCD?</span>
          <h2 className="display font-black text-white text-3xl uppercase tracking-wider mb-4">FITMENT GUIDE</h2>
          <p className="text-zinc-400 text-sm mb-6 max-w-xl">Not sure which alloy fits your car? Visit our showroom with your car, or call us — our experts will find the perfect match.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {[
              {brand:'Hyundai / Kia',pcd:'5x114.3 / 4x100'},
              {brand:'Maruti Suzuki',pcd:'4x100'},
              {brand:'Toyota / Honda',pcd:'5x114.3 / 4x100'},
              {brand:'Tata / Mahindra',pcd:'5x120 / 5x127'},
            ].map(({brand,pcd})=>(
              <div key={brand} className="bg-zinc-900 border border-zinc-800 p-4">
                <div className="text-white font-semibold text-sm">{brand}</div>
                <div className="mono text-zinc-500 text-[10px] mt-1">{pcd}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn-white text-xs">Ask Our Expert</Link>
            <a href="tel:+919400000000" className="btn-outline text-xs gap-2"><Phone size={12}/> Call Now</a>
          </div>
        </div>

        {/* Visit card */}
        <div className="mt-8 bg-white text-black p-8 cut-corner-lg">
          <div className="display font-black text-3xl uppercase tracking-wider mb-2">Visit Malwas Alloys</div>
          <div className="flex items-start gap-2 text-zinc-700 text-sm mb-1">
            <MapPin size={15} className="mt-0.5 shrink-0"/><span>Ranchi Road, Near Hyundai Showroom — same complex as Malwas CCA</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-700 text-sm">
            <Phone size={14} className="shrink-0"/><a href="tel:+919400000000">+91 9798646302</a>
          </div>
        </div>
      </div>
    </div>
  );
}
