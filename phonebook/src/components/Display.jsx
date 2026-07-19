import React from "react";

const Display = ({ displayPersons, handleDelete }) => {
  return (
    <div>
      <h2>Numbers</h2>
      {displayPersons.map(person => {
        return <React.Fragment key={person.id}>
          <p>{person.name} {person.number}</p>
          <button data-id={person.id} onClick={handleDelete} >delete</button>
        </React.Fragment>
        })}
    </div>
  );
};

export default Display;