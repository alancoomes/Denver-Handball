import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../components/Header/Header";

const App = () => {
  return (
    <>
      <Router>
        <Header></Header>
      </Router>
    </>
  );
};

render(<App />, document.getElementsById("root"));
