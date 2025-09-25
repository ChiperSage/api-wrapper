const express = require("express");
const router = express.Router();
const fetchData = require("../utils/fetchData");

const API_KEY = "YOUR_OPENWEATHER_API_KEY";

// Example: GET /weather/jakarta
router.get("/:city", async (req, res) => {
  const { city } = req.params;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const data = await fetchData(url);

  if (data.main) {
    res.json({
      city: data.name,
      temperature: data.main.temp,
      feels_like: data.main.feels_like,
      condition: data.weather[0].description,
    });
  } else {
    res.json(data);
  }
});

module.exports = router;
