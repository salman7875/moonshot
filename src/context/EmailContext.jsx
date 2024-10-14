import { createContext, useCallback, useState } from "react";

export const EmailContext = createContext({
  data: null,
  handleChangeData: (arg) => {},
});

const getPersistentData = (key) => {
  const persistenData = localStorage.getItem(key);
  return persistenData ? JSON.parse(persistenData) : [];
};

export const EmailContextProvider = ({ children }) => {
  const [data, setData] = useState(() => getPersistentData());

  const handleChangeData = useCallback((args) => {
    setData(args);
    localStorage.setItem("email-data", JSON.stringify(args));
  }, []);

  return (
    <EmailContext.Provider value={{ data, handleChangeData }}>
      {children}
    </EmailContext.Provider>
  );
};
