import { MongoClient, ObjectId } from "mongodb";

async function handler(req, res) {
  if (req.method === "DELETE") {
    const { todoId } = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://prakhar:lHzvcG7bbVDYguMg@cluster0.v7bxtre.mongodb.net/todoDatabase?retryWrites=true&w=majority"
    );

    const db = client.db();

    const todosCollection = db.collection("todoDatabase");

    const result = await todosCollection.deleteOne({
      _id: new ObjectId(todoId),
    });

    client.close();

    res.status(200).json({ message: "todo delete!" });
  }
}

export default handler;
