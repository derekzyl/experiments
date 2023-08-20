import React, { useState } from "react";
import "./CollectInput.scss";

type Props = { submitHandler: (arg0: string) => void };

const CollectInput = ({ submitHandler }: Props) => {
  const [text, setText] = useState("");

  const handleTextAreaKeyDown = (
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (e.key === "Enter" && e.shiftKey) {
      e.preventDefault();
      submitHandler(text);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitHandler(text);
  };

  return (
    <form
      className="collect-input-form"
      data-testid="collect-input-form"
      onSubmit={handleFormSubmit}
    >
      <textarea
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleTextAreaKeyDown}
      ></textarea>
      <input type="submit" value="Correct Spelling" />
    </form>
  );
};

export default CollectInput;
