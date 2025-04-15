import { FC } from "react";
import { motion } from "framer-motion";
interface HeadingProps {
  title: string;
  isCentered?: boolean;
}

const Heading: FC<HeadingProps> = ({ title, isCentered }) => {
  return (
   

<motion.h1
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.6 }} // once: true = تشتغل مرة واحدة فقط
  className={`${
    isCentered && "text-center"
  } bg-clip-text text-transparent bg-gradient-to-tr from-sky-200 via-sky-500 to-sky-200 font-extrabold text-3xl sm:text-4xl lg:text-5xl`}
>
  {title}
</motion.h1>

  );
};

export default Heading;
