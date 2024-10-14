import { createContext, useState } from "react";

export const DivideContext = createContext({
  isVisible: null,
  handleToggleVisible: (bool) => {},
});

export const DivideContextProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleVisible = (bool) => {
    setIsVisible(bool);
  };

  return (
    <DivideContext.Provider value={{ isVisible, handleToggleVisible }}>
      {children}
    </DivideContext.Provider>
  );
};
