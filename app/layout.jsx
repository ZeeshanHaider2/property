import '@/assets/styles/globals.css';

export const metadata = {
    title: 'PropertyRental | Find the Perfect Rental',
    description: 'Find your dream rental property',
    keywords : 'rental, property , find rentals, find property'
}
const Mainlayout = ({children}) => {
  return (
    <html lang ='en'>
     <body>
        <div>{children}</div>
     </body>
    </html> 
  );
};

export default Mainlayout;