import "./App.scss";
import React, { useEffect, useState } from "react";
import List from "./components/List";
import Edit from "./components/Edit";
import { API_GET_DATA } from "./global/constants.jsx";

async function fetchData(setData) {
  const res = await fetch(API_GET_DATA);
  const { data } = await res.json();
  console.log(data);
  setData(data);
}

async function fetchSetData(data) {
  await fetch(API_GET_DATA, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ data }),
  });
}

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchSetData(data);
  }, [data]);
  useEffect(() => {
    fetchData(setData);
  }, []);
  return (
    <>
      <div className="todo">
        <h1>ToDoList</h1>
        <Edit add={setData} />
        <List listData={data} deleteData={setData} />
      </div>
    </>
  );
}

export default App;
