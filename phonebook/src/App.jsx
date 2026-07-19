import { useState, useEffect } from 'react';
import NamePhoneForm from './components/NamePhoneForm';
import Filter from './components/Filter';
import Display from './components/Display';
import Message from './components/Message';
import axios from 'axios';
import services from './services/communications';

const App = () => {
  const [ persons, setPersons ] = useState([]);
  const [ newName, setNewName ] = useState('');
  const [ number, setNumber ] = useState('');
  const [ filter, setFilter ] = useState('');
  const [ message, setMessage ] = useState({text: '', isError: false});

  const hook = () => {
    axios.get('http://localhost:3001/persons')
      .then(response => setPersons(response.data));
  };

  useEffect(hook, []);

  const displayPersons = persons.filter(person => person.name.toLowerCase().startsWith(filter.toLowerCase()));

  const handleDelete = (event) => {
    const id = event.target.dataset.id;
    if (!window.confirm(`Are you sure you want to delete this`)) {
      return;
    }

    services.removeId(id)
      .then(response => {
        setPersons(persons.filter(person => person.id !== response.data.id));
        setMessage({text: 'Person successfully removed', isError: false})
        setTimeout(() => setMessage({text: '', isError: false}), 3000);
      })
      .catch(error => {
        setMessage({text: 'Unable to remove person', isError: true})
        setTimeout(() => setMessage({text: '', isError: false}), 3000);
      });
    
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Message message={message} />
      <Filter setFilter={setFilter} />
      <NamePhoneForm setNewName={setNewName} setNumber={setNumber} setPersons={setPersons}
        persons={persons} newName={newName} number={number} services={services}
        setMessage={setMessage}/>
      <Display displayPersons={displayPersons} handleDelete={handleDelete}/>

    </div>
  );
};

export default App;