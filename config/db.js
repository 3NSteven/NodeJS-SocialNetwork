const mongoose = require("mongoose");

mongoose
    .connect(`mongodb://${process.env.DB_USER_PASS}@127.0.0.1:27017/${process.env.DB_NAME}`)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log("Failed to connect to MongoDB", err));