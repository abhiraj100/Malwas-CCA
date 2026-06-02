import Link from'next/link';
import{CheckCircle,Package,ArrowRight}from'lucide-react';

export default function OrderSuccess(){
  return(
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 border-2 border-white flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={36} className="text-white"/>
        </div>
        <h1 className="display font-black text-white text-5xl uppercase tracking-wider mb-3">Order Placed!</h1>
        <p className="text-zinc-400 text-sm mb-8">Thank you for shopping with Malwa CCA. You&apos;ll receive a confirmation soon.</p>
        <div className="card p-5 text-left mb-8">
          <div className="flex items-center gap-2 mb-3"><Package size={14} className="text-white"/><span className="text-white text-sm font-semibold">What&apos;s Next?</span></div>
          <ol className="space-y-2 mono text-zinc-500 text-[11px]">
            <li>01 / Order confirmation sent to your email</li>
            <li>02 / Processing: 1–2 working days</li>
            <li>03 / Shipping: 3–5 working days</li>
            <li>04 / Delivery & unboxing 🎉</li>
          </ol>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-outline">Return Home</Link>
          <Link href="/products" className="btn-white gap-2">Shop More <ArrowRight size={13}/></Link>
        </div>
      </div>
    </div>
  );
}
