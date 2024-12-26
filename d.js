// filepath: /e:/githubprojs/couchdb-crud/d.js
const db = require('./db');

const deleteDocument = async (id) => {
  try {
    const doc = await db.get(id);
    const response = await db.destroy(id, doc._rev);
    return response;
  } catch (err) {
    throw err;
  }
};

module.exports = deleteDocument;