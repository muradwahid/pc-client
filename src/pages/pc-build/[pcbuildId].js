/* eslint-disable @next/next/no-img-element */
import RootLayout from '@/components/Layout/RootLayout';
import { addToBuilder } from '@/redux/pcBuilder/pcBuilderSlice';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

const PcBuildComp = ({ component }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const data = component?.data;
  const handleProductAdd = (item) => {
    dispatch(addToBuilder(item));
    router.push('/pc-build');
  };
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
            <button
              onClick={() => handleProductAdd(item)}
              className="text-center absolute w-full bg-gray-300 block font-semibold py-1 bottom-0"
            >
              Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PcBuildComp;
PcBuildComp.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export const getStaticPaths = async () => {
  const res = await fetch(
    'https://pc-server-ktm1cil18-muradwahid.vercel.app/products'
  );
  const data = await res.json();
  const paths = data?.data?.map((singleProduct) => ({
    params: { pcbuildId: String(singleProduct?.Category) },
  }));
  return {
    paths,
    fallback: false,
  };
};
export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://pc-server-ktm1cil18-muradwahid.vercel.app/components/${params.pcbuildId}`
  );
  const data = await res.json();
  return {
    props: {
      component: data,
    },
  };
}
