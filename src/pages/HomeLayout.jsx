import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Header from "../components/Header";

function HomeLayout() {
  return (
    <>
      <Header />
      <NavBar />
      <section className="align-element pt-8">
        <Outlet />
      </section>
    </>
  );
}
export default HomeLayout;
