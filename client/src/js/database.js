import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Adds content to database
export const putDb = async (content) => {
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readwrite');
  const objStore = tx.objectStore('jate');
  const request = objStore.add({id: 1, value: content});
  const result = await request;
  console.log('Content saved', result);
}


// Gets all content from database
export const getDb = async () => {
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readonly');
  const objStore = tx.objectStore('jate');
  const request = objStore.get(1);
  const result = await request;
  console.log('Get value', result);
  return result?.value;
};

// Deletes content from database
export const deleteDb = async () => {
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readwrite');
  const objStore = tx.objectStore('jate');
  const request = objStore.delete(id);
  const result = await request;
  console.log('Delete value', result);
  return result?.value;
}

initdb();
