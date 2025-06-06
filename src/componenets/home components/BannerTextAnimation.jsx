import React, { useState, useEffect } from "react";

const Typewriter = () => {
  const words = ["developer", "writer", "reader", "human"];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const typeSpeed = isDeleting ? 60 : 120;

    const timeout = setTimeout(() => {
      setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));

      if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, typeSpeed);

    setText(currentWord.substring(0, charIndex));

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <div className="bg-[#182028] h-screen flex flex-col justify-center">
      <h1
        className="text-[9vmin] text-[#8bf] text-left font-bold font-[Lato] ml-8 my-4"
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

export default Typewriter;
