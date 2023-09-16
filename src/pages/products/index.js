/* eslint-disable @next/next/no-img-element */
import RootLayout from '@/components/Layout/RootLayout';
import Link from 'next/link';
export async function getStaticProps() {
  const productRes = await fetch(
    'https://pc-server-ktm1cil18-muradwahid.vercel.app/products'
  );
  const products = await productRes.json();
  return {
    props: {
      products,
    },
  };
}
const Products = ({ products }) => {
  return (
    <div className="mainContainer mx-auto">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-5">
        {products?.data?.map((item) => (
          <div key={item._id} className="categoryCard relative">
            <div className="px-3 mb-12">
              <div>
                <img src={item.Image} alt="" />
              </div>
              <p className="text-xl font-semibold">{item?.Product_Name}</p>
              <p>
                <span className="font-medium">Model:</span>{' '}
                {item?.Key_Features.Model}
              </p>
              <p>
                <span className="font-medium">Price:</span> {item?.Price}
              </p>
            </div>
            <Link
              className="text-center absolute w-full bg-gray-300 block font-semibold py-1 bottom-0"
              href={`/products/${item._id}`}
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
Products.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
