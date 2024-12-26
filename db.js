const nano = require('nano')('http://admin:admin@127.0.0.1:5984'); // CouchDB URL

// Access or create the 'mydb' database
const db = nano.db.use('userdb');

// Check if the database exists, and create it if it doesn't
nano.db.create('userdb')
  .then(() => {
    console.log('Database created or already exists.');
  })
  .catch((err) => {
    if (err.statusCode === 412) {
      console.log('Database already exists.');
    } else {
      console.log('Error creating database:', err);
    }
  });

module.exports = db;
 
