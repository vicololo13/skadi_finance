import ToggleButton from "@material-ui/lab/ToggleButton";
import { Icon } from "@olympusdao/component-library";
interface IThemeSwitcherProps {
  theme: string;
  toggleTheme: (e: any) => void;
}

function ThemeSwitcher({ theme, toggleTheme }: IThemeSwitcherProps) {
  return (
    <ToggleButton className="toggle-button" type="button" title={"Change Theme"} value="check" onClick={toggleTheme}>
      {theme === "dark" ? <Icon name={"moon"} color={"primary"} /> : <Icon name={"sun"} color={"primary"} />}
    </ToggleButton>
  );
}

export default ThemeSwitcher;
