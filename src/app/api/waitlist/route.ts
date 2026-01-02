import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const filePath = path.join(process.cwd(), "waitlist.csv");
    const timestamp = new Date().toISOString();
    const entry = `${timestamp},${email}\n`;

    fs.appendFileSync(filePath, entry);

    return NextResponse.json({ message: "Successfully joined waitlist" }, { status: 200 });
  } catch (error) {
    console.error("Error processing waitlist request:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
