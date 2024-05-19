import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "@/images/logo.png";

export default function Section1() {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="overflow-hidden">
      <div className="relative w-screen h-screen">
        <video
          autoPlay
          preload="auto"
          loop
          className="absolute object-cover w-full h-full -z-10"
          muted
        >
          <source src={"/videos/gearmoving.mp4"} type="video/mp4" />
          Sorry, your browser doesn&apos;t support videos.
        </video>
        <div className="absolute top-1/2 left-[5vw] -translate-y-1/2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={variants}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex items-center gap-4"
          >
            <Image
              src={Logo}
              width={0}
              height={0}
              alt=""
              className="w-[70px] h-[70px]"
            />
            <h1 className="font-bold text-[70px] leading-[70px]">
              Clockwrok Labs <br />
            </h1>
          </motion.div>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={variants}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="text-gray-100 text-[40px]"
          >
            Creating virtual worlds through precision engineering.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
