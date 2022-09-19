import {MongoClient} from "mongodb";
import dotenv from "dotenv";
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
    path: path.resolve(__dirname, '../../.env')
})

const mongoClient = new MongoClient(process.env.MONGO_URI);

let db;

try {
    await mongoClient.connect();
    db = mongoClient.db("Cup-mart");
    console.log("Database connect");
} catch (error) {
    console.log(error);
}

export default db;