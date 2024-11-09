import { AnimatePresence, motion } from "framer-motion";
import { Squircle } from "corner-smoothing";
import { useEffect, useState } from "react";

const Toast = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed right-3 bottom-3 z-10"
          initial={{ y: 25, opacity: 0, scale: 0.25 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 25, opacity: 0, scale: 0.25 }}
          transition={{ delay: 1.0, duration: 1, type: "spring" }}
        >
          <Squircle
            cornerRadius={10}
            style={{
              width: "fit-content",
              height: "fit-content",
              padding: "0.75rem",
              background: "#efefef",
            }}
          >
            <div className="text-black text-xs flex flex-col gap-1">
              <div className="flex gap-1 justify-between">
                <p>Next</p>
                <p className="bg-neutral-200  px-2 py-0.5 rounded-md">
                  {isTouchDevice ? "Tap Right" : "Swipe Up"}
                </p>
              </div>
              <div className="flex gap-1 justify-between">
                <p>Previous</p>
                <p className="bg-neutral-200  px-2 py-0.5 rounded-md">
                  {isTouchDevice ? "Tap Left" : "Swipe Down"}
                </p>
              </div>
            </div>
          </Squircle>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
