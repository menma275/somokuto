import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Data } from "../types/data";

const DisplayText: React.FC<Data> = ({ somokuto }: Data) => {
  const [count, setCount] = useState<number>(0);
  const [listLen, setListLen] = useState<number>(0);
  const [lastSwitchTime, setLastSwitchTime] = useState<number>(Date.now());

  const switchText = (direction: string) => {
    const currentTime = Date.now();

    if (currentTime - lastSwitchTime < 1000) return;

    setLastSwitchTime(currentTime);

    setCount((prevCount) => {
      if (listLen === 0) return 0;
      if (direction === "next") {
        return (prevCount + 1) % listLen;
      } else if (direction === "prev") {
        return (prevCount - 1 + listLen) % listLen;
      }
      return prevCount;
    });
  };

  const setRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * listLen);
    setCount(randomNum);
  };

  useEffect(() => {
    if (somokuto?.length > 0) setListLen(somokuto.length);
  }, [somokuto]);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      const threshold = 10;
      if (event.deltaY > threshold) {
        switchText("next");
      } else if (event.deltaY < -threshold) {
        switchText("prev");
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      const touchStartX = event.touches[0].clientX;
      const screenWidth = window.innerWidth;
      if (touchStartX > screenWidth / 2) {
        switchText("next");
      } else {
        switchText("prev");
      }
    };

    window.addEventListener("wheel", handleScroll);
    window.addEventListener("touchstart", handleTouchStart);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
    };
  }, [listLen, lastSwitchTime]);

  return (
    <div className="mix-blend-multiply">
      <button
        onClick={() => setRandomNumber()}
        className="text-xs fixed flex flex-col items-end right-6 bottom-6"
      >
        <p>Random</p>
        <p className="w-fit">
          {count + 1} / {listLen}
        </p>
      </button>
      <div className="w-full h-full cursor-default bg-transparent">
        <motion.p
          key={count}
          initial={{ opacity: 0, filter: "blur(20px)" }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            transition: { delay: 0.1, ease: "easeInOut", duration: 0.5 },
          }}
          className="vertical-rl tracking-[0.5rem] fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 whitespace-nowrap"
        >
          {somokuto?.[count]}
        </motion.p>
      </div>
    </div>
  );
};
export default DisplayText;
