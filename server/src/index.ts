import express from 'express';
// import {initDatabase, createList} from './mongo';
// import mongo from './mongo';
import "./api";
//const {mongo1} = require('mongo1');
import { main } from "./mongo1";
import { createList, createTask, retrieveList, retrieveLists } from './api';

const app = express();
const port = 8000;

app.get('/api/lists', (req, res)=> {
  console.log('Received GET request for lists');
  try
  {
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.send({ retrieve: retrieveLists(null) });
  }
  catch (error)
  {
    return res.status(400).send({ error: error });
  }
})

app.get('/api/lists/:listId', (req, res)=> {
  console.log('Received GET request for lists with listId ' + req.params.listId);
  try
  {
    return res.send({ retrieve: retrieveList(null, req.params.listId) });
  }
  catch (error)
  {
    return res.status(400).send({ error: error });
  }
})

// Implemented, not tested yet
app.post('/api/lists', (req, res)=> {
  console.log('Received POST request for lists');

  try
  {
    var listObj = JSON.parse(req.body);
    return res.send({ id: createList(null, listObj)});
  }
  catch (error)
  {
    return res.status(400).send({ error: error });
  }
})

// Not implemented yet
app.put('/api/lists/:listId', (req, res)=> {
  console.log('Received PUT request for lists id=' + req.params.listId);
})

// Not implemented yet
app.delete('/api/lists', (req, res)=> {
  console.log('Received DELETE request for lists');
  return res.send('DELETE HTTP method on list resource');
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}!`);});
