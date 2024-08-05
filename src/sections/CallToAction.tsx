import Button from "@/components/Button";

import starsBg from "@/assets/stars.png";
import gridLines from "@/assets/grid-lines.png";

export const CallToAction = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="border border-white/15 py-24 rounded-xl overflow-hidden
          relative"
          style={{ backgroundImage: `url(${starsBg.src})` }}>
          <div className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay
            [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]"
            style={{ backgroundImage: `url(${gridLines.src})` }}></div>

          <div className="relative">
            <h2 className="text-5xl md:text-6xl tracking-tighter text-center font-medium
              max-w-sm mx-auto">
              AI-driven SEO for everyone.
            </h2>

            <p className="text-center text-lg md:text-xl text-white/70 px-4 mt-5 tracking-tight
              max-w-xs mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <div className="flex justify-center mt-5">
              <Button text="Learn More" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
