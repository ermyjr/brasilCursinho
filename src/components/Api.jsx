import axios from 'axios';

async function fetchUserData() {
  try {
    const response = await axios.get('https://my-json-server.typicode.com/brasilcursinhos/fake-rest-api/');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}