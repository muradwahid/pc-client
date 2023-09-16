import RootLayout from "@/components/Layout/RootLayout";

const SingleProduct = () => {
  return <div>
    <p>single product</p>
  </div>;
};

export default SingleProduct;
SingleProduct.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}