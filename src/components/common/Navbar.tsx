import { open_create_group_atom } from "@/atoms/open_create_group_atom";
import { Button } from "../ui/button";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="shadow-md py-5">
      <div className="container">
        <div className="flex items-center justify-between">
          <Logo />
          <Button onClick={open_create_group_atom.open}>Create Group</Button>
        </div>
      </div>
    </nav>
  );
}
