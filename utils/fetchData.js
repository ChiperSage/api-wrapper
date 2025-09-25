const axios = require("axios");

async function fetchData(url) {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    return { error: "Failed to fetch data", details: err.message };
  }
}

module.exports = fetchData;
