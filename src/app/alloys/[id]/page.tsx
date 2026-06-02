'use client';
import{use}from'react';
import{alloys}from'@/data/products';
import Image from'next/image';
import Link from'next/link';
import{Star,ShoppingCart,Check,ArrowLeft}from'lucide-react';
import{useCart}from'@/context/CartContext';
import toast from'react-hot-toast';
import{notFound}from'next/navigation';
import AlloyCard from'@/components/ui/AlloyCard';

export default function AlloyDetail({params}:{params:Promise<{id:string}>}){
  const{id}=use(params);
  const alloy=alloys.find(a=>a.id===parseInt(id));
  if(!alloy)notFound();

  const{add,openCart}=useCart();
  const related=alloys.filter(a=>a.id!==alloy.id).slice(0,3);
  const disc=alloy.originalPrice?Math.round((alloy.originalPrice-alloy.price)/alloy.originalPrice*100):0;

  const handleAdd=()=>{
    add({
      id:alloy.id+1000,name:alloy.name,category:'alloys',
      price:alloy.price,originalPrice:alloy.originalPrice,
      rating:alloy.rating,reviews:alloy.reviews,image:alloy.image,
      badge:alloy.badge,description:alloy.description,
      features:[alloy.size,alloy.pcd,alloy.finish],
      inStock:true,brand:alloy.brand,
    });
    toast.success('Added to cart!');openCart();
  };

  return(
    <div className="min-h-screen">
      <div className="bg-zinc-900 border-b border-zinc-800 py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-2 mono text-zinc-600 text-[10px] uppercase tracking-widest">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/alloys" className="hover:text-white transition-colors">Alloys</Link>
          <span>/</span>
          <span className="text-zinc-300">{alloy.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative aspect-square bg-zinc-900 border border-zinc-800 overflow-hidden">
            <Image src={alloy.image} alt={alloy.name} fill className="object-cover grayscale-[20%]" unoptimized priority/>
            {alloy.badge&&<span className="absolute top-4 left-4 badge bg-white text-black">{alloy.badge}</span>}
            {disc>0&&<span className="absolute top-4 right-4 badge bg-zinc-950/90 text-white border border-zinc-700">-{disc}%</span>}
          </div>
          <div>
            <p className="mono text-zinc-600 text-[10px] uppercase tracking-widest mb-2">{alloy.brand}</p>
            <h1 className="display font-black text-white text-4xl md:text-5xl uppercase tracking-wider leading-tight mb-3">{alloy.name}</h1>
            <div className="flex items-center gap-3 mb-5">
              <div className="flex gap-1">{[...Array(5)].map((_,i)=><Star key={i} size={14} className={i<Math.floor(alloy.rating)?'text-white fill-white':'text-zinc-700'}/>)}</div>
              <span className="mono text-zinc-500 text-[11px]">{alloy.rating} ({alloy.reviews} reviews)</span>
            </div>
            <div className="flex gap-2 mb-5 flex-wrap">
              <span className="badge-white">{alloy.size}</span>
              <span className="badge-border">{alloy.pcd}</span>
              <span className="badge-dark">{alloy.finish}</span>
            </div>
            <div className="flex items-end gap-3 mb-6 pb-6 border-b border-zinc-800">
              <span className="display font-black text-white text-5xl">₹{alloy.price.toLocaleString()}</span>
              {alloy.originalPrice&&(
                <span className="text-zinc-600 text-xl line-through mb-1">₹{alloy.originalPrice.toLocaleString()}</span>
              )}
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-5">{alloy.description}</p>
            <div className="mb-5">
              <p className="mono text-zinc-500 text-[10px] uppercase tracking-widest mb-2">Fits</p>
              <div className="flex flex-wrap gap-2">
                {alloy.fitment.map(f=><span key={f} className="badge-border">{f}</span>)}
              </div>
            </div>
            <button onClick={handleAdd} className="btn-white w-full justify-center mb-3 gap-2">
              <ShoppingCart size={15}/> Add to Cart — Set of 4
            </button>
            <Link href="/contact" className="btn-outline w-full justify-center text-xs">Ask About Fitment</Link>
          </div>
        </div>

        {related.length>0&&(
          <div className="mt-16">
            <span className="section-tag">More Alloys</span>
            <h2 className="section-title text-3xl mb-6">YOU MAY ALSO LIKE</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map(a=><AlloyCard key={a.id} alloy={a}/>)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
