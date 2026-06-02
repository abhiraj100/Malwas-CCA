'use client';
import{useState,useEffect}from'react';
import Link from'next/link';
import{ShoppingCart,Heart,Menu,X,Search,Phone,ChevronDown,MapPin}from'lucide-react';
import{useCart}from'@/context/CartContext';
import{useWishlist}from'@/context/WishlistContext';

const links=[
  {href:'/',label:'Home'},
  {href:'/products',label:'Shop',sub:[
    {href:'/products?category=seat-covers',  label:'Seat Covers'},
    {href:'/products?category=exterior',     label:'Exterior'},
    {href:'/products?category=interior',     label:'Interior'},
    {href:'/products?category=audio',        label:'Car Audio'},
    {href:'/products?category=lighting',     label:'LED Lighting'},
    {href:'/products?category=modification', label:'Car Modification'},
    {href:'/products?category=safety',       label:'Safety'},
    {href:'/products?category=cleaning',     label:'Car Care'},
  ]},
  {href:'/alloys',  label:'Malwa Alloys'},
  {href:'/about',   label:'About'},
  {href:'/contact', label:'Contact'},
];

export default function Navbar(){
  const[scrolled,setScrolled]=useState(false);
  const[mob,setMob]=useState(false);
  const[search,setSearch]=useState(false);
  const[q,setQ]=useState('');
  const[drop,setDrop]=useState<string|null>(null);
  const{count,toggle}=useCart();
  const{items:wl}=useWishlist();

  useEffect(()=>{
    const fn=()=>setScrolled(window.scrollY>16);
    window.addEventListener('scroll',fn);return()=>window.removeEventListener('scroll',fn);
  },[]);

  return(
    <>
      {/* Ticker tape */}
      <div className="bg-white text-black text-[10px] mono tracking-[.18em] overflow-hidden py-1.5">
        <div className="ticker-inner whitespace-nowrap select-none">
          {Array(4).fill('  ◆  FREE FITTING ON ALL SEAT COVERS  ◆  VISIT: RANCHI ROAD, NEAR HYUNDAI SHOWROOM  ◆  MALWA ALLOYS — LATEST 4-WHEELER ALLOYS  ◆  CALL: +91 94xxx xxxxx  ◆  ALL CAR TYPES SERVICED  ').join('')}
        </div>
      </div>

      <nav className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled?'bg-zinc-950/95 backdrop-blur-md border-zinc-800':'bg-zinc-950 border-zinc-800/50'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20 gap-4">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0 group">
              <div className="w-11 h-11 bg-white flex items-center justify-center shrink-0
                              group-hover:bg-zinc-200 transition-colors cut-corner">
                <span className="display font-black text-black text-lg leading-none">M</span>
              </div>
              <div className="hidden sm:block">
                <div className="display font-black text-white text-2xl tracking-wider leading-none uppercase">Malwa CCA</div>
                <div className="mono text-[9px] text-zinc-500 tracking-[.3em] uppercase">Car Care & Accessories</div>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-7">
              {links.map(l=>(
                <div key={l.href} className="relative"
                  onMouseEnter={()=>l.sub&&setDrop(l.label)}
                  onMouseLeave={()=>setDrop(null)}>
                  <Link href={l.href} className={`nav-link flex items-center gap-1 ${drop===l.label?'text-white':''}`}>
                    {l.label}
                    {l.sub&&<ChevronDown size={12} className={`transition-transform ${drop===l.label?'rotate-180':''}`}/>}
                  </Link>
                  {l.sub&&drop===l.label&&(
                    <div className="absolute top-full left-0 mt-3 w-52 bg-zinc-950 border border-zinc-800 shadow-2xl shadow-black z-50">
                      {l.sub.map(s=>(
                        <Link key={s.href} href={s.href}
                          className="block px-4 py-2.5 mono text-[11px] text-zinc-500 hover:text-white hover:bg-zinc-900
                                     uppercase tracking-[.15em] transition-all border-b border-zinc-900 last:border-0">
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center gap-2">
              <button onClick={()=>setSearch(v=>!v)} className="p-2 text-zinc-500 hover:text-white transition-colors hidden sm:block">
                <Search size={18}/>
              </button>
              <Link href="/wishlist" className="relative p-2 text-zinc-500 hover:text-white transition-colors">
                <Heart size={18}/>
                {wl.length>0&&<span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-white text-black text-[9px] font-black flex items-center justify-center rounded-full">{wl.length}</span>}
              </Link>
              <button onClick={toggle} className="relative p-2 text-zinc-500 hover:text-white transition-colors">
                <ShoppingCart size={18}/>
                {count>0&&<span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-white text-black text-[9px] font-black flex items-center justify-center rounded-full">{count}</span>}
              </button>
              <button onClick={()=>setMob(v=>!v)} className="lg:hidden p-2 text-zinc-500 hover:text-white transition-colors">
                {mob?<X size={22}/>:<Menu size={22}/>}
              </button>
            </div>
          </div>
        </div>

        {/* Search bar */}
        {search&&(
          <div className="border-t border-zinc-800 bg-zinc-900">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3">
              <Search size={16} className="text-zinc-600 shrink-0"/>
              <input type="text" value={q} onChange={e=>setQ(e.target.value)}
                placeholder="Search seat covers, alloys, accessories…"
                className="flex-1 bg-transparent text-white placeholder-zinc-600 outline-none mono text-sm"
                autoFocus
                onKeyDown={e=>{
                  if(e.key==='Enter'&&q.trim())window.location.href=`/products?search=${encodeURIComponent(q)}`;
                  if(e.key==='Escape')setSearch(false);
                }}/>
              <button onClick={()=>setSearch(false)} className="text-zinc-600 hover:text-white"><X size={16}/></button>
            </div>
          </div>
        )}

        {/* Mobile menu */}
        {mob&&(
          <div className="lg:hidden border-t border-zinc-800 bg-zinc-950">
            <div className="px-4 py-4 space-y-0.5">
              {links.map(l=>(
                <div key={l.href}>
                  <Link href={l.href} onClick={()=>setMob(false)}
                    className="block py-3 mono text-[11px] uppercase tracking-[.2em] text-zinc-400
                               hover:text-white border-b border-zinc-900 transition-colors">
                    {l.label}
                  </Link>
                  {l.sub&&(
                    <div className="pl-4 py-1 grid grid-cols-2 gap-x-4">
                      {l.sub.map(s=>(
                        <Link key={s.href} href={s.href} onClick={()=>setMob(false)}
                          className="py-1.5 mono text-[10px] uppercase tracking-[.1em] text-zinc-600 hover:text-zinc-300 transition-colors">
                          → {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 flex items-center gap-2 text-zinc-600">
                <MapPin size={13}/><span className="mono text-[10px]">Ranchi Road, Near Hyundai Showroom</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-600">
                <Phone size={13}/><a href="tel:+919400000000" className="mono text-[10px]">+91 94xxx xxxxx</a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
