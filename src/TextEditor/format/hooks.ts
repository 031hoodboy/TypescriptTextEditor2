import { useState } from "react";

export const useToggleFormat = (formats: string | any[]) => {
  const [enableFormat, setEnableFormat] = useState(formats.length > 0);

  const toggleFormat = () => setEnableFormat(!enableFormat);

  return [enableFormat, toggleFormat];
};
