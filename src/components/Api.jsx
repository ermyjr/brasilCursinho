import axios from 'axios';

async function fetchUserData() {
    let response = null;
  try { 
    response = await axios.get('https://my-json-server.typicode.com/brasilcursinhos/fake-rest-api/');
    return response.data;
  } catch (error) {
    console.error(error);
  }
   return response.status == 200? response.data: []
}

const Name = fetchUserData.filter(1)