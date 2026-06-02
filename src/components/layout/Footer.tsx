import Link from'next/link';
import{Phone,Mail,MapPin,Clock,Instagram,Facebook,Youtube}from'lucide-react';

export default function Footer(){
  return(
    <footer className="bg-zinc-950 border-t border-zinc-800 mt-20">
      {/* Newsletter */}
      <div className="border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="section-tag">Stay in the loop</span>
            <h3 className="display font-black text-white text-3xl uppercase tracking-wider leading-none">
              Join Malwas CCA Club
            </h3>
            <p className="text-zinc-500 text-sm mt-1">Exclusive deals, new products & car tips.</p>
          </div>
          <div className="flex w-full md:w-auto">
            <input type="email" placeholder="your@email.com"
              className="input flex-1 md:w-64 text-sm border-r-0"/>
            <button className="btn-white whitespace-nowrap shrink-0">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 bg-white flex items-center justify-center cut-corner shrink-0">
              <span className="display font-black text-black text-lg">M</span>
            </div>
            <div>
              <div className="display font-black text-white text-xl tracking-wider uppercase">Malwas CCA</div>
              <div className="mono text-[9px] text-zinc-500 tracking-[.28em]">Car Care & Accessories</div>
            </div>
          </div>
          <p className="text-zinc-500 text-sm leading-relaxed mb-5">
            Premium seat covers, accessories & complete car modification for all types of vehicles.
            Trusted by thousands across Jharkhand.
          </p>
          <div className="flex gap-3">
            {[Facebook,Instagram,Youtube].map((Icon,i)=>(
              <a key={i} href="#"
                className="w-8 h-8 border border-zinc-800 flex items-center justify-center text-zinc-600
                           hover:text-white hover:border-zinc-600 transition-all">
                <Icon size={14}/>
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="display font-bold text-white text-lg uppercase tracking-wider mb-5">Quick Links</h4>
          <ul className="space-y-2">
            {[
              {href:'/',label:'Home'},
              {href:'/products',label:'Shop All'},
              {href:'/products?category=seat-covers',label:'Seat Covers'},
              {href:'/products?category=modification',label:'Car Modification'},
              {href:'/alloys',label:'Malwas Alloys'},
              {href:'/about',label:'About Us'},
              {href:'/contact',label:'Contact'},
              {href:'/wishlist',label:'My Wishlist'},
            ].map(({href,label})=>(
              <li key={href}>
                <Link href={href} className="text-zinc-500 hover:text-white text-sm transition-colors hover:pl-2 block transition-all duration-150">
                  → {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="display font-bold text-white text-lg uppercase tracking-wider mb-5">Our Services</h4>
          <ul className="space-y-2">
            {[
              'Premium Seat Covers','7D Floor Mats','Car Wrapping',
              'LED & HID Lighting','Android Stereo Fit','Alloy Wheel Fitting',
              'Car Detailing','Window Film Tinting','Parking Sensors',
            ].map(s=>(
              <li key={s} className="text-zinc-500 text-sm flex items-center gap-2">
                <span className="w-1 h-1 bg-zinc-600 rounded-full shrink-0"/>
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="display font-bold text-white text-lg uppercase tracking-wider mb-5">Find Us</h4>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <MapPin size={15} className="text-white mt-0.5 shrink-0"/>
              <div>
                <p className="text-zinc-300 text-sm leading-relaxed">Ranchi Road, Near Hyundai Showroom</p>
                <p className="text-zinc-500 text-xs">Jharkhand – 835xxx</p>
              </div>
            </li>
            <li className="flex gap-3 items-center">
              <Phone size={15} className="text-white shrink-0"/>
              <a href="tel:+919400000000" className="text-zinc-400 hover:text-white text-sm transition-colors">+91 94xxx xxxxx</a>
            </li>
            <li className="flex gap-3 items-center">
              <Mail size={15} className="text-white shrink-0"/>
              <a href="mailto:info@Malwascca.in" className="text-zinc-400 hover:text-white text-sm transition-colors">info@Malwascca.in</a>
            </li>
            <li className="flex gap-3">
              <Clock size={15} className="text-white mt-0.5 shrink-0"/>
              <div className="text-zinc-400 text-sm">
                <p>Mon – Sat: 9:00 AM – 8:00 PM</p>
                <p>Sunday: 10:00 AM – 5:00 PM</p>
              </div>
            </li>
          </ul>

          {/* Alloys branch */}
          <div className="mt-5 p-3 border border-zinc-800 bg-zinc-900">
            <div className="mono text-[9px] text-zinc-500 uppercase tracking-widest mb-1">Our Other Showroom</div>
            <div className="display font-black text-white text-base uppercase">Malwas Alloys</div>
            <div className="text-zinc-500 text-xs mt-0.5">Latest 4-Wheeler Alloys — Same Address</div>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="mono text-zinc-700 text-[10px] uppercase tracking-widest">
            © 2024 Malwas CCA. All rights reserved.
          </p>
          <div className="flex gap-3">
            {['COD','UPI','Visa','Mastercard','PhonePe'].map(p=>(
              <span key={p} className="mono text-zinc-700 text-[10px] border border-zinc-800 px-2 py-0.5">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
