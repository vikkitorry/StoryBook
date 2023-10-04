import { Link } from "react-router-dom";
import "./styles/index.scss";
import { useTheme } from "./providers/themeProvider/ui";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const bool = true;
  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar/>
      <AppRouter/>
      <button onClick={toggleTheme}>TOGGLE</button>
    </div>
  );
};

export default App;
