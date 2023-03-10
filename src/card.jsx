const Card = ({ cardDetails, id }) => {
 const  onDragStart = (ev, id) => {
    ev.dataTransfer.setData("id", id);
  };
  return (
    cardDetails &&
    cardDetails[id]?.map((cardDetails) => (
      <div
        className="card"
        key={cardDetails.id}
        onDragStart={(e) => onDragStart(e, cardDetails.id)}
        draggable
      >
        <div className="name">{cardDetails.name}</div>
      </div>
    ))
  );
};

export default Card;
