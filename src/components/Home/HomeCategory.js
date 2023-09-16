/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const HomeCategory = ({ category }) => {
  return (
    <div className="mainContainer mx-auto mt-8">
      <div className="bg-gradient-to-l from-orange-400">
        <div className="h-full py-2 bg-orange-400 w-72 rounded-tr-full flex items-center justify-center text-xl font-bold uppercase text-white">
          <p>Featured Category</p>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-4">
        {category?.data?.map((item) => (
          <div key={item._id} className="w-[150px] categoryCard py-3 px-3">
            <Link href={`/components/${item?.categoris}`}>
              <img src={item?.image} alt="" />
              <p className="text-center font-semibold uppercase">{item?.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCategory;
