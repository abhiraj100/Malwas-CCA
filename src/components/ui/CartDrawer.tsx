'use client';
import{X,Plus,Minus,Trash2,ShoppingBag,ArrowRight}from'lucide-react';
import{useCart}from'@/context/CartContext';
import Image from'next/image';
import Link from'next/link';

export default function CartDrawer(){
  const{state,closeCart,remove,qty,total}=useCart() as any;
  const{items,open}=state;
  if(!open)return null;
  return(
    <>
      <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50" onClick={closeCart}/>
      <div className="fixed top-0 right-0 h-full w-full sm:w-96 bg-zinc-950 border-l border-zinc-800 z-50 flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-zinc-800">
          <div>
            <h2 className="display font-black text-white text-2xl uppercase tracking-wider">Cart</h2>
            <p className="mono text-zinc-600 text-[11px]">{items.length} item(s)</p>
          </div>
          <button onClick={closeCart} className="p-2 text-zinc-500 hover:text-white hover:bg-zinc-900 transition-all">
            <X size={18}/>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {items.length===0?(
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={44} className="text-zinc-800"/>
              <p className="mono text-zinc-600 text-xs uppercase tracking-wider">Cart is empty</p>
              <button onClick={closeCart} className="btn-outline text-xs">Continue Shopping</button>
            </div>
          ):items.map((item:any)=>(
            <div key={item.id} className="flex gap-3 p-3 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all">
              <div className="relative w-20 h-16 shrink-0 bg-zinc-800 overflow-hidden">
                <Image src={item.image} alt={item.name} fill className="object-cover" unoptimized/>
              </div>
              <div className="flex-1 min-w-0">
                <p className="mono text-zinc-600 text-[10px] uppercase">{item.brand}</p>
                <p className="text-white text-xs font-semibold leading-tight truncate">{item.name}</p>
                <p className="display font-black text-white text-base mt-1">₹{item.price.toLocaleString()}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button onClick={()=>qty(item.id,item.quantity-1)}
                    className="w-6 h-6 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 transition-all">
                    <Minus size={10}/>
                  </button>
                  <span className="text-white mono text-xs w-4 text-center">{item.quantity}</span>
                  <button onClick={()=>qty(item.id,item.quantity+1)}
                    className="w-6 h-6 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 transition-all">
                    <Plus size={10}/>
                  </button>
                  <button onClick={()=>remove(item.id)} className="ml-auto text-zinc-700 hover:text-red-500 transition-colors p-1">
                    <Trash2 size={13}/>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        {items.length>0&&(
          <div className="border-t border-zinc-800 p-5 space-y-4">
            <div className="flex justify-between items-center">
              <span className="mono text-zinc-500 text-xs uppercase tracking-wider">Subtotal</span>
              <span className="display font-black text-white text-2xl">₹{total.toLocaleString()}</span>
            </div>
            <Link href="/checkout" onClick={closeCart}
              className="btn-white w-full justify-center">
              Checkout <ArrowRight size={14}/>
            </Link>
            <Link href="/cart" onClick={closeCart}
              className="btn-outline w-full justify-center text-xs">
              View Full Cart
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
