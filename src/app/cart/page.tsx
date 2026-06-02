'use client';
import{useCart}from'@/context/CartContext';
import Image from'next/image';
import Link from'next/link';
import{Plus,Minus,Trash2,ShoppingBag,ArrowRight,Tag}from'lucide-react';

export default function CartPage(){
  const{state,remove,qty,total}=useCart() as any;
  const{items}=state;
  const shipping=total>=2000?0:99;
  const tax=Math.round(total*.18);
  const grand=total+shipping+tax;

  return(
    <div className="min-h-screen">
      <div className="bg-zinc-900 border-b border-zinc-800 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <span className="section-tag">Review Your Order</span>
          <h1 className="section-title">SHOPPING CART</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        {items.length===0?(
          <div className="text-center py-20">
            <ShoppingBag size={56} className="text-zinc-800 mx-auto mb-4"/>
            <h2 className="display font-black text-white text-3xl uppercase tracking-wider mb-3">Cart is Empty</h2>
            <p className="mono text-zinc-600 text-xs mb-6">Add some accessories to get started.</p>
            <Link href="/products" className="btn-white">Start Shopping</Link>
          </div>
        ):(
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-3">
              {items.map((item:any)=>(
                <div key={item.id} className="flex gap-4 card p-4 group">
                  <Link href={`/products/${item.id}`} className="relative w-24 h-18 shrink-0 bg-zinc-800 overflow-hidden h-20">
                    <Image src={item.image} alt={item.name} fill className="object-cover" unoptimized/>
                  </Link>
                  <div className="flex-1">
                    <div className="flex justify-between gap-3">
                      <div>
                        <p className="mono text-zinc-600 text-[10px] uppercase">{item.brand}</p>
                        <p className="text-white font-semibold text-sm">{item.name}</p>
                      </div>
                      <button onClick={()=>remove(item.id)} className="text-zinc-700 hover:text-red-500 transition-colors shrink-0 p-1"><Trash2 size={14}/></button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-zinc-700">
                        <button onClick={()=>qty(item.id,item.quantity-1)} className="w-8 h-8 flex items-center justify-center text-zinc-500 hover:text-white transition-colors"><Minus size={11}/></button>
                        <span className="w-8 text-center mono text-white text-xs">{item.quantity}</span>
                        <button onClick={()=>qty(item.id,item.quantity+1)} className="w-8 h-8 flex items-center justify-center text-zinc-500 hover:text-white transition-colors"><Plus size={11}/></button>
                      </div>
                      <div className="text-right">
                        <div className="display font-black text-white text-xl">₹{(item.price*item.quantity).toLocaleString()}</div>
                        <div className="mono text-zinc-600 text-[10px]">₹{item.price.toLocaleString()} each</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div>
              <div className="card p-6 sticky top-24">
                <h2 className="display font-black text-white text-xl uppercase tracking-wider mb-6 pb-4 border-b border-zinc-800">Order Summary</h2>
                <div className="flex mb-5">
                  <div className="flex items-center px-3 border border-zinc-700 border-r-0"><Tag size={13} className="text-zinc-600"/></div>
                  <input type="text" placeholder="Coupon code" className="input text-xs border-l-0 flex-1 py-2"/>
                  <button className="btn-white text-[10px] px-4 shrink-0">Apply</button>
                </div>
                <div className="space-y-2.5 mb-5 mono text-xs">
                  <div className="flex justify-between text-zinc-500"><span>Subtotal ({items.reduce((s:number,i:any)=>s+i.quantity,0)} items)</span><span className="text-white">₹{total.toLocaleString()}</span></div>
                  <div className="flex justify-between text-zinc-500"><span>Shipping</span><span className={shipping===0?'text-white':'text-white'}>{shipping===0?'FREE':`₹${shipping}`}</span></div>
                  <div className="flex justify-between text-zinc-500"><span>GST (18%)</span><span className="text-white">₹{tax.toLocaleString()}</span></div>
                </div>
                {shipping===0&&<div className="bg-zinc-900 border border-zinc-700 mono text-[10px] text-zinc-400 p-2.5 mb-4">✓ Free shipping applied</div>}
                <div className="flex justify-between items-center pt-4 border-t border-zinc-800 mb-5">
                  <span className="text-white font-semibold uppercase mono text-xs">Total</span>
                  <span className="display font-black text-white text-3xl">₹{grand.toLocaleString()}</span>
                </div>
                <Link href="/checkout" className="btn-white w-full justify-center gap-2">Checkout <ArrowRight size={13}/></Link>
                <Link href="/products" className="btn-ghost w-full justify-center mt-2 text-xs">← Continue Shopping</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
