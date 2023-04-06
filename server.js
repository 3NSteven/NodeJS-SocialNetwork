const express = require('express');
require('dotenv').config({path: './config/.env'});
require('./config/db');
const app = express();

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});

const wiki = require("./routes/wiki.js");
// …
app.use("/wiki", wiki);
