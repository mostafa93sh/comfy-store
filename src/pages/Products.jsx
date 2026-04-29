import { Filters, PaginationContainer, ProductsContainer } from "../components";
import { customFetch } from "../utils";

const url = "/products";
export const loader = async () => {
  try {
    const response = await customFetch.get(url);
    const products = response.data.data;
    const meta = response.data.meta;

    return { products, meta };
  } catch (err) {
    console.log(err);
  }
  return null;
};

function ProductsPage() {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
}
export default ProductsPage;
