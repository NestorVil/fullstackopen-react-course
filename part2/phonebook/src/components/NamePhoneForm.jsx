const NamePhoneForm = ({ setNewName, setNumber, setPersons,
  persons, newName, number, services, setMessage
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
      setMessage({text: 'Number failed to add', isError: true})
      setTimeout(() => setMessage({text: '', isError: false}), 3000);
      return;
    }

    let newObj = {name: newName, number: number};

    services
      .submit(newObj)
      .then(returnedObj => {
        setPersons(persons.concat(returnedObj.data));
        setNewName('');
        setNumber('');
        setMessage({text: 'Number successfully added', isError: false});
        setTimeout(() => setMessage({text: '', isError: false}), 3000);
      })
      .catch(error => {
        setMessage({text: 'Number failed to add', isError: true});
        setTimeout(() => setMessage({text: '', isError: false}), 3000);
      });

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