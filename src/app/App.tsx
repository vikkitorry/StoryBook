import { Link } from "react-router-dom";
import "./styles/index.scss";
import { useTheme } from "./providers/themeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

const App = () => {
  const { theme } = useTheme();
  const bool = true;
  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar/>
      <AppRouter/>
      <ThemeSwitcher/>
    </div>
  );
};

export default App;
