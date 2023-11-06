import { NextRequest, NextResponse } from "next/server";
import destructBasics from "@/TypeScript/destructuring/destructuringBasics";
import { dogObject } from "@/TypeScript/oop/1_objects";
import { golden } from "@/TypeScript/oop/2_classes";
export async function GET() {
  console.log(golden);

  return NextResponse.json("I Ran");
}
