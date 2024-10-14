import { useContext } from "react";
import { EmailContext } from "../context/EmailContext";

export const useEmail = () => {
  const ctx = useContext(EmailContext);
  return ctx;
};
