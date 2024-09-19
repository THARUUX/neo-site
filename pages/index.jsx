import Header from "@/components/Header";
import Featured from "@/components/Featured";
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";
import NewProducts from "@/components/NewProducts";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
import ProductBox from "@/components/ProductBox";

export default function HomePage({ featuredProduct, newProducts, loading, productLoading }) {
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {productLoading && <Loading/>}
      <div className="flex justify-center flex-col w-screen items-center">
        <Header homeActive="open" />
        <Featured product={featuredProduct} />
        <NewProducts products={newProducts} />
        <Footer />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  let featuredProduct = null;
  let newProducts = [];
  let loading = true;

  try {
    await mongooseConnect();
<<<<<<< HEAD
    const featuredProductId = '664b1c9789a45de583ce7afa';
=======
    const featuredProductId = '66389b6c96bf6665f37cd69b';
>>>>>>> 66a92f4 (Add files via upload)
    featuredProduct = await Product.findById(featuredProductId);
    newProducts = await Product.find({}, null, { sort: { '_id': -1 }, limit: 8 });
  } catch (error) {
    console.error("Error fetching data:", error.message);
  } finally {
    loading = false;
  }

  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
      loading,
    },
  };
}
