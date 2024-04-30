import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';
export const metadata = {
    title: 'PropertyRental | Find the Perfect Rental',
    description: 'Find your dream rental property',
    keywords : 'rental, property , find rentals, find property'
}
const Mainlayout = ({children}) => {
  return (
    <html lang ='en'>
     <body>
        <Navbar/>
        <main>{children}</main>
     </body>
    </html> 
  );
};

export default Mainlayout;