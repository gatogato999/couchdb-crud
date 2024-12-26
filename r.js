// filepath: /e:/githubprojs/couchdb-crud/r.js
const db = require('./db');

const readDocument = async (id) => {
  try {
    const doc = await db.get(id);
    return doc;
  } catch (err) {
    throw err;
  }
};

module.exports = readDocument;