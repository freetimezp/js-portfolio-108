import LogoImg from "@/assets/logo.svg";
import XSocial from "@/assets/social-x.svg";
import InstaSocial from "@/assets/social-instagram.svg";
import YTSocial from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="py-5 lg:py-10 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-8 items-center lg:justify-between">
          <div className="flex gap-2 items-center cursor-pointer">
            <LogoImg className="h-6 w-6 md:h-8 md:w-8" />
            <div className="font-medium">
              AI Startup Landing Page
            </div>
          </div>

          <nav className="flex flex-col lg:flex-row gap-5 lg:gap-7 items-center">
            <a href="#" className="text-white/70 hover:text-white text-xs md:text-sm transition-all">
              Features
            </a>
            <a href="#" className="text-white/70 hover:text-white text-xs md:text-sm transition-all">
              Developers
            </a>
            <a href="#" className="text-white/70 hover:text-white text-xs md:text-sm transition-all">
              Company
            </a>
            <a href="#" className="text-white/70 hover:text-white text-xs md:text-sm transition-all">
              Blog
            </a>
            <a href="#" className="text-white/70 hover:text-white text-xs md:text-sm transition-all">
              Changelog
            </a>
          </nav>

          <div className="flex gap-5">
            <XSocial className="text-white/40 hover:text-white hover:scale-105 transition 
              cursor-pointer" />
            <InstaSocial className="text-white/40 hover:text-white hover:scale-105 transition
              cursor-pointer" />
            <YTSocial className="text-white/40 hover:text-white hover:scale-105 transition
              cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};
