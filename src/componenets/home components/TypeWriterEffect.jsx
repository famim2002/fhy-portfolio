import React, { useState, useEffect } from "react";

const TypeWriterEffect = () => {
  const words = ["famim hayat", "a web-developer", "a react-developer"];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delayAfterFullWord, setDelayAfterFullWord] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 50 : 120;

    let timeout;

    if (delayAfterFullWord) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
        setDelayAfterFullWord(false);
      }, 1000);
    } else {
      timeout = setTimeout(() => {
        if (!isDeleting) {
          if (charIndex < currentWord.length) {
            const nextIndex = charIndex + 1;
            setCharIndex(nextIndex);
            setText(currentWord.substring(0, nextIndex));

            if (nextIndex === currentWord.length) {
              setDelayAfterFullWord(true); // Trigger pause *after* full word typed
            }
          }
        } else {
          if (charIndex > 0) {
            const nextIndex = charIndex - 1;
            setCharIndex(nextIndex);
            setText(currentWord.substring(0, nextIndex));
          } else {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, delayAfterFullWord]);

  return (
    <div className=" flex flex-col justify-center">
      <h1
        className="text-[clamp(1.5rem,8vw,2rem)] text-center md:text-5xl lg:text-[clamp(1.2rem,8vw,2rem)]  xl:text-5xl 2xl:text-6xl text-red-600 lg:text-left font-bold font-pixelFont ml-8 my-4"
        aria-label="Hi! I'm a developer"
      >
        <span className="block sm:inline  lg:block 2xl:inline">
          Hi! I'm&nbsp;
        </span>
        <span
          aria-live="polite"
          className=" inline  relative pr-1 after:content-['|'] after:animate-pulse after:absolute after:right-0 after:top-0"
        >
          {text}
        </span>
      </h1>
    </div>
  );
};

export default TypeWriterEffect;
