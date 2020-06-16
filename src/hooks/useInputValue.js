import { useState } from "react";

export const useInputValue = () => {
  const [value, setValue] = useState("");
  const onChange = (e) => setValue(e.target.value);

  return { value, onChange };
};
