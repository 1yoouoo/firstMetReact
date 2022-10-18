import React , { useState, useRef } from 'react'
import ItemList from "./Components/ItemList";
import Header from "./Components/Header"

function App() {
    const [data, setData] = useState([
      {details: ""}
    ])
    const dataId = useRef(0)

    const onCreate = ( details ) => {
        const newItem = {
            details,
            id: dataId.current
        }
        dataId.current += 1
        setData([newItem, ...data]);
    }
  return (
    <div className="App">
      <div>
        <h2>To do list</h2>
        <Header onCreate = {onCreate}/>
        <ItemList newItem = {data}/>
      </div>
    </div>
  );
}

export default App;
