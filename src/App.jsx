import EmailDetail from "./components/email-detail/EmailDetail";
import AllEmails from "./components/emails/AllEmails";
import Header from "./components/header/Header";
import { useDivide } from "./hooks/useDivide";

const App = () => {
  const { isVisible } = useDivide();

  return (
    <main className="main">
      <Header />
      <div className="wrapper">
        <AllEmails />
        {isVisible ? <EmailDetail /> : null}
      </div>
    </main>
  );
};

export default App;
