import { memo, useEffect, useState } from "react";
import { useDivide } from "../../hooks/useDivide";
import { useEmail } from "../../hooks/useEmail";
import { getParams, setUrlAndDispatchEvent } from "../../utils/url.utils";
import { formatDate } from "../../utils/date.utils";
import useUrlChange from "../../hooks/useUrlChange";

const EmailItem = ({ email, styles }) => {
  const { handleToggleVisible, isVisible } = useDivide();
  const { data: emailData, handleChangeData } = useEmail();
  const { id, from, subject, short_description, date, read } = email;
  const [activeMail, setActiveMail] = useState(() => getParams("id"));
  useUrlChange("urlChange", handleUrlChange);

  const opened = (activeMail === id && isVisible) || read;

  const handleOpenEmail = (id) => {
    handleToggleVisible(true);
    setUrlAndDispatchEvent("id", id, "urlChange");

    const updatedData = emailData.map((email) => {
      if (email.id === id) {
        return { ...email, read: true };
      }
      return email;
    });
    handleChangeData(updatedData);
  };

  function handleUrlChange() {
    const id = getParams("id");
    setActiveMail(id);
  }

  return (
    <article
      className={`${styles.article} ${activeMail == id && "active-mail"} ${
        !opened && "unread"
      }`}
      onClick={() => handleOpenEmail(id)}
    >
      <figure className={styles.article_left}>
        <div className={styles.article_left_img}>
          {from.name[0].toUpperCase()}
        </div>
      </figure>
      <section className={styles.article_right}>
        <h4 className={styles.article_right_heading}>
          <span>From: </span>
          {from.name}
          {"<"}
          {from.email}
          {">"}
        </h4>
        <h5 className={styles.article_right_subheading}>
          <span>Subject: </span>
          {subject}
        </h5>
        <p className={styles.article_right_description}>
          {isVisible
            ? short_description.substring(0, 40) + "..."
            : short_description}
        </p>
        <span className={styles.article_right_date}>{formatDate(date)}</span>
      </section>
    </article>
  );
};

export default EmailItem;
