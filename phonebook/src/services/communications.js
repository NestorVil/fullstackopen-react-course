import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const submit = (newObj) => {
  return axios.post(baseUrl, newObj);
};

const removeId = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
}

export default {submit, removeId};