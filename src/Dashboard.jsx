import { useState } from "react";
import "./App.css";
import Card from "./card";
import AddItem from "./AddItem";
const Dashboard = () => {
  const [todoList, setTodoList] = useState([
    { name: "test", id: 0 },
    { name: "test1", id: 1 },
    { name: "test2", id: 2 },
    { name: "test3", id: 3 },
  ]);
  const [cards, setCard] = useState([
    { name: "child1", id: 0, listId: 0 },
    { name: "child2", id: 1, listId: 1 },
    { name: "child3", id: 2, listId: 0 },
    { name: "child4", id: 3, listId: 1 },
    { name: "child5", id: 4, listId: 0 },
    { name: "child6", id: 5, listId: 0 },
  ]);
  const handleAddList = (name) => {
    const list = [...todoList];
    list.push({ name, id: todoList.length });
    setTodoList(list);
  };
  const onDragOver = (event) => {
    event.preventDefault();
  };
  // const handleDeleteList = (deleteId) => {
  //   const list = todoList.fiter(({ id }) => id !== deleteId);
  //   setTodoList(list);
  // };
  const handleAddCard = (name, listId) => {
    const list = [...cards];
    list.push({ name, id: cards.length, listId });
    setCard(list);
  };
  // const handleCardDelete = (deleteId) => {
  //   const list = cards.fiter(({ id }) => id !== deleteId);
  //   setCard(list);
  // };
  const cardList = cards.reduce((list, value) => {
    if (!(value.listId in list)) {
      list[value.listId] = [];
    }
    list[value.listId].push(value);
    return list;
  }, {});
  const onDrop = (event, listId) => {
    const cardId = event.dataTransfer.getData("id");
    const list = cards.map((card) => {
      if (card.id == cardId) {
        card.listId = listId;
      }
      return card;
    });
    console.log(list, cardId);
    setCard(list);
  };
  console.log(cardList);
  return (
    <div>
      <div className="header">Zest Todo List</div>
      <div className="dashboard">
        {todoList.map(({ name, id }) => {
          return (
            <div
              className="list"
              key={id}
              onDrop={(event) => {
                onDrop(event, id);
              }}
              onDragOver={(e) => onDragOver(e)}
            >
              <div className="list-name">{name}</div>
              <Card cardDetails={cardList} id={id} />
              <AddItem
                handleAdd={(name) => handleAddCard(name, id)}
                title={"Add card"}
              />
            </div>
          );
        })}
        <div className="list" key={"add-button"}>
          <AddItem handleAdd={handleAddList} title={"Add Another List"} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
