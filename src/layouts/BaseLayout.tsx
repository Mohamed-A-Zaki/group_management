import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export default function BaseLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <Toaster />
    </>
  );
}
