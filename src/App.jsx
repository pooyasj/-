import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [name, addname] = useState([]);
  useEffect(function () {
    const p = axios.get("https://fakestoreapi.com/carts").then(function (a) {
       addname(a.data);
    });
  }, []);
  console.log(name)
  return (
    <>
      <ul>
        {name.map(function (person) {
        return  <li key={person.id}>{person.userId}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
