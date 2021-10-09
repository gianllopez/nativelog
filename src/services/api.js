const axios = require('axios').default;

async function post(endpoint, user) {
  const URL = `https://nativelog-back.herokuapp.com${endpoint}`;
  let response = null, errors = null;
  try {
    let resp = await axios.post(URL, user);
    response = resp.data;
  } catch (err) {
    errors = err.response?.data;
  };
  return { errors, response };
};

module.exports = { post };