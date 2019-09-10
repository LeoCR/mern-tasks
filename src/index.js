const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

// Db connection
const { mongoose } = require('./database');
//https://www.youtube.com/watch?v=DqpL5UtJHus
//https://treehouse.github.io/installation-guides/mac/mongo-mac.html
// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/tasks', require('./routes/task.routes'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));;

// Starting the server
app.listen(8080, () => {
  console.log(`Server on port 8080`);
});