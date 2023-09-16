import React, { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ add }) => {
  const [note, setNote] = useState("");
  const noteChange = (e) => {
    setNote(e.target.value);
  };
  const [date, setDate] = useState("");
  const dateChange = (e) => {
    setDate(e.target.value);
  };
  const [time, setTime] = useState("");
  const timeChange = (e) => {
    setTime(e.target.value);
  };
//   console.log(note, time, date);
  const addItem = () => {
    setNote("");
    setDate("");
    setTime("");
    add(function (prev) {
      return [
        {
          id: v4(),
          note,
          date,
          time,
        },
        ...prev,
      ];
    });
  };
  return (
    <>
      <span>記事：</span>
      <input
        type="text"
        placeholder="新增代辦事項"
        value={note}
        onChange={noteChange}
      />
      <div className="time">
        <span>日期：</span>
        <input type="date" value={date} onChange={dateChange} />
        <span>時間：</span>
        <input type="time" value={time} onChange={timeChange} />
      </div>
      <button onClick={addItem} className="btn">
        新增
      </button>
    </>
  );
};

export default Edit;
