const express = require("express");
const router = express.Router();
const fetchData = require("../utils/fetchData");

// Example: GET /crypto/btc_idr
router.get("/:pair", async (req, res) => {
  const { pair } = req.params;
  const url = `https://indodax.com/api/${pair}/ticker`;
  const data = await fetchData(url);

  if (data.ticker) {
    res.json({
      pair,
      last_price: data.ticker.last,
      high: data.ticker.high,
      low: data.ticker.low,
      volume: data.ticker.vol_idr,
      server_time: data.ticker.server_time,
    });
  } else {
    res.json(data);
  }
});

module.exports = router;
