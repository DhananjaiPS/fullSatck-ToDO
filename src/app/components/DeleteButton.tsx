//@ts-nocheck
"use client"
import { useContext, useTransition } from "react"
import { MainContext } from "../layout";
import DeleteToDo from "../actions/DeleteToDo";
export default function DeleteButton({id}) {
    const {item,setItems,copy,setCopy}=useContext(MainContext);
    const [ispending,startTransition]=useTransition()

    async function handelDelete() {
        startTransition(async ()=>{

            const res=await DeleteToDo(id);
            console.log("Delete res",res)
            if(res.success){
                const filterArr=copy.filter(item=> item.id!==id)
                
                setCopy(filterArr);
                alert(res.message)
            }
            else{
                alert(res.message)
            }
        })

        }



    
  return (
    <div>
        <button  className="bg-red-600 hover:bg-red-700 text-white font-medium text-sm px-4 py-1 h-[5vh] rounded transition"

         onClick={handelDelete}
          disabled={ispending}>
            {
                ispending? "Deleting...":"Delete"
            }

        </button>
      
    </div>
  )
}
