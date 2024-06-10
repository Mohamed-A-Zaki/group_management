import images from "@/utils/images";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <img src={images.logo} alt="logo" />
    </Link>
  );
}
