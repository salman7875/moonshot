import { useEffect, useRef, useState } from "react";

import styles from "./all-email.module.css";
import EmailItem from "./EmailItem";
import { useEmail } from "../../hooks/useEmail";
import { getParams } from "../../utils/url.utils";
import useUrlChange from "../../hooks/useUrlChange";
import useFetchAllEmail from "../../hooks/useFetchAllEmail";

const AllEmails = () => {
  const [filter, setFilter] = useState(() => getParams("type"));
  useUrlChange("urlChange", handleCheckURLChange);
  const { data, error, isLoading } = useFetchAllEmail(
    `https://flipkart-email-mock.vercel.app?page=1`
  );
  const { data: emails } = useEmail();
  const [emailData, setEmailData] = useState([]);
  const containerRef = useRef();

  const filterEmails = async () => {
    const updatedData = emails.filter((data) => {
      if (filter === "favourites") {
        return data.favourite;
      } else if (filter === "read") {
        return data.read;
      } else if (filter === "unread") {
        return !data.read;
      }
    });
    setEmailData(updatedData);
  };

  function handleCheckURLChange() {
    const id = getParams("type");
    setFilter(id);
  }

  useEffect(() => {
    if (data) {
      setEmailData(data);
    }
  }, [data]);

  useEffect(() => {
    filterEmails();
  }, [filter]);

  if (isLoading) {
    return <div className="loader"></div>;
  }

  return (
    <div className={styles.left_section} ref={containerRef}>
      {error !== null && <p>{error}</p>}
      {emailData.length > 0 ? (
        emailData.map((email) => (
          <EmailItem key={email.id} email={email} styles={styles} />
        ))
      ) : (
        <p className="empty">No data</p>
      )}
    </div>
  );
};

export default AllEmails;
