"use server"

import prismaClient from "@/service/prisma"
export default async function AddToMongo(todo:any) {
    const add= await prismaClient.todo.create({
        data:todo
    })
    console.log(add)
    if(add){
        return{
            newTodo:add,
            success:true,
            message:"SuccessFull"
        }
    }
    else{
        return{
            success:false,
            message:"Unsuccessful"
        }
    }
  
}
