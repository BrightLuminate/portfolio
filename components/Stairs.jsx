import {animate, motion } from "framer-motion";

// variants
const stairAnimation = {
    initial: {
        top: "-100%",
    },
    animate: {
        top: "100%",
    },
    
};

// calculate the reverse index fot staggred delay
 
const reverseIndex = (index) => {
 const totalSteps = 6; // number of steps
 return totalSteps - index - 1
}



const Stairs = () => {
  return (
    <>
  {/* render 6 motion divs, each representing a step of the stairs.
  Each div will have the sane animation defined by the stairsAnimation object,
  The delay for div is calculated sinamically based on it's reverse index,
  creating a staggered effect with decreasing delay for each subsequent step.
  */}
    {[...Array(6)].map((_, index) => {
    return(

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
        />
    );
    })}
  </>
  ); 
};

export default Stairs;