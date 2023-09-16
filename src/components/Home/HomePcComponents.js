import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const HomePcComponents = ({products}) => {
  return (
    <div className="mainContainer mx-auto mt-5">
      <div className="bg-gradient-to-l from-orange-400">
        <div className="h-full py-2 bg-orange-400 w-72 rounded-tr-full flex items-center justify-center text-xl font-bold uppercase text-white">
          <p>Featured Category</p>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-5">
        {products?.data?.slice(0, 10).map((item) => (
          <div key={item._id} className="categoryCard relative">
            <div className="px-3 mb-12">
              <div>
                <img src={item.Image} alt="" />
              </div>
              <p className="text-xl font-semibold">{item?.Product_Name}</p>
              <p>
                Model: <span>{item?.Key_Features.Model}</span>
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

export default HomePcComponents;