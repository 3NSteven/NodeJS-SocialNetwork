const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const utilisateurRoutes = require('./routes/utilisateur.routes');
require('dotenv').config({path: './config/.env'});
require('./config/db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//routes
app.use('/api/user', utilisateurRoutes);

//port
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});