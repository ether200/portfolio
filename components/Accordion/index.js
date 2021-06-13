import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = ({ index, selected, setSelected, question, content }) => {
  const isOpen = index === selected;

  return (
    <>
      <motion.div
        initial={false}
        animate={{ backgroundColor: isOpen ? "#b7306c" : "#1e2761" }}
        onClick={() => setSelected(isOpen ? false : index)}
        className="questionContainer"
      >
        <h2>{question}</h2>
        {isOpen ? <span>-</span> : <span>+</span>}
      </motion.div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="contentContainer"
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <motion.div
              variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
              transition={{ duration: 0.8 }}
              className="contentContainer__content"
              dangerouslySetInnerHTML={{ __html: content }}
            ></motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Accordion;
