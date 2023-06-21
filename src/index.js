import app from './app.js'
import { connectMongo } from './database.js';

connectMongo();

const port = 3000;
app.listen(port);
console.log("Listen on port: ", port);