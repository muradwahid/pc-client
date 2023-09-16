import HeroSection from '@/components/Home/HeroSection';
import HomeCategory from '@/components/Home/HomeCategory';
import HomePcComponents from '@/components/Home/HomePcComponents';
import RootLayout from '@/components/Layout/RootLayout';
import { setCategories } from '@/redux/categories/categoriesSlice';
import { setProduct } from '@/redux/products/productSlice';
import { useDispatch } from 'react-redux';
export async function getStaticProps() {
  const res = await fetch(
    'https://pc-server-ktm1cil18-muradwahid.vercel.app/categories'
  );
  const data = await res.json();
  const productRes = await fetch(
    'https://pc-server-ktm1cil18-muradwahid.vercel.app/products'
  );
  const products = await productRes.json();
  return {
    props: {
      data,
      products,
    },
  };
}
const Home = ({ data, products }) => {
  const dispatch = useDispatch();
  dispatch(setCategories(data));
  dispatch(setProduct(products));

  return (
    <div>
      <HeroSection />
      <HomeCategory category={data} />
      <HomePcComponents products={products} />
    </div>
  );
};
export default Home;
Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
