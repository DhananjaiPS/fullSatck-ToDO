// server-only
"use server"
import { cookies } from "next/headers";

export default async function getSession() {
  const cookieStore =await cookies();
  const token = cookieStore.get("token")?.value;
  return !!token;
}
