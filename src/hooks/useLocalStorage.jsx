import React, { useEffect, useState } from "react";

function useLocalStorage(key, defaultValue) {
  console.log(key, defaultValue);
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (e) {
      console.error(
        "An error has occurred while setting the and parsing the passed key"
      );
      currentValue = defaultValue;
    }

    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}

export default useLocalStorage;
