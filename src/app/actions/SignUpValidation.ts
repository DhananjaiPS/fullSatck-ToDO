"use server"
import prismaClient from "@/service/prisma";
import { generateToken } from "./jwt";
import { cookies } from "next/headers";

export default async function SignUpValidation(data:any) {

    const res=await prismaClient.user.findFirst({
         where: {
        OR: [
          { email: data.email },
          { username: data.username },
        //   { name: data.name || undefined }
        ]
      }

    })
    if(!res){
        const newUser=await prismaClient.user.create({
            data:{
                username:data.username,
                email:data.email,
                password:data.password,
            }
        })
        const token=await generateToken(newUser);
        if(newUser){
            const cookie=await cookies();
            cookie.set("token",token);
            return {
                success:true,
                data:newUser,
                token:token,
                message:"New User Created Successfull"

            }
        }
        else{
            return {
                success:false,
                data:{},
                token:"",
                message:"New User Created Successfull"

            }

        }
    }
    else{
        return {
                success:false,
                data:{},
                token:"",
                message:"User Already Exisited"

            }
    }
  
}
