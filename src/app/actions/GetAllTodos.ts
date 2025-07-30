"use server"
import prismaClient from "@/service/prisma";

export default async function GetAllTodos() {
  try {
    const allTodos = await prismaClient.todo.findMany({
      orderBy: {
        createdAt: "desc"
      }
    });
    return allTodos;
  } catch (err) {
    console.error("Error fetching todos:", err);
    return [];
  }
}
