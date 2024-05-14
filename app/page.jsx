import Hero from '@/components/Hero';
import InfoBoxes from '@/components/InfoBoxes';
import HomeProperties from '@/components/HomeProperties';
//import connectDB from '@/config/database';
import FeaturedProperties from '@/components/FeaturedProperties';

const Homepage = () => {
  //await connectDB();
  return (
    <>
      <Hero/>
      <InfoBoxes/>
      <FeaturedProperties/>
      <HomeProperties/>
    </>
  )
}

export default Homepage