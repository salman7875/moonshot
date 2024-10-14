import { useEffect, useState } from "react";
import { formatEmailData } from "../utils/emaildata.utils";
import { useEmail } from "./useEmail";

const useFetchAllEmail = (url, args = []) => {
  const [data, setData] = useState([]);
  const [states, setStates] = useState({ error: null, isLoading: false });
  const { handleChangeData, data: emails } = useEmail();

  useEffect(() => {
    const controller = new AbortController();
    const fetchAllEmails = async () => {
      setStates((prev) => ({ ...prev, isLoading: true }));
      try {
        const res = await fetch(url, {
          signal: controller.signal,
        });
        const data = await res.json();
        if (emails.length > 0) return;
        const formattedData = formatEmailData(data.list)
        handleChangeData(formattedData);
        console.log(formattedData);

        setData(formattedData);
        setStates((prev) => ({ ...prev, isLoading: false }));
      } catch (err) {
        setStates({ error: err.message, isLoading: false });
      }
    };
    fetchAllEmails();

    return () => {
      controller.abort();
    };
  }, [...args]);

  return { data, ...states };
};

export default useFetchAllEmail;
