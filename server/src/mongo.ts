import {MongoClient} from "mongodb";

const MONGO_URI = 'mongodb://admin:password@localhost:27017/';

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
  var myList: any;
  myList.name = name;
  var result = dbo.collection('lists').insertOne(myList, function(err: any, res: any) {
    if (err) throw err;
    console.log("Created list " + name + " result: " + result);
  });
}


export function deleteList(dbo: any, id: number): boolean {
  return false;
}

export function retrieveLists(dbo: any) {
}

export function createTask(dbo: any, listId: number, headline: string, content: string): number {
  return -1;
}

export function updateTask(dbo: any, listId: number, headline: string, content: string): boolean {
  return false;
}

export function deleteTask(dbo: any, listId: number): boolean {
  return false;
}

export function retrieveTasks(dbo: any, listId: number) {
}
