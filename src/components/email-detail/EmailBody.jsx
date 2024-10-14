import { useEmail } from "../../hooks/useEmail";
import { formatDate } from "../../utils/date.utils";

const EmailBody = ({ styles, detail }) => {
  const { data: emailData, handleChangeData } = useEmail();

  const openedEmail = emailData.find((d) => d.id == detail.id);

  const handleMarkFavourite = (id) => {
    const updatedData = emailData.map((email) => {
      if (email.id === id) {
        return { ...email, favourite: !email.favourite };
      }
      return email;
    });

    handleChangeData(updatedData);
  };
  return (
    <section className={styles.rightopen_section}>
      <header className={styles.rightopen_header}>
        <div>
          <h2 className={styles.rightopen_heading}>
            <span>From: </span>
            {detail.from.name}
          </h2>
          <h3 className={styles.rightopen_subheading}>
            <span>Subject: </span>
            {detail.subject}
          </h3>
        </div>
        <button
          className={styles.rightopen_btn}
          onClick={() => handleMarkFavourite(detail.id)}
        >
          {openedEmail.favourite ? "Unmark" : "Mark as favourite"}
        </button>
      </header>

      <p className={styles.rightopen_date}>{formatDate(detail.date)}</p>

      <p
        className={styles.rightopen_body}
        dangerouslySetInnerHTML={{ __html: detail.body }}
      />
    </section>
  );
};

export default EmailBody;
