import RootLayout from '@/components/Layout/RootLayout';

const SingleProduct = ({ product }) => {
  console.log(product);
  const data = product.data[0];
  return (
    <div className="mainContainer mx-auto">
      <div className="flex gap-10 items-center">
        <div>
          <img src={data?.Image} alt="" />
        </div>
        <div>
          <h4 className="text-2xl text-orange-600 font-semibold">
            {data?.Product_Name}
          </h4>
          <div className="flex flex-wrap gap-3 mt-5">
            <p className="bg-gray-300 rounded-full px-2">
              Price: <span className="font-semibold"> {data?.Price}tk</span>
            </p>
            <p className="bg-gray-300 rounded-full px-2">
              Category:{' '}
              <span className="font-semibold"> {data?.Category}tk</span>
            </p>
            <p className="bg-gray-300 rounded-full px-2">
              Status:{' '}
              {data?.Status ? (
                <span className="font-semibold">In Stock</span>
              ) : (
                <span className="font-semibold">Out of Stock</span>
              )}{' '}
            </p>
            <p className="bg-gray-300 rounded-full px-2">
              Brand:{' '}
              <span className="font-semibold"> {data?.Key_Features.Brand}</span>
            </p>
          </div>
          <div>
            <p className="text-xl font-semibold text-orange-600 mt-4">
              Key Features:
            </p>
            <div>
              <p className='mb-2'>
                <span className='font-medium'>Model:</span>{" "}
                {data?.Key_Features.Model}
              </p>
              <p className='mb-2'>
                <span className='font-medium'>Model:</span>{" "}
                {data?.Key_Features.Model}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
SingleProduct.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:5000/products');
  const data = await res.json();
  const paths = data?.data?.map((singleProduct) => ({
    params: { productId: singleProduct._id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};
export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/products/${params.productId}`);
  const data = await res.json();
  return {
    props: {
      product: data,
    },
  };
}
