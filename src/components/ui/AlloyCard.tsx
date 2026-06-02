'use client';
import Image from'next/image';
import Link from'next/link';
import{ShoppingCart,Star}from'lucide-react';
import{Alloy}from'@/data/products';
import{useCart}from'@/context/CartContext';
import toast from'react-hot-toast';

export default function AlloyCard({alloy}:{alloy:Alloy}){
  const{add,openCart}=useCart();
  const disc=alloy.originalPrice?Math.round((alloy.originalPrice-alloy.price)/alloy.originalPrice*100):0;

  const handleAdd=(e:React.MouseEvent)=>{
    e.preventDefault();
    add({
      id:alloy.id+1000,name:alloy.name,category:'alloys',
      price:alloy.price,originalPrice:alloy.originalPrice,
      rating:alloy.rating,reviews:alloy.reviews,image:alloy.image,
      badge:alloy.badge,description:alloy.description,
      features:[alloy.size,alloy.pcd,alloy.finish],
      inStock:true,brand:alloy.brand,
    });
    toast.success('Alloy added to cart');openCart();
  };

  return(
    <Link href={`/alloys/${alloy.id}`}
      className="card-lift group flex flex-col overflow-hidden">
      <div className="relative aspect-square bg-zinc-900 overflow-hidden">
        <Image src={alloy.image} alt={alloy.name} fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-100"
          unoptimized/>
        {/* spin overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-24 h-24 border border-white/20 rounded-full animate-spin-slow"/>
        </div>
        {alloy.badge&&(
          <span className="absolute top-3 left-3 badge bg-white text-black">{alloy.badge}</span>
        )}
        {disc>0&&(
          <span className="absolute top-3 right-3 badge bg-zinc-950/90 text-zinc-300 border border-zinc-700">-{disc}%</span>
        )}
      </div>
      <div className="p-4 bg-zinc-900 flex-1 flex flex-col">
        <p className="mono text-zinc-600 text-[10px] uppercase tracking-widest mb-1">{alloy.brand}</p>
        <h3 className="text-zinc-200 font-semibold text-sm group-hover:text-white transition-colors flex-1 mb-2 leading-snug">{alloy.name}</h3>
        <div className="flex gap-2 mb-3 flex-wrap">
          <span className="badge-border">{alloy.size}</span>
          <span className="badge-border">{alloy.pcd}</span>
          <span className="badge-dark">{alloy.finish}</span>
        </div>
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_,i)=><Star key={i} size={10} className={i<Math.floor(alloy.rating)?'text-white fill-white':'text-zinc-800'}/>)}
          <span className="mono text-zinc-700 text-[10px] ml-1">({alloy.reviews})</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="price">₹{alloy.price.toLocaleString()}</div>
            {alloy.originalPrice&&<div className="text-zinc-600 text-xs line-through">₹{alloy.originalPrice.toLocaleString()}</div>}
          </div>
          <button onClick={handleAdd}
            className="btn-white text-[10px] px-3 py-2 gap-1">
            <ShoppingCart size={12}/> Add
          </button>
        </div>
      </div>
    </Link>
  );
}
