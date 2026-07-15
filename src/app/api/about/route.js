import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("sthlmbraids");

    // Use the correct collection
    const aboutPage = await db.collection("about").findOne({}); // find the single document

    if (!aboutPage) {
      return NextResponse.json({ error: "About page not found" }, { status: 404 });
    }

    // Remove _id for serialization
    const { _id, ...rest } = aboutPage;

    return NextResponse.json(rest);
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
