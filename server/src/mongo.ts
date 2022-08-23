import {MongoClient} from "mongodb";

const MONGO_URI = 'mongodb://admin:password@localhost:27017/';

const uri = "mongodb+srv://admin:password@localhost:27017/todos?retryWrites=true&w=majority";

export async function initDatabase() {
  try {
    const client = new MongoClient(MONGO_URI);
    await client.connect();
    var dbo = client.db('todos');
    dbo.createCollection('lists', function(err, res) {
      if (err) throw err;
      console.log('Collection "lists" created');
    });
    dbo.createCollection('tasks', function(err, res) {
      if (err) throw err;
      console.log('Collection "tasks" created');
    });
    return dbo;
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

export function createList(dbo: any, name: string): number {
  var myList: any = { name: name }
  dbo.collection('lists').insertOne(myList, function(err: any, res: any) {
    if (err) throw err;
    console.log("Created list " + name + " result: " + res);
  });
  return 0;
}
