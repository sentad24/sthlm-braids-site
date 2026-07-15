export const runtime = "nodejs";

import clientPromise from "@/lib/mongodb";

export async function GET() {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  const services = await db.collection("services").find({}).toArray();

  return Response.json(
    services.map(s => ({ ...s, _id: s._id.toString() }))
  );
}
