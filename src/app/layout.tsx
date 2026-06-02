import type{Metadata}from'next';
import'./globals.css';
import{CartProvider}from'@/context/CartContext';
import{WishlistProvider}from'@/context/WishlistContext';
import Navbar from'@/components/layout/Navbar';
import Footer from'@/components/layout/Footer';
import CartDrawer from'@/components/ui/CartDrawer';
import{Toaster}from'react-hot-toast';

export const metadata:Metadata={
  title:'Malwa CCA — Car Accessories & Modification | Ranchi Road',
  description:'Premium seat covers, car accessories, car modification for all car types. Malwa Alloys showroom for latest 4-wheeler alloys. Located on Ranchi Road near Hyundai Showroom.',
  keywords:'car accessories ranchi, seat covers ranchi, car modification, malwa alloys, alloy wheels ranchi road',
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return(
    <html lang="en">
      <body>
        <CartProvider>
          <WishlistProvider>
            <Navbar/>
            <CartDrawer/>
            <main>{children}</main>
            <Footer/>
            <Toaster
              position="bottom-right"
              toastOptions={{
                style:{
                  background:'#18181b',color:'#f4f4f5',
                  border:'1px solid #3f3f46',
                  fontFamily:'var(--font-mono)',
                  fontSize:'12px',letterSpacing:'.06em',
                },
                success:{iconTheme:{primary:'#fff',secondary:'#000'}},
              }}
            />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
