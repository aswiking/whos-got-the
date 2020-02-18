import React from "react";

export default function Form(props) {
  return (
    <div>
      <h2>New item</h2>
      <form onSubmit={props.newListItem}>
        <div>
          <label htmlFor="itemName">Item name</label>
          <input id="itemName"></input>
        </div>
        <div>
          <label htmlFor="imageUrl">Image url</label>
          <input id="imageUrl"></input>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
