// filepath: /e:/githubprojs/couchdb-crud/u.js
const db = require('./db');

const updateDocument = async (id, updatedFields) => {
  try {
    const doc = await db.get(id);
    const updatedDoc = { ...doc, ...updatedFields };
    const response = await db.insert({ ...doc, ...updatedDoc });
    return response;
  } catch (err) {
    throw err;
  }
};

module.exports = updateDocument;