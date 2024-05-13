import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useLocalStorage from "./hooks/useLocalStorage";
import Form from "./Form";

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  return (
    <>
      <button
        onClick={() =>
          theme === "light" ? setTheme("dark") : setTheme("light")
        }
      >
        {theme}
      </button>
      <Form />
    </>
  );
}

export default App;
