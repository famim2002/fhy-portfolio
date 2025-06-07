import React, { useState, useEffect } from "react";

const TypeWriterEffect = () => {
  const words = ["developer", "writer", "reader", "human"];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delayAfterFullWord, setDelayAfterFullWord] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (delayAfterFullWord) {
      const pause = setTimeout(() => {
        setIsDeleting(true);
        setDelayAfterFullWord(false);
      }, 1000);
      return () => clearTimeout(pause);
    }

    const typingSpeed = isDeleting ? 50 : 120;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCharIndex((prev) => {
          const next = prev + 1;
          if (next === currentWord.length) {
            setDelayAfterFullWord(true);
          }
          return next;
        });
      } else {
        setCharIndex((prev) => {
          const next = prev - 1;
          if (next === 0) {
            setIsDeleting(false);
            setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          }
          return next;
        });
      }

      setText(currentWord.substring(0, charIndex));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, delayAfterFullWord]);

  return (
    <div className="bg-[#182028] h-screen flex flex-col justify-center">
      <h1
        className="text-[9vmin] text-red-600 text-left font-bold font-[Lato] ml-8 my-4"
        aria-label="Hi! I'm a developer"
      >
        Hi! I'm a&nbsp;
        <span className="relative after:content-['|'] after:animate-pulse">
          {text}
        </span>
      </h1>
    </div>
  );
};

export default TypeWriterEffect;
