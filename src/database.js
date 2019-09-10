const mongoose = require('mongoose');
const URI = 'mongodb://localhost/mern-tasks';
//mongoose.connect('mongodb://user:password@sample.com:port/dbname', { useNewUrlParser: true })

mongoose.connect(URI, { useNewUrlParser: true })
  .then(db => console.log('Db is connected'))
  .catch(error => console.error(error));

module.exports = mongoose;