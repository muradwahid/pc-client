/* eslint-disable @next/next/no-img-element */
import RootLayout from '@/components/Layout/RootLayout';
import { useGetProductsQuery } from '@/redux/products/productsApi';
import Link from 'next/link';
import { Puff } from 'react-loader-spinner';
const Products = () => {
  const { data: products, isLoading } = useGetProductsQuery();
  if (isLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <Puff
          height="80"
          width="80"
          radius={1}
          color="#1E293B"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }
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
