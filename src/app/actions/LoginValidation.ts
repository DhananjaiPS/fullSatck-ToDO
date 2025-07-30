"use server"

import prismaClient from "@/service/prisma"
import { cookies } from "next/headers"
import { generateToken } from "./jwt";

export default async function LoginValidation(data) {

  const userExist=await prismaClient.user.findFirst({
    where:{
      AND:[
        {username:data.username},
        {password:data.password}
      ]
    }
  })
  if(userExist){
    const token= generateToken(data);

    const cookie=await cookies();
    cookie.set("token",token);
    return {
        success: true,
        message: "Login successful",
      };

  }
  else{
     return {
        success: true,
        message: "Login successful",
      };
  }
  
  
}
















































// "use server";

// import prismaClient from "@/service/prisma";
// import { verifyToken } from "./jwt";
// import { cookies } from "next/headers";

// export default async function LoginValidation(data) {
//   const cookie =await  cookies(); 
//   const token = cookie.get("token")?.value;
  
//   if (!token) {
//     return {
//       success: false,
//       message: "Token not found. Please login first.",
//     };
//   }
//   try {
//     const loginUserDetails = verifyToken(token);

//     if (
//       loginUserDetails.email === data.email &&
//       loginUserDetails.password === data.password
//     ) {
//       return {
//         success: true,
//         message: "Login successful",
//       };
//     } else {
//       return {
//         success: false,
//         message: "Email or password does not match token data",
//       };
//     }
//   } catch (error) {
//     return {
//       success: false,
//       message: error.message || "Token is invalid or expired",
//     };
//   }
// }
