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

//  logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const transaction = jateDataBase.transaction("jate", "readWrite");
  const jateDataBase = await openDB('jate', 1);
  const store = transaction.objectStore("jate");
  const request = store.put({ id: 1, value: content });
  const result = await request;
  console.error(result);
};

// logic for a method that gets all the content from the database
export const getDb = async (error) => {
  const transaction = jateDataBase.transaction("jate", "readOnly");
  const jateDataBase = await openDB("jate", 1);
  const store = transaction.objectStore('jate');
  const request = store.get(1);
  const result = await request;
  return result?.value;
};
  

initdb();
