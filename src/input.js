import React from "react";

export default function Input(props) {
    const optionList = props.userData.map((person, index) => (
    <option value={person}>{person}</option>)
    );

  return (
    <form onSubmit={props.submitChange}>
      <li>
        <label htmlFor="name">Who's got it:</label>
        <select id="name" type="text">
            {optionList}
        </select>
      </li>

      <li>
        <label htmlFor="when">When did they borrow it?:</label>
        <input id="when" type="text"></input>
      </li>
      <button>Submit</button>
    </form>
  );
}
