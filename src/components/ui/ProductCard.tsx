'use client';
import Image from'next/image';
import Link from'next/link';
import{Heart,ShoppingCart,Star,Eye}from'lucide-react';
import{Product}from'@/data/products';
import{useCart}from'@/context/CartContext';
import{useWishlist}from'@/context/WishlistContext';
import toast from'react-hot-toast';

const badgeStyle:Record<string,string>={
  'Best Seller':'bg-white text-black',
  'Hot Deal':   'bg-zinc-200 text-black',
  'Premium':    'bg-zinc-800 text-zinc-200 border border-zinc-600',
  'Top Rated':  'bg-white text-black',
  'New Arrival':'bg-zinc-900 text-white border border-zinc-600',
  'Value Pack': 'bg-zinc-800 text-zinc-300',
};

interface Props{ product:Product; view?:'grid'|'list' }

export default function ProductCard({product,view='grid'}:Props){
  const{add,openCart}=useCart();
  const{toggle,has}=useWishlist();
  const disc=product.originalPrice?Math.round((product.originalPrice-product.price)/product.originalPrice*100):0;

  const handleAdd=(e:React.MouseEvent)=>{
    e.preventDefault();add(product);
    toast.success(`Added to cart`);openCart();
  };
  const handleWL=(e:React.MouseEvent)=>{
    e.preventDefault();toggle(product);
    toast.success(has(product.id)?'Removed from wishlist':'Saved to wishlist');
  };

  if(view==='list'){
    return(
      <Link href={`/products/${product.id}`} className="flex gap-4 card p-4 group hover:shadow-lg transition-all">
        <div className="relative w-28 h-20 shrink-0 bg-zinc-800 overflow-hidden">
          <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" unoptimized/>
          {product.badge&&<span className={`absolute top-1.5 left-1.5 badge text-[9px] ${badgeStyle[product.badge]||'bg-zinc-700 text-white'}`}>{product.badge}</span>}
        </div>
        <div className="flex-1">
          <p className="mono text-zinc-600 text-[10px] uppercase tracking-widest mb-0.5">{product.brand}</p>
          <h3 className="text-white font-semibold text-sm group-hover:text-zinc-300 transition-colors">{product.name}</h3>
          <div className="flex items-center gap-1 mt-1">
            {[...Array(5)].map((_,i)=><Star key={i} size={11} className={i<Math.floor(product.rating)?'text-white fill-white':'text-zinc-700'}/>)}
            <span className="mono text-zinc-600 text-[10px] ml-1">({product.reviews})</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-2">
              <span className="price">₹{product.price.toLocaleString()}</span>
              {product.originalPrice&&<span className="text-zinc-600 text-xs line-through">₹{product.originalPrice.toLocaleString()}</span>}
            </div>
            <button onClick={handleAdd} className="btn-white text-[10px] px-3 py-1.5">Add</button>
          </div>
        </div>
      </Link>
    );
  }

  return(
    <Link href={`/products/${product.id}`} className="card-lift group relative overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative aspect-[4/3] bg-zinc-900 overflow-hidden">
        <Image src={product.image} alt={product.name} fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
          unoptimized/>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
          <button onClick={handleAdd}
            className="w-10 h-10 bg-white hover:bg-zinc-200 flex items-center justify-center text-black
                       transition-all translate-y-3 group-hover:translate-y-0 duration-300">
            <ShoppingCart size={15}/>
          </button>
          <Link href={`/products/${product.id}`} onClick={e=>e.stopPropagation()}
            className="w-10 h-10 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white
                       transition-all translate-y-3 group-hover:translate-y-0 duration-300 delay-75">
            <Eye size={15}/>
          </Link>
        </div>

        {/* Badges */}
        {product.badge&&(
          <span className={`absolute top-3 left-3 badge ${badgeStyle[product.badge]||'bg-zinc-700 text-white'}`}>
            {product.badge}
          </span>
        )}
        {disc>0&&(
          <span className="absolute top-3 right-3 badge bg-zinc-950/90 text-zinc-300 border border-zinc-700">
            -{disc}%
          </span>
        )}

        {/* Wishlist */}
        <button onClick={handleWL}
          className="absolute bottom-3 right-3 w-7 h-7 bg-zinc-950/80 flex items-center justify-center
                     text-zinc-500 hover:text-white transition-colors opacity-0 group-hover:opacity-100">
          <Heart size={13} className={has(product.id)?'fill-white text-white':''}/>
        </button>
      </div>

      {/* Info */}
      <div className="p-4 flex-1 flex flex-col bg-zinc-900">
        <p className="mono text-zinc-600 text-[10px] uppercase tracking-widest mb-0.5">{product.brand}</p>
        <h3 className="text-zinc-200 font-semibold text-sm leading-snug group-hover:text-white transition-colors flex-1 mb-2">{product.name}</h3>
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_,i)=><Star key={i} size={10} className={i<Math.floor(product.rating)?'text-white fill-white':'text-zinc-800'}/>)}
          <span className="mono text-zinc-700 text-[10px] ml-1">({product.reviews})</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="price">₹{product.price.toLocaleString()}</div>
            {product.originalPrice&&<div className="text-zinc-600 text-xs line-through">₹{product.originalPrice.toLocaleString()}</div>}
          </div>
          <button onClick={handleAdd}
            className="flex items-center gap-1 border border-zinc-700 hover:bg-white hover:text-black hover:border-white
                       text-zinc-400 px-3 py-1.5 mono text-[10px] uppercase tracking-wider transition-all duration-150">
            + Add
          </button>
        </div>
      </div>
    </Link>
  );
}
