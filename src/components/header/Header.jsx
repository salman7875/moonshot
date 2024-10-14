import { useEffect, useState } from "react";

import styles from "./header.module.css";
import { HEADER } from "../../constants";
import { setUrlAndDispatchEvent } from "../../utils/url.utils";


const Header = () => {
  const [filter, setFilter] = useState("unread");

  useEffect(() => {
    // CHANGE URL PARAMS AND DISPATCH ACTIONS SO OTHER COMPONENT CAN LISTEN
    setUrlAndDispatchEvent("type", filter, "urlChange");
    setUrlAndDispatchEvent("page", 1, "urlChange");
  }, [filter]);

  const handleChangeFilter = (e) => {
    const id = e.target.id;
    if (id) {
      setFilter(id);
    }
  };

  return (
    <nav className={styles.navbar} onClick={handleChangeFilter}>
      <h2 className={styles.navbar_header}>Filter By:</h2>
      <ul className={styles.navbar_list}>
        {HEADER.map((data) => (
          <li key={data.id} className={styles.navbar_list_item}>
            <button
              className={`${styles.list_item_button} ${
                filter === data.title.toLowerCase() && "active-btn"
              }`}
              id={data.title.toLowerCase()}
            >
              {data.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
