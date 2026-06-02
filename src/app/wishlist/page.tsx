'use client';
import{useWishlist}from'@/context/WishlistContext';
import{useCart}from'@/context/CartContext';
import Image from'next/image';
import Link from'next/link';
import{Heart,ShoppingCart}from'lucide-react';
import toast from'react-hot-toast';

export default function WishlistPage(){
  const{items,toggle}=useWishlist();
  const{add,openCart}=useCart();
  return(
    <div className="min-h-screen">
      <div className="bg-zinc-900 border-b border-zinc-800 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <span className="section-tag">Saved Items</span>
          <h1 className="section-title">WISHLIST</h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-10">
        {items.length===0?(
          <div className="text-center py-20">
            <Heart size={56} className="text-zinc-800 mx-auto mb-4"/>
            <h2 className="display font-black text-white text-3xl uppercase tracking-wider mb-3">Wishlist Empty</h2>
            <p className="mono text-zinc-600 text-xs mb-6">Save products you love.</p>
            <Link href="/products" className="btn-white">Browse Products</Link>
          </div>
        ):(
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {items.map(p=>(
              <div key={p.id} className="card-lift group">
                <div className="relative aspect-[4/3] bg-zinc-900 overflow-hidden">
                  <Link href={`/products/${p.id}`}>
                    <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" unoptimized/>
                  </Link>
                  <button onClick={()=>{toggle(p);toast.success('Removed');}}
                    className="absolute top-3 right-3 w-8 h-8 bg-zinc-950/80 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                    <Heart size={13} className="fill-white"/>
                  </button>
                </div>
                <div className="p-4 bg-zinc-900">
                  <p className="mono text-zinc-600 text-[10px] uppercase mb-1">{p.brand}</p>
                  <Link href={`/products/${p.id}`} className="text-white font-semibold text-sm hover:text-zinc-300 transition-colors block mb-3">{p.name}</Link>
                  <div className="flex items-center justify-between">
                    <span className="display font-black text-white text-xl">₹{p.price.toLocaleString()}</span>
                    <button onClick={()=>{add(p);toast.success('Added to cart!');openCart();}}
                      className="btn-white text-[10px] px-3 py-2 gap-1"><ShoppingCart size={11}/>Add</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
