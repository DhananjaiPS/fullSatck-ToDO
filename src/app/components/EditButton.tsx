"use client"
import { Dialog,Button,Flex,Text,TextField } from "@radix-ui/themes";
import { useContext,useEffect, useState, useTransition } from "react";
import EditToDoMongo from "../actions/EditToDoMongo";
import { MainContext } from "../layout";
export default function EditToList({obj}:{obj:any}) {
    //@ts-ignore
    const {items,setItems,copy,setCopy} =useContext(MainContext);
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    //@ts-ignore
    const [edit,setEdit]=useState<[]>([])
    const [ispending,startTransition]=useTransition();

    useEffect(()=>{
        setCopy(items);
    },[items])

    async function handelEdit(){
        console.log("Edit obj",obj)
        const editObj={
            id:obj.id,
            title:title,
            description:description,
        }
        startTransition(async ()=>{

            const res=await EditToDoMongo(editObj);
            if(res.success){
                console.log("new Todo",res.updateObj)
                alert("To-do Edited Successfully !!!")
                //@ts-ignore
                const filterOld=items.filter(item=>{
                    if(item.id!==obj.id){
                        return true;
                    }
                })
                setCopy([res.updateObj,...filterOld])
                console.log("Filter",copy);
            }
            else{
                alert("Oops Something went wrong")
            }
        })

    }
  return (
    <div>
        <Dialog.Root>
    <Dialog.Trigger>
        <Button>Edit To-Do</Button>
    </Dialog.Trigger>

    <Dialog.Content maxWidth="450px">
        <Dialog.Title>Enter the Details</Dialog.Title>
        <Dialog.Description size="2" mb="4">
            Make changes to your To-Do.
        </Dialog.Description>

        <Flex direction="column" gap="3">
            <label>
                <Text as="div" size="2" mb="1" weight="bold">
                    Title
                </Text>
                <TextField.Root
                value={title}
                onChange={e=> setTitle(e.target.value)}
                    // defaultValue="Freja Johnsen"
                    placeholder="Enter your Title"
                />
            </label>
            <label>
                <Text as="div" size="2" mb="1" weight="bold">
                    Description
                </Text>
                <TextField.Root
                 value={description}
                onChange={e=> setDescription(e.target.value)}
                    // defaultValue="freja@example.com"
                    placeholder="Enter your description"
                />
            </label>
            
        </Flex>

        <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
                <Button variant="soft" color="gray">
                    Cancel
                </Button>
            </Dialog.Close>
            <Dialog.Close>
                <Button onClick={handelEdit}>Save</Button>
            </Dialog.Close>
        </Flex>
    </Dialog.Content>
</Dialog.Root>

      
    </div>
  )
}
