import { NextResponse } from "next/server";
import { projectTypes } from "@/content/site";

type Body = {
  types?: string[];
  details?: string;
  email?: string;
};

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const types = Array.isArray(body.types) ? body.types.filter((t) => projectTypes.includes(t)) : [];
  const details = typeof body.details === "string" ? body.details.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";

  if (types.length === 0) {
    return NextResponse.json({ error: "Select at least one project type." }, { status: 400 });
  }
  if (details.length < 20) {
    return NextResponse.json({ error: "Tell us a little more — at least 20 characters." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  // No persistence layer in this pass — the brief is validated and acknowledged.
  // Wire this to a CRM, queue, or database when ready.
  console.log(JSON.stringify({ event: "project_brief", types, email, detailsLength: details.length }));

  return NextResponse.json({ ok: true });
}
