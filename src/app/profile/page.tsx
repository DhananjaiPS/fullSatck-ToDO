//@ts-nocheck
"use client"
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { verifyToken } from "../actions/jwt";

export default async function Page() {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    redirect("/");
  }

  let data;

  try {
    data = verifyToken(token); // If verifyToken is async, use: await verifyToken(token);
  } catch (error) {    //if token may expire or prduce the error
    console.error("Token verification failed:", error);
    redirect("/Login"); // Redirect if token is invalid or expired
  }

  return <div>{data?.email}</div>;
}
