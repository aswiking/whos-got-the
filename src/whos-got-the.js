import React, { useState } from "react";
import Item from "./item";
import Form from "./form";

export default function WhosGotThe() {
  const [listData, setList] = useState([
    {
      itemName: "Bike",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/81loqD47lFL._AC_SL1500_.jpg",
      timeBorrowed: "Wednesday",
      personBorrowed: "Timo",
      timeEdited: new Date(),
      isEditing: false
    }
  ]);

  const [userData, setUsers] = useState([
    "Sofia",
    "Caroline",
    "Franklin",
    "Mike"
  ]);


  function newListItem(event) {
    event.preventDefault();
    setList([
      ...listData,
      {
        itemName: event.target.itemName.value,
        imageUrl: event.target.imageUrl.value,
        timeBorrowed: null,
        personBorrowed: null,
        isEditing: false
      }
    ]);
    event.target.reset();
  }

  function changeItemStatus(itemIndex) {
    setList(
      listData.map((item, index) => {
        if (itemIndex === index) {
          return {
            itemName: item.itemName,
            imageUrl: item.imageUrl,
            timeBorrowed: item.timeBorrowed,
            personBorrowed: item.personBorrowed,
            timeEdited: new Date(),
            isEditing: true
          };
        } else {
          return item;
        }
      })
    );
  }

  function submitChange(event, itemIndex) {
    setList(
      listData.map((item, index) => {
        if (itemIndex === index) {
          console.log(index, itemIndex);
          return {
            itemName: item.itemName,
            imageUrl: item.imageUrl,
            imageAlt: item.itemName,
            personBorrowed: event.target.name.value,
            timeBorrowed: event.target.when.value,
            timeEdited: event.target.timeEdited,
            isEditing: false
          };
        } else {
          return item;
        }
      })
    );
  }

  const list = listData.map((item, index) => (
    <Item
      key={index}
      {...item}
      //what am I doing here? ^
      changeItemStatus={() => changeItemStatus(index)}
      submitChange={event => submitChange(event, index)}
      userData={userData}
    />
  ));

  return (
    <div>
      <h1>Who's Got the [Blank]</h1>
      <ul>{list}</ul>
      <Form newListItem={newListItem} />
    </div>
  );
}
