'use client';
import{useState,useMemo,Suspense}from'react';
import{useSearchParams}from'next/navigation';
import{products,categories}from'@/data/products';
import ProductCard from'@/components/ui/ProductCard';
import{SlidersHorizontal,Grid3X3,List,X}from'lucide-react';

function Content(){
  const sp=useSearchParams();
  const[cat,setCat]=useState(sp.get('category')||'all');
  const[sort,setSort]=useState('featured');
  const[view,setView]=useState<'grid'|'list'>('grid');
  const[maxPrice,setMaxPrice]=useState(50000);
  const[showF,setShowF]=useState(false);
  const[q,setQ]=useState(sp.get('search')||'');

  const filtered=useMemo(()=>{
    let r=[...products];
    if(cat!=='all')r=r.filter(p=>p.category===cat);
    if(q)r=r.filter(p=>p.name.toLowerCase().includes(q.toLowerCase())||p.brand.toLowerCase().includes(q.toLowerCase()));
    r=r.filter(p=>p.price<=maxPrice);
    if(sort==='price-asc')return r.sort((a,b)=>a.price-b.price);
    if(sort==='price-desc')return r.sort((a,b)=>b.price-a.price);
    if(sort==='rating')return r.sort((a,b)=>b.rating-a.rating);
    return r;
  },[cat,q,sort,maxPrice]);

  return(
    <div className="min-h-screen">
      <div className="bg-zinc-900 border-b border-zinc-800 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <span className="section-tag">Our Collection</span>
          <h1 className="section-title">{cat==='all'?'ALL PRODUCTS':categories.find(c=>c.id===cat)?.name.toUpperCase()||'PRODUCTS'}</h1>
          <p className="mono text-zinc-600 text-xs mt-2 uppercase tracking-widest">{filtered.length} products</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-6 scrollbar-hide">
          <button onClick={()=>setCat('all')}
            className={`whitespace-nowrap mono text-[10px] uppercase tracking-[.15em] px-4 py-2 transition-all border ${cat==='all'?'bg-white text-black border-white':'border-zinc-700 text-zinc-500 hover:text-white hover:border-zinc-500'}`}>
            All ({products.length})
          </button>
          {categories.map(c=>(
            <button key={c.id} onClick={()=>setCat(c.id)}
              className={`whitespace-nowrap mono text-[10px] uppercase tracking-[.15em] px-4 py-2 transition-all border flex items-center gap-1.5 ${cat===c.id?'bg-white text-black border-white':'border-zinc-700 text-zinc-500 hover:text-white hover:border-zinc-500'}`}>
              <span>{c.icon}</span>{c.name}
            </button>
          ))}
        </div>

        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="w-52 shrink-0 hidden lg:block">
            <div className="sticky top-24 space-y-7">
              <div>
                <h3 className="mono text-zinc-500 text-[10px] uppercase tracking-widest mb-3">Search</h3>
                <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search…" className="input text-sm"/>
              </div>
              <div>
                <h3 className="mono text-zinc-500 text-[10px] uppercase tracking-widest mb-3">Max Price: ₹{maxPrice.toLocaleString()}</h3>
                <input type="range" min={500} max={50000} value={maxPrice} onChange={e=>setMaxPrice(+e.target.value)}
                  className="w-full accent-white"/>
                <div className="flex justify-between mono text-zinc-700 text-[10px] mt-1">
                  <span>₹500</span><span>₹50,000</span>
                </div>
              </div>
              <div>
                <h3 className="mono text-zinc-500 text-[10px] uppercase tracking-widest mb-3">Categories</h3>
                <div className="space-y-0.5">
                  <button onClick={()=>setCat('all')}
                    className={`w-full text-left px-3 py-2 mono text-[11px] transition-colors ${cat==='all'?'text-white bg-zinc-800':'text-zinc-500 hover:text-white'}`}>
                    All Products ({products.length})
                  </button>
                  {categories.map(c=>(
                    <button key={c.id} onClick={()=>setCat(c.id)}
                      className={`w-full text-left px-3 py-2 mono text-[11px] transition-colors flex justify-between ${cat===c.id?'text-white bg-zinc-800':'text-zinc-500 hover:text-white'}`}>
                      <span>{c.icon} {c.name}</span>
                      <span className="text-zinc-700">{c.count}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
              <button onClick={()=>setShowF(v=>!v)} className="lg:hidden flex items-center gap-2 border border-zinc-700 px-3 py-2 text-zinc-400 hover:text-white mono text-[10px] uppercase tracking-wider transition-colors">
                <SlidersHorizontal size={13}/> Filters
              </button>
              <div className="flex items-center gap-2 ml-auto">
                <select value={sort} onChange={e=>setSort(e.target.value)} className="input text-xs py-2 pr-6 w-auto">
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price ↑</option>
                  <option value="price-desc">Price ↓</option>
                  <option value="rating">Top Rated</option>
                </select>
                <div className="flex border border-zinc-700">
                  <button onClick={()=>setView('grid')} className={`p-2 transition-colors ${view==='grid'?'bg-white text-black':'text-zinc-500 hover:text-white'}`}><Grid3X3 size={14}/></button>
                  <button onClick={()=>setView('list')} className={`p-2 transition-colors ${view==='list'?'bg-white text-black':'text-zinc-500 hover:text-white'}`}><List size={14}/></button>
                </div>
              </div>
            </div>

            {/* Mobile filters */}
            {showF&&(
              <div className="lg:hidden mb-5 p-4 bg-zinc-900 border border-zinc-800 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="mono text-zinc-400 text-xs uppercase">Filters</span>
                  <button onClick={()=>setShowF(false)} className="text-zinc-500"><X size={14}/></button>
                </div>
                <div>
                  <label className="mono text-zinc-500 text-[10px] uppercase block mb-2">Max Price: ₹{maxPrice.toLocaleString()}</label>
                  <input type="range" min={500} max={50000} value={maxPrice} onChange={e=>setMaxPrice(+e.target.value)} className="w-full accent-white"/>
                </div>
              </div>
            )}

            {filtered.length===0?(
              <div className="text-center py-20 text-zinc-600">
                <p className="text-4xl mb-4">🔍</p>
                <p className="display font-black text-white text-3xl uppercase tracking-wider mb-2">No Products Found</p>
                <p className="mono text-xs">Try adjusting filters</p>
              </div>
            ):view==='grid'?(
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {filtered.map(p=><ProductCard key={p.id} product={p}/>)}
              </div>
            ):(
              <div className="space-y-3">
                {filtered.map(p=><ProductCard key={p.id} product={p} view="list"/>)}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage(){
  return(
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center mono text-zinc-600 text-xs uppercase tracking-widest">Loading…</div>}>
      <Content/>
    </Suspense>
  );
}
