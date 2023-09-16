/* eslint-disable @next/next/no-img-element */
import RootLayout from '@/components/Layout/RootLayout';
import { removeToPcBuilder } from '@/redux/pcBuilder/pcBuilderSlice';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

const PcBuild = ({ categories }) => {
    const { products, totalPrice } = useSelector((state) => state.pcBuilder);
  const dispatch = useDispatch();
  return (
    <div className="mainContainer mx-auto my-6">
      <div className="lg:w-3/5 mx-auto">
        <div className="bg-orange-100 p-6">
          <div className="flex justify-between items-center border-b-2 border-orange-600 pb-4">
            <h2 className="lg:text-3xl md:text-2xl text-xl font-semibold uppercase">
              pc builder
            </h2>
            <div className="bg-orange-500 text-white px-6 py-2 rounded-lg">
              <p>Total Price: {totalPrice}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 pb-5 mt-5">
            {categories?.data.map((category) => {
              const isExting = products.find((product) => product?.Category === category?.categoris);
              return isExting ? (
                <div
                  key={category?._id}
                  className=" p-3 rounded flex md:flex-row flex-col justify-between items-center"
                >
                  <div className="">
                    <div className="flex justify-center">
                      <Image
                        src={category?.image}
                        width={50}
                        height={50}
                        alt=""
                      />
                    </div>
                    <p className="mt-1">{category?.name}</p>
                  </div>
                  <div className="flex sm:flex-row flex-col  gap-2 items-center">
                    <img
                      src={isExting?.image}
                      className="h-[50px] w-[50px]"
                      alt=""
                    />
                    <p className="mt-1">{isExting?.Product_Name}</p>{' '}
                    <p className="mt-1 font-bold">Price: {isExting?.Price}</p>
                  </div>

                  <button
                    onClick={() => dispatch(removeToPcBuilder(isExting))}
                    className="btn btn-sm"
                  >
                    X
                  </button>
                </div>
              ) : (
                <div
                  key={category?._id}
                  className="p-3 rounded flex justify-between items-center"
                >
                  <div className="">
                    <img
                      src={category?.image}
                      className="h-[50px] w-[50px]"
                      alt=""
                    />
                    <p className="mt-1">{category?.name}</p>
                  </div>
                  <div className=""></div>
                  <Link
                    href={`/pc-build/${category?.categoris}`}
                    className="btn btn-sm"
                  >
                    Choose
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center py-4 disabled">
            <button className="btn btn-primary" disabled={products.length <= 6}>
              Complite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PcBuild;
PcBuild.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getStaticProps() {
  const res = await fetch('http://localhost:5000/categories');
  const categories = await res.json();
  return {
    props: {
      categories,
    },
  };
}
