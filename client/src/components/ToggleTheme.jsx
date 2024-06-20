import "../styles/toggle-theme.css";
import useTheme from "./hooks/useTheme";

function ToggleTheme() {
  const {ToggleTheme, theme} = useTheme();

  return (
    <label className="toggle">
      <input className="toggle-checkbox" type="checkbox" />
      <div className="toggle-switch" />
    </label>
  );
}

export default ToggleTheme;
