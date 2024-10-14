import { useEffect } from "react";

const useUrlChange = (eventName, callback, args = []) => {
  useEffect(() => {
    window.addEventListener(eventName, callback);

    return () => {
      window.removeEventListener(eventName, callback);
    };
  }, [...args]);
  return {};
};

export default useUrlChange;
