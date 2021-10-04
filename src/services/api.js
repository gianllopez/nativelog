const { create } = require('axios').default;

const axios = create({ baseURL: 'http://192.168.18.104:8080' });

async function post(endpoint, user) {
  let response = null, errors = null;
  try {
    let resp = await axios.post(endpoint, user);
    response = resp.data;
  } catch (err) {
    errors = err.response?.data;
  };
  return { errors, response };
};

module.exports = { post };