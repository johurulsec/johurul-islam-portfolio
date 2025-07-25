import { motion } from "framer-motion";

const Stairs = () => {
  // variants
  const stairAnimation = {
    initial: {
      top: "0%",
    },
    animate: {
      top: "100%",
    },
    exit: {
      top: ["100%", "0%"],
    },
  };

  const reverseIndex = (index) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
  };

  return (
    <>
      {/* render 6 motion divs,each represent a step of stairs. each div will have the same animation define by stairanimation object.the delay of each div is caculated dynamically based on its reverse index creating a stiggered effect with descresing delay for the each subsequent step  */}

      
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-white relative"
          ></motion.div>
        );
      })}
    </>
  );
};

export default Stairs;
