const mongoose = require('mongoose');

// Connexion à MongoDB 
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));



module.exports = mongoose.connection;
