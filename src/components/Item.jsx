import React from "react";

const Item = ({ id, note, date, time, deleteData }) => {
  const deleteItem = () => {
    deleteData(function (prev) {
      return prev.filter((item) => item.id !== id);
      
    });
  };
  return (
    <div className="item">
      <div className="txt">
        <p>{note}</p>
        <p>{`${date} ${time}`}</p>
      </div>
      <button className="delete" onClick={deleteItem}>
        刪除
      </button>
    </div>
  );
};

export default Item;
