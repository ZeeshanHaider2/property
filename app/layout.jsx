import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthProvider from '@/components/AuthProvider';

export const metadata = {
    title: 'PropertyRental | Find the Perfect Rental',
    description: 'Find your dream rental property',
    keywords : 'rental, property , find rentals, find property'
}
const Mainlayout = ({children}) => {
  return (
    <AuthProvider>
      <html lang ='en'>
        <body>
            <Navbar/>
              <main>{children}</main>
            <Footer/>
        </body>
      </html> 
    </AuthProvider>
  );
};

export default Mainlayout;