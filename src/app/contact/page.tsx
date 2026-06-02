'use client';
import{useState}from'react';
import{Phone,Mail,MapPin,Clock,Send,MessageSquare}from'lucide-react';
import toast from'react-hot-toast';

const faqs=[
  {q:'Do you fit seat covers at the showroom?',   a:'Yes! Free professional fitting is included with all seat cover purchases. Just visit us at Ranchi Road, near Hyundai Showroom.'},
  {q:'Which car types do you work on?',           a:'All types — hatchback, sedan, SUV, MUV, and luxury vehicles. Bring your car in and we\'ll find the perfect accessories.'},
  {q:'Do you offer alloy wheel balancing?',       a:'Yes, Malwas Alloys (our sister showroom at the same address) does fitting, balancing and alignment for all alloys.'},
  {q:'What is your return / exchange policy?',    a:'7-day hassle-free return for unused products in original packaging. For fitment issues, we resolve them on-site free of charge.'},
  {q:'Can I order accessories online and pick up?',a:'Yes — place your order online and collect from our showroom. We\'ll notify you when it\'s ready.'},
];

export default function ContactPage(){
  const[f,setF]=useState({name:'',email:'',phone:'',subject:'',message:''});
  const[open,setOpen]=useState<number|null>(null);

  const submit=(e:React.FormEvent)=>{
    e.preventDefault();
    toast.success('Message sent! We\'ll reply within 24 hours.');
    setF({name:'',email:'',phone:'',subject:'',message:''});
  };

  return(
    <div className="min-h-screen">
      <div className="bg-zinc-900 border-b border-zinc-800 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <span className="section-tag">Get In Touch</span>
          <h1 className="section-title">CONTACT US</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Info */}
          <div className="space-y-6">
            <p className="text-zinc-400 text-sm leading-relaxed">
              Have questions? Want to book a fitment appointment? Need custom accessories advice? We&apos;re here to help.
            </p>
            {[
              {icon:MapPin,t:'Showroom Address',lines:['Ranchi Road, Near Hyundai Showroom','Jharkhand – 835xxx','(Malwas Alloys — same complex)']},
              {icon:Phone, t:'Call / WhatsApp',  lines:['+91 94xxx xxxxx','+91 90xxx xxxxx']},
              {icon:Mail,  t:'Email',            lines:['info@Malwascca.in','support@Malwascca.in']},
              {icon:Clock, t:'Hours',            lines:['Mon–Sat: 9:00 AM – 8:00 PM','Sunday: 10:00 AM – 5:00 PM']},
            ].map(({icon:Icon,t,lines})=>(
              <div key={t} className="flex gap-4">
                <div className="w-9 h-9 border border-zinc-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon size={15} className="text-white"/>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1">{t}</h3>
                  {lines.map((l,i)=><p key={i} className="text-zinc-500 text-xs leading-relaxed">{l}</p>)}
                </div>
              </div>
            ))}

            {/* Quick links */}
            <div className="pt-4 border-t border-zinc-800">
              <p className="mono text-zinc-600 text-[10px] uppercase tracking-widest mb-3">Quick Actions</p>
              <div className="space-y-2">
                <a href="tel:+919400000000" className="btn-white w-full justify-center text-xs gap-2"><Phone size={12}/>Call Now</a>
                <a href="https://wa.me/919400000000" target="_blank" className="btn-outline w-full justify-center text-xs gap-2">📱 WhatsApp</a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="card p-8">
              <h2 className="display font-black text-white text-2xl uppercase tracking-wider mb-6 flex items-center gap-2">
                <MessageSquare size={18}/> Send a Message
              </h2>
              <form onSubmit={submit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[{n:'name',l:'Your Name',p:'Rahul Kumar'},{n:'email',l:'Email',p:'rahul@email.com',t:'email'}].map(({n,l,p,t='text'})=>(
                    <div key={n}>
                      <label className="mono text-zinc-600 text-[10px] uppercase tracking-widest mb-1.5 block">{l} *</label>
                      <input required type={t} value={(f as any)[n]} onChange={e=>setF({...f,[n]:e.target.value})} placeholder={p} className="input text-sm"/>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[{n:'phone',l:'Phone',p:'+91 94xxx xxxxx'},{n:'subject',l:'Subject',p:'Seat Cover Enquiry'}].map(({n,l,p})=>(
                    <div key={n}>
                      <label className="mono text-zinc-600 text-[10px] uppercase tracking-widest mb-1.5 block">{l}</label>
                      <input type="text" value={(f as any)[n]} onChange={e=>setF({...f,[n]:e.target.value})} placeholder={p} className="input text-sm"/>
                    </div>
                  ))}
                </div>
                <div>
                  <label className="mono text-zinc-600 text-[10px] uppercase tracking-widest mb-1.5 block">Message *</label>
                  <textarea required value={f.message} onChange={e=>setF({...f,message:e.target.value})}
                    placeholder="Tell us about your car and what you need…" rows={5} className="input text-sm resize-none"/>
                </div>
                <button type="submit" className="btn-white gap-2"><Send size={13}/>Send Message</button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <span className="section-tag">Common Questions</span>
            <h2 className="section-title">FAQ</h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-3">
            {faqs.map((faq,i)=>(
              <div key={i} className="card overflow-hidden">
                <button onClick={()=>setOpen(open===i?null:i)}
                  className="w-full flex items-center justify-between p-5 text-left">
                  <span className="text-white font-semibold text-sm pr-4">{faq.q}</span>
                  <span className={`text-white text-xl shrink-0 transition-transform ${open===i?'rotate-45':''}`}>+</span>
                </button>
                {open===i&&(
                  <div className="px-5 pb-5 text-zinc-400 text-sm border-t border-zinc-800 pt-3">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
