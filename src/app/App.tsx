import { Link } from "react-router-dom";
import "./styles/index.scss";
import { useTheme } from "./providers/themeProvider/ui";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const bool = true;
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <AppRouter/>
    </div>
  );
};

export default App;
