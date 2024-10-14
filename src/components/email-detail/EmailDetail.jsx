import { useEffect, useMemo, useState } from "react";

import styles from "./email-detail.module.css";
import EmailBody from "./EmailBody";
import { useEmail } from "../../hooks/useEmail";
import { getParams } from "../../utils/url.utils";
import useFetchEmailDetail from "../../hooks/useFetchEmailDetail";
import useUrlChange from "../../hooks/useUrlChange";

function EmailDetail() {
  const [id, setId] = useState(() => getParams("id"));
  const { data: detail, states } = useFetchEmailDetail(
    `https://flipkart-email-mock.vercel.app?id=${id}`,
    [id]
  );
  useUrlChange("urlChange", handleCheckURLChange);

  function handleCheckURLChange() {
    const id = getParams("id");
    setId(id);
  }

  if (states.isLoading) {
    return (
      <div className={styles.right_section}>
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <>
      {detail !== null && (
        <div className={styles.right_section}>
          <figure className={styles.rightopen_figure}>
            <div className={styles.rightopen_figure_img}>
              {detail.from.name[0].toUpperCase()}
            </div>
          </figure>
          <EmailBody detail={detail} styles={styles} />
        </div>
      )}
    </>
  );
}

export default EmailDetail;
