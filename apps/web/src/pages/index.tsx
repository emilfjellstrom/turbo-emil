import { useTheme } from "next-themes";
import { Header } from "../components/Header";

export default function Web() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Header
        toggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")}
        theme={theme === "dark" ? "light" : "dark"}
      />
      <div className="container mx-auto">
      
      </div>
    </>
  );
}
