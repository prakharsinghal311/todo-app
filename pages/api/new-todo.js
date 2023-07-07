import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://prakhar:lHzvcG7bbVDYguMg@cluster0.v7bxtre.mongodb.net/todoDatabase?retryWrites=true&w=majority"
    );

    const db = client.db();

    const todosCollection = db.collection("todoDatabase");

    const result = await todosCollection.insertOne(data);

    client.close();

    res.status(201).json({ message: "todos inserted!" });
  }
}

export default handler;
