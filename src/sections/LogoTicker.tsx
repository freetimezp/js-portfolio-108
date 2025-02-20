/* eslint-disable @next/next/no-img-element */
"use client";
import { motion } from "framer-motion";

import acmeLogo from "@/assets/logo-acme.png";
import epexLogo from "@/assets/logo-apex.png";
import celestialLogo from "@/assets/logo-celestial.png";
import quentomLogo from "@/assets/logo-quantum.png";
import pulseLogo from "@/assets/logo-pulse.png";
import echoLogo from "@/assets/logo-echo.png";

export const LogoTicker = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="flex items-center gap-5">
          <div className="flex-1 md:flex-none">
            <h2>
              Trusted by top innovative teams
            </h2>
          </div>

          <div className="flex flex-1 overflow-hidden
            [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              className="flex flex-none gap-14 pr-14 -translate-x-1/2"
              initial={{
                translateX: "-50%",
              }}
              animate={{
                translateX: "0",
              }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: 'linear',
              }}
            >
              {[
                acmeLogo,
                epexLogo,
                celestialLogo,
                quentomLogo,
                pulseLogo,
                echoLogo,
                acmeLogo,
                epexLogo,
                celestialLogo,
                quentomLogo,
                pulseLogo,
                echoLogo
              ].map((logo, index) => (
                <img src={logo.src} alt="logo" key={index} className="h-6 w-auto" />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
