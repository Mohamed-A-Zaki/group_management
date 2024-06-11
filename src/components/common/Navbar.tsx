import Logo from "./Logo";
import { Button } from "../ui/button";
import { open_create_group_atom } from "@/atoms/open_create_group_atom";

export default function Navbar() {
  const handleOpenCreateGroup = () => {
    /**
     * open create group dialog
     */
    open_create_group_atom.open();
  };

  return (
    <nav className="shadow-md py-5">
      <div className="container">
        <div className="flex items-center justify-between">
          <Logo />
          <Button onClick={handleOpenCreateGroup}>Create Group</Button>
        </div>
      </div>
    </nav>
  );
}
