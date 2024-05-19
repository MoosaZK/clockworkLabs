import Image from "next/image";
import { motion } from "framer-motion";

import AlexImg from "@/images/team/alex.jpeg";
import MathiasImg from "@/images/team/mathias.jpeg";
import TylerImg from "@/images/team/tyler.jpeg";
import PhobeImg from "@/images/team/phobe.jpeg";

const team = [
  {
    image: MathiasImg,
    name: "Mathias Pletscher",
    position: "Director of Communications",
  },
  { image: AlexImg, name: "Alessandro Asoni", position: "Founder" },
  { image: TylerImg, name: "Tyler C.", position: "Founder" },
  { image: PhobeImg, name: "Phoebe Goldman", position: "Software Engineer" },
];
export default function Section4() {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={variants}
      transition={{ duration: 1, ease: "easeOut" }}
      className="container mx-auto my-20"
    >
      <h2 className=" text-[40px] text-center">Our Team</h2>
      <hr className="w-20 h-[2px] bg-white mx-auto" />
      <div className="flex items-center justify-center gap-20 py-10 ">
        {team.map((member, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center gap-3"
          >
            <Image
              src={member.image}
              alt=""
              width={0}
              height={0}
              className="w-[100px] aspect-square rounded-full"
            />
            <p className="text-[20px] ">{member.name}</p>
            <p className="text-gray-500">{member.position}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
