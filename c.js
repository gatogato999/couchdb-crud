// filepath: /e:/githubprojs/couchdb-crud/c.js
const db = require('./db');

const getNextId = async () => {
  try {
    const counterDoc = await db.get('counter');
    counterDoc.value += 1;
    await db.insert(counterDoc);
    return counterDoc.value;
  } catch (err) {
    if (err.statusCode === 404) {
      const newCounterDoc = { _id: 'counter', value: 1 };
      await db.insert(newCounterDoc);
      return newCounterDoc.value;
    } else {
      throw err;
    }
  }
};

const createDocument = async (doc) => {
  try {
    const id = await getNextId();
    const response = await db.insert({...doc,_id: id.toString()});
    return response;
  } catch (err) {
    throw err;
  }
};

module.exports = createDocument;