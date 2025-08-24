import React from "react";

type Props = {
  theme: string;
  toggle: () => void;
};

const ThemeToggle: React.FC<Props> = ({ theme, toggle }) => (
  <button
    className="mb-4 px-3 py-1 rounded border"
    onClick={toggle}
    aria-label="Toggle Theme"
  >
    {theme === "light" ? "🌞 Light" : "🌙 Dark"}
  </button>
);

export default ThemeToggle;