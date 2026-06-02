import Link from'next/link';
export default function NotFound(){
  return(
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="display font-black text-zinc-900 select-none" style={{fontSize:'clamp(8rem,25vw,18rem)',lineHeight:1}}>404</div>
      <h2 className="display font-black text-white text-4xl uppercase tracking-wider mb-4 -mt-4">Page Not Found</h2>
      <p className="mono text-zinc-600 text-xs mb-8 uppercase tracking-widest">The page you&apos;re looking for doesn&apos;t exist.</p>
      <div className="flex gap-3">
        <Link href="/" className="btn-white">Go Home</Link>
        <Link href="/products" className="btn-outline">Browse Products</Link>
      </div>
    </div>
  );
}
