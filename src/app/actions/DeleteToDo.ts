"use server"

import prismaClient from "@/service/prisma"

export default async function DeleteToDo(ToDo_id : string) {
    const del =await prismaClient.todo.delete({
        where:{
            id:ToDo_id,
        }
    })
    console.log(del);
    if(del){
        return{
            delObj:del,
            success:true,
            message:"the todo is  deleted successfully"
        }

    }
    return{
        success:false,
        message:"Oops Delete Failed.."
    }

  
}
