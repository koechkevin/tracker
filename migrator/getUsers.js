const axios = require('axios');
require('dotenv').config();
const fs = require('fs');

const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://koech-tracker.herokuapp.com';
axios
  .get(`${baseUrl}/api/v1/users`)
  .then((res) => {
    fs.writeFile('migrator/users.json', JSON.stringify(res.data), 'utf8', (err) => { if (err) throw err; });
  })
  .catch(error => console.log(error));
