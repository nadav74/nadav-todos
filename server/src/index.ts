import express from 'express';
import {initDatabase} from './mongo';

const app = express();
const port = 8000;

initDatabase().then(db => {
  app.get('/', async (req, res) => {
    const stats = await db.stats();
    res.send(`Hello, world! ${JSON.stringify(stats)}`);
  });

  app.listen(port, () => {
    console.log(`Server listening on port ${port}!`);
  })
});
