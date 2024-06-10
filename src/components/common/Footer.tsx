import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="py-5 bg-slate-100">
      <div className="container">
        <div className="flex items-center justify-between">
          <Logo />
          <div>Copyright © 2024. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
