import {MongoClient} from "mongodb";

const MONGO_URI = 'mongodb://admin:password@localhost:27017/todos';

export async function initDatabase() {
  try {
    const client = new MongoClient(MONGO_URI);
    await client.connect();
    return client.db('todos');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}
