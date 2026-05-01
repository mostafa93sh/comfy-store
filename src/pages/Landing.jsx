import FeaturedProducts from "../components/FeaturedProducts";
import Hero from "../components/Hero";
import { customFetch } from "../utils";
const url = "/products?featured=true";

const featuredProductsQuery = {
  queryKey: ["featuredProducts"],
  queryFn: () => customFetch(url),
};

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(featuredProductsQuery);
  const products = response.data.data;
  return { products };
};

function LandingPage() {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
    </div>
  );
}
export default LandingPage;
