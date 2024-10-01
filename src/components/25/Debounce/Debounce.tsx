import React, { useEffect, useState } from "react";

const useDebounce = (text: string, delay: number) => {
  const [debounceText, setDebounceText] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceText(text);
    }, delay);

    return () => {
        clearTimeout(timer)
    }
  }, [text, delay]);

  return debounceText;
};

const Debounce = () => {
  const [text, setText] = useState<string>("");
  const debounceText = useDebounce(text, 5000);

  const handleChange = (e: { target: { value: any } }) => {
    setText(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        onChange={handleChange}
        className="border-2 border-black"
      />
      <div>Debounce Text: {debounceText}</div>
    </>
  );
};

export default Debounce;
