import express from 'express';
import { nanoid } from 'nanoid';

const id = nanoid();
  
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  res.setHeader('X-API-Id', id);
  next();
});

app.get('/', async (req, res, next) => {
  res.status(200).send("ping");
});
  
app.listen(PORT, (error) =>{
  if(!error)
    console.log("Server is Successfully Running, and App is listening on port "+ PORT);
  else
    console.log("Error occurred, server can't start", error);
  }
);