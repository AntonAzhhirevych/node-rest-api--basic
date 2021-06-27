const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');
const cors = require('cors');

//middlewares
app.use(cors());
app.use(bodyParser.json());

//import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//connect to database
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true },
  () => {
    console.log('connected to db!');
  },
);

//listeners
app.listen(4000);
