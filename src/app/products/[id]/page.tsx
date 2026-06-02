'use client';
import{use,useState}from'react';
import{products}from'@/data/products';
import Image from'next/image';
import Link from'next/link';
import{Star,ShoppingCart,Heart,Share2,Shield,Truck,RefreshCw,Check,ArrowLeft}from'lucide-react';
import{useCart}from'@/context/CartContext';
import{useWishlist}from'@/context/WishlistContext';
import ProductCard from'@/components/ui/ProductCard';
import toast from'react-hot-toast';
import{notFound}from'next/navigation';

export default function ProductDetail({params}:{params:Promise<{id:string}>}){
  const{id}=use(params);
  const product=products.find(p=>p.id===parseInt(id));
  if(!product)notFound();

  const[qty,setQty]=useState(1);
  const[tab,setTab]=useState('desc');
  const{add,openCart}=useCart();
  const{toggle,has}=useWishlist();
  const related=products.filter(p=>p.category===product.category&&p.id!==product.id).slice(0,4);
  const disc=product.originalPrice?Math.round((product.originalPrice-product.price)/product.originalPrice*100):0;

  const handleAdd=()=>{
    for(let i=0;i<qty;i++)add(product);
    toast.success('Added to cart!');openCart();
  };

  return(
    <div className="min-h-screen">
      <div className="bg-zinc-900 border-b border-zinc-800 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 mono text-zinc-600 text-[10px] uppercase tracking-widest">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <span>/</span>
            <span className="text-zinc-300">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <div>
            <div className="relative aspect-[4/3] bg-zinc-900 border border-zinc-800 overflow-hidden">
              <Image src={product.image} alt={product.name} fill className="object-cover grayscale-[30%]" unoptimized priority/>
              {product.badge&&<span className="absolute top-4 left-4 badge bg-white text-black">{product.badge}</span>}
              {disc>0&&<span className="absolute top-4 right-4 badge bg-zinc-950/90 text-white border border-zinc-700">-{disc}% OFF</span>}
            </div>
          </div>

          {/* Info */}
          <div>
            <p className="mono text-zinc-600 text-[10px] uppercase tracking-widest mb-2">{product.brand}</p>
            <h1 className="display font-black text-white text-4xl md:text-5xl uppercase tracking-wider leading-tight mb-3">{product.name}</h1>

            <div className="flex items-center gap-3 mb-5">
              <div className="flex gap-1">
                {[...Array(5)].map((_,i)=><Star key={i} size={14} className={i<Math.floor(product.rating)?'text-white fill-white':'text-zinc-700'}/>)}
              </div>
              <span className="mono text-zinc-500 text-[11px]">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <div className="flex items-end gap-3 mb-6 pb-6 border-b border-zinc-800">
              <span className="display font-black text-white text-5xl">₹{product.price.toLocaleString()}</span>
              {product.originalPrice&&(
                <>
                  <span className="text-zinc-600 text-xl line-through mb-1">₹{product.originalPrice.toLocaleString()}</span>
                  <span className="badge bg-zinc-800 text-zinc-300 border border-zinc-700 mb-1">Save ₹{(product.originalPrice-product.price).toLocaleString()}</span>
                </>
              )}
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-2 mb-6">
              {product.features.map(f=>(
                <div key={f} className="flex items-center gap-2 mono text-[11px] text-zinc-400">
                  <Check size={12} className="text-white shrink-0"/>{f}
                </div>
              ))}
            </div>

            {/* Car types */}
            {product.carTypes&&(
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="mono text-zinc-600 text-[10px] uppercase tracking-wider self-center">Fits:</span>
                {product.carTypes.map(c=><span key={c} className="badge-border">{c}</span>)}
              </div>
            )}

            {/* Qty + CTA */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center border border-zinc-700">
                <button onClick={()=>setQty(Math.max(1,qty-1))} className="w-10 h-12 flex items-center justify-center text-zinc-500 hover:text-white transition-colors">−</button>
                <span className="w-10 h-12 flex items-center justify-center mono text-white">{qty}</span>
                <button onClick={()=>setQty(qty+1)} className="w-10 h-12 flex items-center justify-center text-zinc-500 hover:text-white transition-colors">+</button>
              </div>
              <button onClick={handleAdd} className="flex-1 btn-white justify-center h-12 gap-2">
                <ShoppingCart size={15}/> Add to Cart
              </button>
            </div>

            <div className="flex gap-3 mb-8">
              <button
                onClick={()=>{toggle(product);toast.success(has(product.id)?'Removed':'Wishlisted!');}}
                className={`flex-1 btn-outline justify-center gap-2 ${has(product.id)?'border-white text-white':''}`}>
                <Heart size={15} className={has(product.id)?'fill-white':''}/> {has(product.id)?'Wishlisted':'Wishlist'}
              </button>
              <button onClick={()=>{navigator.clipboard.writeText(window.location.href);toast.success('Link copied');}}
                className="btn-outline px-4 gap-2"><Share2 size={15}/></button>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {[{icon:Truck,t:'Free Fitting'},{icon:Shield,t:'1 Yr Warranty'},{icon:RefreshCw,t:'7-Day Return'}].map(({icon:Icon,t})=>(
                <div key={t} className="flex flex-col items-center gap-1.5 p-3 border border-zinc-800 text-center">
                  <Icon size={14} className="text-white"/><span className="mono text-zinc-500 text-[10px]">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-14">
          <div className="flex gap-0 border-b border-zinc-800">
            {['desc','features','reviews'].map(t=>(
              <button key={t} onClick={()=>setTab(t)}
                className={`px-5 py-3 mono text-[11px] uppercase tracking-[.15em] transition-colors ${tab===t?'text-white border-b-2 border-white':'text-zinc-600 hover:text-white'}`}>
                {t}
              </button>
            ))}
          </div>
          <div className="py-8">
            {tab==='desc'&&<p className="text-zinc-400 max-w-2xl leading-relaxed text-sm">{product.description}</p>}
            {tab==='features'&&(
              <ul className="space-y-3 max-w-md">
                {product.features.map(f=>(
                  <li key={f} className="flex items-center gap-3 text-zinc-300 text-sm">
                    <span className="w-5 h-5 border border-zinc-700 flex items-center justify-center shrink-0"><Check size={11} className="text-white"/></span>
                    {f}
                  </li>
                ))}
              </ul>
            )}
            {tab==='reviews'&&(
              <div className="flex items-center gap-5 p-5 border border-zinc-800 max-w-xs">
                <div className="display font-black text-white text-6xl">{product.rating}</div>
                <div>
                  <div className="flex gap-1 mb-1">{[...Array(5)].map((_,i)=><Star key={i} size={16} className={i<Math.floor(product.rating)?'text-white fill-white':'text-zinc-700'}/>)}</div>
                  <p className="mono text-zinc-500 text-[10px]">{product.reviews} verified reviews</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related */}
        {related.length>0&&(
          <div className="mt-12">
            <span className="section-tag">More Like This</span>
            <h2 className="section-title text-3xl mb-6">RELATED PRODUCTS</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {related.map(p=><ProductCard key={p.id} product={p}/>)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
