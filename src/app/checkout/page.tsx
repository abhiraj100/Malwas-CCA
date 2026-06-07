'use client';
import{useState}from'react';
import{useCart}from'@/context/CartContext';
import Image from'next/image';
import Link from'next/link';
import{Check,Truck,CreditCard,Shield,ArrowRight}from'lucide-react';
import toast from'react-hot-toast';
import{useRouter}from'next/navigation';

const steps=['Shipping','Payment','Review'];

export default function CheckoutPage(){
  const{state,total,clear}=useCart() as any;
  const{items}=state;
  const router=useRouter();
  const[step,setStep]=useState(0);
  const[pm,setPm]=useState('card');
  const[f,setF]=useState({firstName:'',lastName:'',email:'',phone:'',address:'',city:'',state:'',pincode:'',cardNumber:'',cardExpiry:'',cardCvv:'',cardName:''});

  const shipping=total>=2000?0:99;
  const tax=Math.round(total*.18);
  const grand=total+shipping+tax;

  if(!items||items.length===0)return(
    <div className="min-h-screen flex items-center justify-center flex-col gap-4">
      <h2 className="display font-black text-white text-3xl uppercase">No Items</h2>
      <Link href="/products" className="btn-white">Shop Now</Link>
    </div>
  );

  const inp=(name:string,label:string,ph:string,type='text')=>(
    <div key={name}>
      <label className="mono text-zinc-600 text-[10px] uppercase tracking-widest mb-1.5 block">{label}</label>
      <input type={type} name={name} value={(f as any)[name]} onChange={e=>setF({...f,[name]:e.target.value})} placeholder={ph} className="input text-sm"/>
    </div>
  );

  return(
    <div className="min-h-screen">
      <div className="bg-zinc-900 border-b border-zinc-800 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <span className="section-tag">Almost There</span>
          <h1 className="section-title">CHECKOUT</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Steps */}
        <div className="flex items-center gap-0 mb-10 max-w-sm">
          {steps.map((s,i)=>(
            <div key={s} className="flex items-center flex-1">
              <button onClick={()=>i<step&&setStep(i)}
                className={`flex items-center gap-2 mono text-[10px] uppercase tracking-wider ${i<=step?'text-white':'text-zinc-600'}`}>
                <span className={`w-6 h-6 flex items-center justify-center text-[10px] border ${i<step?'bg-white border-white text-black':i===step?'border-white text-white':'border-zinc-700 text-zinc-600'}`}>
                  {i<step?<Check size={10}/>:i+1}
                </span>
                <span className="hidden sm:inline">{s}</span>
              </button>
              {i<steps.length-1&&<div className={`flex-1 h-px mx-2 ${i<step?'bg-white':'bg-zinc-800'}`}/>}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {step===0&&(
              <div className="card p-6">
                <h2 className="display font-black text-white text-2xl uppercase tracking-wider mb-6 flex items-center gap-2"><Truck size={18} className="text-white"/>Shipping Details</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {inp('firstName','First Name','Rahul')}
                  {inp('lastName','Last Name','Kumar')}
                  {inp('email','Email','rahul@email.com','email')}
                  {inp('phone','Phone','+91 9798646302','tel')}
                  <div className="sm:col-span-2">{inp('address','Full Address','House No, Street, Area…')}</div>
                  {inp('city','City','Ranchi')}
                  {inp('state','State','Jharkhand')}
                  {inp('pincode','PIN Code','822101')}
                </div>
                <button onClick={()=>setStep(1)} className="btn-white mt-6 gap-2">Continue to Payment →</button>
              </div>
            )}
            {step===1&&(
              <div className="card p-6">
                <h2 className="display font-black text-white text-2xl uppercase tracking-wider mb-6 flex items-center gap-2"><CreditCard size={18}/>Payment</h2>
                <div className="space-y-3 mb-5">
                  {[{id:'card',label:'Credit / Debit Card',icon:'💳'},{id:'upi',label:'UPI',icon:'📱'},{id:'netbanking',label:'Net Banking',icon:'🏦'},{id:'cod',label:'Cash on Delivery',icon:'💵'}].map(({id,label,icon})=>(
                    <label key={id} className={`flex items-center gap-4 p-4 border cursor-pointer transition-all ${pm===id?'border-white bg-zinc-900':'border-zinc-800 hover:border-zinc-600'}`}>
                      <input type="radio" value={id} checked={pm===id} onChange={()=>setPm(id)} className="accent-white"/>
                      <span className="text-lg">{icon}</span>
                      <span className="text-zinc-300 font-semibold text-sm">{label}</span>
                    </label>
                  ))}
                </div>
                {pm==='card'&&(
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-zinc-900 border border-zinc-800 mb-4">
                    <div className="sm:col-span-2">{inp('cardNumber','Card Number','4111 1111 1111 1111')}</div>
                    <div className="sm:col-span-2">{inp('cardName','Name on Card','RAHUL KUMAR')}</div>
                    {inp('cardExpiry','Expiry','MM/YY')}
                    {inp('cardCvv','CVV','123')}
                  </div>
                )}
                <div className="flex gap-3">
                  <button onClick={()=>setStep(0)} className="btn-outline text-xs">← Back</button>
                  <button onClick={()=>setStep(2)} className="btn-white gap-2">Review Order →</button>
                </div>
              </div>
            )}
            {step===2&&(
              <div className="card p-6">
                <h2 className="display font-black text-white text-2xl uppercase tracking-wider mb-6 flex items-center gap-2"><Shield size={18}/>Review Order</h2>
                <div className="space-y-3 mb-6">
                  {items.map((item:any)=>(
                    <div key={item.id} className="flex gap-3 items-center">
                      <div className="relative w-16 h-12 shrink-0 bg-zinc-800"><Image src={item.image} alt={item.name} fill className="object-cover" unoptimized/></div>
                      <div className="flex-1">
                        <p className="text-white text-sm font-semibold">{item.name}</p>
                        <p className="mono text-zinc-600 text-[10px]">Qty: {item.quantity}</p>
                      </div>
                      <p className="display font-black text-white text-lg">₹{(item.price*item.quantity).toLocaleString()}</p>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button onClick={()=>setStep(1)} className="btn-outline text-xs">← Back</button>
                  <button onClick={()=>{clear();toast.success('Order placed! 🎉');router.push('/order-success');}}
                    className="btn-white flex-1 justify-center gap-2"><Check size={14}/>Place Order</button>
                </div>
              </div>
            )}
          </div>

          <div>
            <div className="card p-6 sticky top-24">
              <h3 className="display font-black text-white text-xl uppercase tracking-wider mb-4 pb-4 border-b border-zinc-800">Summary</h3>
              <div className="space-y-2 mono text-xs mb-4">
                <div className="flex justify-between text-zinc-500"><span>Subtotal</span><span className="text-white">₹{total.toLocaleString()}</span></div>
                <div className="flex justify-between text-zinc-500"><span>Shipping</span><span className="text-white">{shipping===0?'FREE':`₹${shipping}`}</span></div>
                <div className="flex justify-between text-zinc-500"><span>GST (18%)</span><span className="text-white">₹{tax.toLocaleString()}</span></div>
              </div>
              <div className="flex justify-between pt-3 border-t border-zinc-800">
                <span className="mono text-white text-xs uppercase">Total</span>
                <span className="display font-black text-white text-2xl">₹{grand.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
