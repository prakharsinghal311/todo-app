import { MongoClient, ObjectId } from "mongodb";

async function handler(req, res) {
  if (req.method === "PATCH") {
    const { todoid, status } = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://prakhar:lHzvcG7bbVDYguMg@cluster0.v7bxtre.mongodb.net/todoDatabase?retryWrites=true&w=majority"
    );

    const db = client.db();

    const todosCollection = db.collection("todoDatabase");

    const result = await todosCollection.updateOne(
      { _id: new ObjectId(todoid) },
      { $set: { status: status } }
    );

    console.log(result);

    client.close();

    res.status(201).json({ message: "todos updated!" });
  }
}

export default handler;
