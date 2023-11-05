import { NextRequest, NextResponse } from "next/server";
import destructBasics from "@/TypeScript/destructuring/destructuringBasics";
export async function GET() {
  console.log("I ran");
  destructBasics();

  return NextResponse.json("I Ran");
}
