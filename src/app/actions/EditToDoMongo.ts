"use server"
import prismaClient from "@/service/prisma";
export default async function EditToDoMongo(obj:any) {
    console.log("object Params",obj);
    const response=await prismaClient.todo.update({
        where:{
            id:obj.id,
        },
        data:{
            title:obj.title,
            description:obj.description,
        }
    })
    console.log("response",response);
    if(response){
        return{
            updateObj:response,
            success:true,
            message:"Record is updated successfully"
        }
    }
    return{
        success:true,
        message:"Oops something went wrong while updating"

    }
 
}
