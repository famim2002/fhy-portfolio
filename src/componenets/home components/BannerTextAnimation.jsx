import React, { useState, useEffect } from "react";

const Typewriter = () => {
  const words = ["famim hayat", "a web-developer", "a react-developer"];
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
    <div className="  flex  items-center">
      <h1
        className=" text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-lightBrandColor text-left  font-pixelFont ml-8 my-4"
        aria-label="Hi! I'm a developer"
      >
        Hi !,  I'm<br/>&nbsp;
        <span className="relative after:content-['|'] after:animate-pulse">
          {text}
        </span>
      </h1>
    </div>
  );
};

export default Typewriter;
