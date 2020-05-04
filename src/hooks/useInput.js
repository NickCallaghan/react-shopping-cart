import { useState } from "react";

export const useInput = (initalVal = "") => {
  const [state, setState] = useState(initalVal);

  const reset = () => setState("");

  return [state, setState, reset];
};
