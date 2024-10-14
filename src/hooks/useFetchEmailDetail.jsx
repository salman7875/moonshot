import { useEffect, useState } from "react";
import { useEmail } from "./useEmail";

const useFetchEmailDetail = (url, args) => {
  const [data, setData] = useState(null);
  const { data: emailData } = useEmail();
  const [states, setStates] = useState({ error: null, isLoading: false });

  useEffect(() => {
    const fetchData = async () => {
      setStates((prev) => ({ ...prev, isLoading: true }));
      try {
        const res = await fetch(url);
        const data = await res.json();
        const emailInfo = emailData.find((d) => d.id == data.id);
        const { from, date, favourite, subject } = emailInfo;
        const formattedData = { ...data, from, subject, date, favourite };
        setData(formattedData);
        setStates((prev) => ({ ...prev, isLoading: false }));
      } catch (err) {
        setStates({ error: err.message, isLoading: false });
      }
    };
    fetchData();
  }, [url, ...args]);

  return { data, states };
};

export default useFetchEmailDetail;
