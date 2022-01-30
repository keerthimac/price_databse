const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//routes

app.use("/banks", require("./routes/banks"));
app.use("/province", require("./routes/location"));
app.use("/supplier", require("./routes/supplier"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
