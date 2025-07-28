//@ts-nocheck
"use server"
import prismaClient from "@/service/prisma";

export default async function SearchTodo(query) {
  const res=await prismaClient.todo.findMany({
    where:{
        title:{
            contains:query
        }
        
    }
  })
  if(res){
    return{
        success:true,
        results:res,
        message:"Data fetched successfully"
    }
  }
  return{
    success:false,
    message:"Oops Something went wrong in search"
  }
}
