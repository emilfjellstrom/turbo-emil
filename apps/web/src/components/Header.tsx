import React from "react";

enum SVGTheme {
  light = "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
  dark = "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z",
}

export const Header = ({
  toggleTheme,
  theme,
}: {
  toggleTheme: () => void;
  theme: keyof typeof SVGTheme;
}) => {
  console.log(theme);
  return (
    <nav className="m-8">
      <div className="max-w-7xl mx-auto p-8">
        <div className="flex items-center relative h-16">
          <div className="flex grow items-center justify-between">
            <h1 className="text-6xl text-cartoon-blue dark:text-cartoon-red">Emil Fjellström</h1>
            <button
              type="button"
              className="focus:outline-none"
              onClick={toggleTheme}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill={theme === "light" ? "Yellow" : "#18181b"}
                viewBox="0 0 24 24"
                stroke={theme === "light" ? "Yellow" : "#18181b"}
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={SVGTheme[theme]}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
