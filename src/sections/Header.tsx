import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import Button from "@/components/Button";

export const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
      <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5
          rounded-xl max-w-2xl md:max-w-none mx-auto relative">
          <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block"></div>
          <div>
            <div className="border h-10 w-10 rounded-lg inline-flex justify-center
              items-center border-white/15 cursor-pointer">
              <LogoIcon className="h-8 w-8" />
            </div>
          </div>

          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <a href="#" className="text-white/70 hover:text-white transition-all">Features</a>
              <a href="#" className="text-white/70 hover:text-white transition-all">Developers</a>
              <a href="#" className="text-white/70 hover:text-white transition-all">Pricing</a>
              <a href="#" className="text-white/70 hover:text-white transition-all">Changelog</a>
            </nav>
          </div>

          <div className="flex gap-4 items-center">
            <Button text="Join Us" />

            <MenuIcon className="cursor-pointer md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
