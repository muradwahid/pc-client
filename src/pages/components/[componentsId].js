/* eslint-disable @next/next/no-img-element */
import RootLayout from '@/components/Layout/RootLayout';
import Link from 'next/link';
const Components = ({ component }) => {
  const data=component?.data

  return (
    <div className="mainContainer mx-auto my-8">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-5">
        {data?.map((item) => (
          <div key={item._id} className="categoryCard relative">
            <div className="px-3 mb-12">
              <div>
                <img src={item.Image} alt="" />
              </div>
              <p className="text-xl font-semibold">{item?.Product_Name}</p>
              <p>
                Model: <span>{item?.Key_Features.Model}</span>
              </p>
              <p>
                Price: <span>{item?.Price}Tk</span>
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

export default Components;

Components.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:5000/products');
  const data = await res.json();
  const paths = data?.data?.map((singleProduct) => ({
    params: { componentsId: String(singleProduct?.Category) },
  }));
  return {
    paths,
    fallback: false,
  };
};
export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/components/${params.componentsId}`);
  const data = await res.json();
  return {
    props: {
      component: data,
    },
  };
}