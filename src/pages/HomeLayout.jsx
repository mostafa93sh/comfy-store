import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <>
      <nav>
        <span>
          <h1 className="text-3xl font-bold">Comfy Store</h1>
        </span>
      </nav>
      <Outlet />
    </>
  );
}
export default HomeLayout;
