import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthProvider from '@/components/AuthProvider';
import { ToastContainer } from 'react-toastify';
import { GlobalProvider } from '@/context/GlobalContext';
import '@/assets/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
    title: 'PropertyRental | Find the Perfect Rental',
    description: 'Find your dream rental property',
    keywords : 'rental, property , find rentals, find property'
}
const Mainlayout = ({children}) => {
  return (
    <GlobalProvider>
    <AuthProvider>
      <html lang ='en'>
        <body>
            <Navbar/>
              <main>{children}</main>
            <Footer/>
            <ToastContainer/>
        </body>
      </html> 
    </AuthProvider>
    </GlobalProvider>
  );
};

export default Mainlayout;