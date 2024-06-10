import CreateGroupDialog from "../home/CreateGroupDialog";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="shadow-md py-5">
      <div className="container">
        <div className="flex items-center justify-between">
          <Logo />
          <CreateGroupDialog />
        </div>
      </div>
    </nav>
  );
}
