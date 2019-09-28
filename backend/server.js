const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose') //help us connect to mongodb database

require('dotenv').config(); //gives us environment variables

const app = express();
const port = process.env.PORT || 5000; //creates express server

app.use(cors());
app.use(express.json());  //parses json file

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`); //starts the server
});