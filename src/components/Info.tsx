import { AnimatePresence, motion } from "framer-motion";
import { Squircle } from "corner-smoothing";
import { useState, useEffect } from "react";
const Info = () => {
  const [isShowInfo, setIsShowInfo] = useState<boolean>(false);
  const handleClick = () => {
    setIsShowInfo(!isShowInfo);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowInfo(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [isShowInfo]);
  return (
    <>
      <AnimatePresence>
        {isShowInfo && (
          <motion.div
            className="fixed bottom-3 left-3 text-xs"
            initial={{ x: -25, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -25, opacity: 0 }}
            transition={{ delay: 0.1, duration: 1, type: "spring" }}
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
              <table>
                <tr>
                  <th className="text-left pr-4">Author</th>
                  <td>
                    <a
                      className="underline"
                      href="https://ja.wikipedia.org/wiki/%E7%A8%AE%E7%94%B0%E5%B1%B1%E9%A0%AD%E7%81%AB"
                    >
                      種田山頭火
                    </a>
                  </td>
                </tr>
                <tr>
                  <th className="text-left pr-4">Source</th>
                  <td>
                    <a
                      className="underline"
                      href="https://www.aozora.gr.jp/cards/000146/files/749_34457.html"
                    >
                      青空文庫
                    </a>
                  </td>
                </tr>
                <tr>
                  <th className="text-left pr-4">Code</th>
                  <td>
                    <a
                      className="underline"
                      href="https://www.aozora.gr.jp/cards/000146/files/749_34457.html"
                    >
                      GitHub
                    </a>
                  </td>
                </tr>
              </table>
            </Squircle>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!isShowInfo && (
          <motion.button
            onClick={handleClick}
            className="fixed bottom-6 left-6 "
            initial={{ x: -25, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -25, opacity: 0 }}
            transition={{ delay: 0.1, duration: 1, type: "spring" }}
          >
            <p className="text-xs">Info</p>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Info;
