const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// Routes
app.use("/crypto", require("./routes/crypto"));
app.use("/weather", require("./routes/weather"));

const PORT = 3000;
app.listen(PORT, () => console.log(`API Wrapper running at http://localhost:${PORT}`));
