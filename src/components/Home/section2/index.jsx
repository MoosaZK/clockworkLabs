import Image from "next/image";
import { motion } from "framer-motion";

import game from "@/images/game.png";
export default function Section2() {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="container mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={variants}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center justify-center py-20 text-center"
      >
        <h2 className=" text-[40px]">Our Focus</h2>
        <hr className="w-20 h-[2px] bg-white" />
        <p className="mt-10 text-[20px] text-gray-500">
          We are a new venture backed game studio, which is focused on building
          massively-multiplayer “societal games” that are less focused on pure
          combat and instead encourage social interaction and cooperation
          between players. We aim to rekindle the social spirit of massively
          multiplayer games and foster creative collaboration in our virtual
          worlds.
        </p>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={variants}
        transition={{ duration: 1, ease: "easeOut" }} className="flex items-center gap-10">
        <div className="w-1/2">
          <h2 className="text-[40px]">Why Games</h2>
          <hr className="ml-2 w-32 h-[2px] bg-white" />
          <p className="mt-10 text-[20px] text-gray-500">
            We are a new venture backed game studio, which is focused on
            building massively-multiplayer “societal games” that are less
            focused on pure combat and instead encourage social interaction and
            cooperation between players. We aim to rekindle the social spirit of
            massively multiplayer games and foster creative collaboration in our
            virtual worlds.
          </p>
        </div>
        <div className="w-1/2 aspect-square ">
          <Image
            src={game}
            width={0}
            height={0}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      </motion.div>
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={variants}
        transition={{ duration: 1, ease: "easeOut" }} className="flex items-center gap-10 mt-10">
        <div className="w-1/2 aspect-square ">
          <Image
            src={game}
            width={0}
            height={0}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-1/2">
          <h2 className="text-[40px]">Art & Engineering</h2>
          <hr className="ml-2 w-[250px] h-[2px] bg-white" />
          <p className="mt-10 text-[20px] text-gray-500">
            Games bridge the gap between the worlds of art and engineering.
            Developing games presents some of the most challenging engineering
            problems in computer science and distributed systems, while also
            requiring us to imagine and craft new worlds and stories. Only
            through careful execution in all disciplines can we create a magical
            new experience for players.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
