"use client";
import { useRef } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import Button from "@/components/Button";
import starsBg from "@/assets/stars.png";

export const Hero = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <motion.section
      ref={sectionRef}
      className="h-[492px] md:h-[800px] flex items-center overflow-hidden relative
        [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{
        backgroundImage: `url(${starsBg.src})`,
        backgroundPositionY
      }}
      animate={{
        backgroundPositionX: starsBg.width,
      }}
      transition={{
        duration: 120,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <div className="absolute inset-0 
        bg-[radial-gradient(75%_75%_at_center_center,rgba(140,69,255,0.5)_15%,rgba(14,0,36,0.5)_78%,transparent)]"></div>

      <div className="absolute h-64 md:h-96 w-64 md:w-96 bg-purple-500 rounded-full border border-white/20
        top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))]
        shadow-[-20px_-20px_50px_rgba(255,255,255,0.5),-20px_-20px_80px_rgba(255,255,255,0.1),0_0_50px_rgb(140,69,255)]">
      </div>

      <motion.div
        className="absolute h-[344px] md:h-[580px] w-[344px] md:w-[580px] border 
        border-white rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          rotate: '1turn',
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute h-2 w-2 top-1/2 left-0 bg-white rounded-full -translate-x-1/2
          -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 top-0 left-1/2 bg-white rounded-full -translate-x-1/2
          -translate-y-1/2"></div>
        <div className="absolute h-5 w-5 top-1/2 left-full border border-white rounded-full -translate-x-1/2
          -translate-y-1/2 inline-flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </motion.div>

      <motion.div
        className="absolute h-[444px] md:h-[780px] w-[444px] md:w-[780px] rounded-full border 
        border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          rotate: '-1turn',
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
      ></motion.div>

      <motion.div
        className="absolute h-[544px] md:h-[980px] w-[544px] md:w-[980px] rounded-full border 
        border-white top-1/2 opacity-20 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          rotate: '1turn',
        }}
        transition={{
          duration: 90,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute h-2 w-2 top-1/2 left-0 bg-white rounded-full -translate-x-1/2
          -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 top-1/2 left-full bg-white rounded-full -translate-x-1/2
          -translate-y-1/2"></div>
      </motion.div>

      <div className="container relative mt-16">
        <h1 className="text-8xl md:text-[168px] md:leading-none font-semibold tracking-tighter bg-white
          bg-[radial-gradient(100%_100%_at_top_left,white,white,rgba(74,32,138,0.5))]
          text-transparent bg-clip-text text-center">
          AI SEO
        </h1>

        <p className="text-lg md:text-xl text-white/70 mt-5 text-center max-w-xl mx-auto">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quod
          minima alias ratione quasi odit dolore optio ipsam? Ducimus, autem.
        </p>

        <div className="flex justify-center mt-5">
          <Button text="Learn More" />
        </div>
      </div>
    </motion.section>
  );
};
