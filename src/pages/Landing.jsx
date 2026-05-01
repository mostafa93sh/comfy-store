import FeaturedProducts from "../components/FeaturedProducts";
import Hero from "../components/Hero";
import { customFetch } from "../utils";
const url = "/products?featured=true";

export const loader = (queryClient) => async () => {
  const response = await customFetch(url);
  console.log(response);
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
