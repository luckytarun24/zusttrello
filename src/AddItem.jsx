import { useState } from "react";

const AddItem = ({ handleAdd, handleDelete, title }) => {
  const [addList, setaddList] = useState(false);
  const [textfield, handleTextFieldChange] = useState("");
  const onDelete = () => {
    if (handleDelete) {
      handleDelete();
    }
    setaddList(false);
  };
  const onAdd = (text) => {
    handleAdd(text);
    handleTextFieldChange("");
    setaddList("");
  };

  return addList ? (
    <div className="addfield">
      <input
        className="add-txt-field"
        name="addlist"
        type="test"
        value={textfield}
        onChange={(event) => {
          handleTextFieldChange(event.target.value);
        }}
      />
      <button
        className="add-btn"
        onClick={() => onAdd(textfield)}
        disabled={!textfield}
      >
        Add
      </button>

      <button
        className="add-btn"
        onClick={onDelete}
        disabled={!textfield && handleDelete}
      >
        {handleDelete ? "Delete" : "Close"}
      </button>
    </div>
  ) : (
    <div className="addfield" onClick={() => setaddList(!addList)}>
      {title}
    </div>
  );
};

export default AddItem;
