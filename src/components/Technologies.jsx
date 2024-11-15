import { motion } from "framer-motion";
import { FaPython, FaAws } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { DiGithubBadge } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";

const iconVariants = (delay) => ({
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0], // Movimento de flutuação: sobe 10px, depois desce
    transition: {
      repeat: Infinity, // Repetir indefinidamente
      repeatType: "loop", // Tipo de repetição (loop contínuo)
      duration: 4, // Duração total do movimento
      delay: delay, // Atraso individual para cada ícone
      ease: "easeInOut", // Curva de transição suave
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Tecnologias
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(0)} // Sem atraso
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaPython className="text-7xl text-yellow-300" />
        </motion.div>
        <motion.div
          variants={iconVariants(0.3)} // Atraso de 0.3s
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMysql className="text-7xl text-sky-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(0.6)} // Atraso de 0.6s
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaAws className="text-7xl " />
        </motion.div>
        <motion.div
          variants={iconVariants(0.9)} // Atraso de 0.9s
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiGithubBadge className="text-7xl text-white-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.2)} // Atraso de 1.2s
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <IoLogoJavascript className="text-7xl text-orange-700" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
