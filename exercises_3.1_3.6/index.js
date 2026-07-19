const express = require('express');
const app = express();

app.use(express.json());

let persons = [
  {
    id: '1',
    name: 'Arto Hellas',
    number: '040-123456',
  },
  {
    id: '2',
    name: 'Ada Lovelace',
    number: '39-44-5323525',
  },
  {
    id: '3',
    name: 'Dan Abramov',
    number: '12-43-2342345',
  },
  {
    id: '4',
    name: 'Marry Poppendieck',
    number: '39-23-6423122',
  },
];

app.get('/', (_, response) => {
  response.send('<p>Hello </p>');
});

app.get('/api/persons', (_, response) => {
  response.send(persons);
});

app.get('/info', (_, response) => {
  let message = `<p>Phonebook has info on ${persons.length} people</p>`;
  let time = new Date();

  response.send(message + time);
});

app.get('/api/persons/:id', (request, response) => {
  let idRequest = request.params.id;

  let individual = persons.find(({ id }) => id === idRequest);

  if (!individual) {
    return response.status(404).json({error: 'Person not found'});
  }

  return response.send(individual);
});

app.delete('/api/persons/:id', (request, response) => {
  let idRequest = request.params.id;
  persons = persons.filter(({ id }) => idRequest !== id);

  response.status(204).end();
});

app.post('/api/persons/', (request, response) => {
  let newPerson = request.body;
  if (!newPerson || !newPerson.name || !newPerson.number) {
    return response.status(404).json({error: 'Incomplete person'});
  }

  if (persons.some(({ name }) => name === newPerson.name)) {
    return response.status(404).json({error: 'Name already included'});
  }

  let id = Math.max(...persons.map(person => Number(person.id)));

  persons = persons.concat({...newPerson, id: `${id + 1}`});
  console.log(persons);

  return response.send(persons);
});

app.listen(3001, () => {
  console.log('running...');
});