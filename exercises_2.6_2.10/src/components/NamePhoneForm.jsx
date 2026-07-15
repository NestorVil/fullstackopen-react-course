const NamePhoneForm = ({ setNewName, setNumber, setPersons,
  persons, newName, number
 }) => {

  const handleValue = (event) => {
    setNewName(event.target.value);
  };

  const handleNumber = (event) => {
    setNumber(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (persons.some(({ name }) => name === newName)) {
      alert('That name already exists :/');
      return;
    }

    setPersons(persons.concat({name: newName, number: number}));
  };

  return (
    <div>
      <h3>add a new</h3>
      <form onSubmit={handleSubmit}>
        name: <input value={newName} onChange={handleValue} />
        <br />
        number: <input value={number} onChange={handleNumber}/>
        <button type='submit'>add</button>
      </form>
    </div>
  )
};

export default NamePhoneForm;