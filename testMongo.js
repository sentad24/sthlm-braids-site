import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

console.log("MONGODB_URI =", process.env.MONGODB_URI);

const client = new MongoClient(process.env.MONGODB_URI);

async function testConnection() {
  try {
    await client.connect();
    const db = client.db(process.env.MONGODB_DB);
    const collections = await db.listCollections().toArray();
    console.log("Connected! Collections:", collections.map(c => c.name));
    await client.close();
  } catch (err) {
    console.error("MongoDB connection failed:", err);
  }
}

testConnection();
