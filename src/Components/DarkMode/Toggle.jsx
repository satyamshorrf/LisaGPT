import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeSwitch = () => {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const handleToggle = () => {
    setIsLightTheme((prevTheme) => !prevTheme);
    // You can also add logic to apply the theme here
  };

  return (
    <button
      className="VPSwitch VPSwitchAppearance"
      type="button"
      role="switch"
      title={isLightTheme ? "Switch to dark theme" : "Switch to light theme"}
      aria-checked={isLightTheme}
      onClick={handleToggle}
    >
      <span className="check">
        <span className="icon">
          {isLightTheme ? <Sun className="vpi-sun sun" /> : <Moon className="vpi-moon moon" />}
        </span>
      </span>
    </button>
  );
};

export default ThemeSwitch;