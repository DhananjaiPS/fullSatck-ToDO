"use server"
import prismaClient from "@/service/prisma";

export default async function FetchAllTodos() {
    const todoArr=await prismaClient.todo.findMany();
    if(todoArr){
        return{
            success:true,
            data:todoArr
        }
    }
    else{
        return{
            success:false,
            data:[],
        }
    }
  
}
