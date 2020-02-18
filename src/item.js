import React from "react";
import Input from "./input";

export default function Item(props) {
  if (props.isEditing) {
    return (
      <li className="list-item">
        <div>
          <ul>
            <li>
              <h2>Item: {props.itemName}</h2>
            </li>
            <li>
              <img
                alt={props.imageAlt}
                src={props.imageUrl}
                width="200px"
              ></img>
            </li>
            <Input
              submitChange={props.submitChange}
              userData={props.userData}
            />
          </ul>
        </div>
      </li>
    );
  } else {
    return (
      <li className="list-item">
        <div>
          <ul>
            <li>
              <h2>Item: {props.itemName}</h2>
              <p>Edited on {props.timeEdited.toLocaleDateString('en-GB')}</p>
            </li>
            <li>
              <img
                alt={props.imageAlt}
                src={props.imageUrl}
                width="200px"
              ></img>
            </li>
            <li>Who has it: {props.personBorrowed}</li>
            <li>When was it borrowed: {props.timeBorrowed}</li>
          </ul>
        </div>
        <button onClick={props.changeItemStatus}>Change</button>
      </li>
    );
  }
}
