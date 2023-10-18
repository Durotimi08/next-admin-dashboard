import { NextRequest, NextResponse } from "next/server";

interface user {
  params: { id: number };
}

export function GET(request: NextRequest, { params: { id } }: user) {
  return NextResponse.json({ comment: "nicely done", id: id }, { status: 200 });
}
