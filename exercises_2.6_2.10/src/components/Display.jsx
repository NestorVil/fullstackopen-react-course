const Display = ({ displayPersons }) => {
  return (
    <div>
      <h2>Numbers</h2>
      {displayPersons.map(person => <p key={person.name} >{person.name} {person.number}</p>)}
    </div>
  );
};

export default Display;