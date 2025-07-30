// app/actions/logout.ts
"use server";

import { cookies } from "next/headers";

export async function SessionOut() {
  const cookieStore =await cookies();
  cookieStore.delete("token");

  return {
    success: true,
    message: "Logged out successfully",
  };
}
