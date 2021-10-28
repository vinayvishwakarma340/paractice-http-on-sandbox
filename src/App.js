import "./styles.css";
import Input from "./Input";
import Items from "./Items";
import { useEffect, useState } from "react";

export default function App() {
  const [names, setNames] = useState([]);
  useEffect(() => {
    fetchingData();
  }, []);

  const fetchingData = async () => {
    const response = await fetch(
      "https://practicing-from-codesandbox-default-rtdb.firebaseio.com/personNames.json"
    );
    const data = await response.json();
    const loadedNames = [];
    for (const nameKey in data) {
      loadedNames.push({ id: nameKey, name: data[nameKey].name });
    }
    setNames(loadedNames);
  };


  return (
    <div className="App">
      <Input />
      {names.map((name) => {
        return <Items key={name.id} name={name.name} />;
      })}
    </div>
  );
}
