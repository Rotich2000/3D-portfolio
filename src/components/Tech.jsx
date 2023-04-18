import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const Tech = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span className="hash-span" id="tech">
        &nbsp;
      </span>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map(({ name, icon }) => (
          <div className="w-28 h-28" key={name}>
            <BallCanvas icon={icon} />
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Tech;
