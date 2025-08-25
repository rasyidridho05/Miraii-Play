import { motion } from "framer-motion";

interface ScrollingBeltProps {
  items: string[];
  mode?: "dark" | "light";
  direction?: "left" | "right";
}

export const ScrollBelt = ({ items, mode = "dark", direction ="left" }: ScrollingBeltProps) => {
  const repeatedItems = [...items, ...items, ...items, ...items, ...items];

  const isDark = mode === "dark";

  return (
    <div
      className={`overflow-hidden whitespace-nowrap py-2 lg:py-4 ${
        isDark ? "bg-[#212121]" : "bg-[#FAFAFA]"
      }`}
    >
      <motion.div
        className="flex gap-10 text-sm font-medium w-max"
        animate={{
          x: direction === "right" ? ["-33.33%", "0%"] : ["0%", "-33.33%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        }}
      >
        {repeatedItems.map((item, index) => (
          <span
            key={index}
            className={` flex items-center px-4 lg:text-2xl ${
              isDark ? "text-[#E600DF]" : "text-[#E600DF]"
            }`}
          >
            ●{" "}
            <p
              className={`pl-4 ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              {item}
            </p>
          </span>
        ))}
      </motion.div>
    </div>
  );
};
