//@ts-nocheck
"use client"
import { Dialog,Button,Flex,Text,TextField } from "@radix-ui/themes";
import { useContext,useEffect, useState, useTransition } from "react";
import AddToMongo from "../actions/AddToMongo";
import { MainContext } from "../layout";
export default function AddToList() {
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
	//@ts-ignore
    const {items,setItems,copy,setCopy} =useContext(MainContext);
	const [ispending,startTransition]=useTransition();
	

	useEffect(()=>{
		setCopy(items);
		 console.log("Updated copy:", copy);
	},[items])
    
    async function handelAdd(){
        const obj={
            title,
            description,
        }
		startTransition(async ()=>{

		

			const res=await AddToMongo(obj);
			if(res.success){
				console.log("new Todo",res.newTodo)
				alert("To-do Added Successfully !!!")
				setItems(prev => [res.newTodo, ...prev]); 
				console.log("After Addition",copy)
			}
			else{
				alert("Oops Something went wrong")
			}
		}
		)

    }
  return (
    <div className="">
        <Dialog.Root>
	<Dialog.Trigger>
		<Button disabled={ispending} className="!bg-blue-700 !text-white hover:!bg-blue-800">{ispending ? "Adding... ":"Add"}</Button>
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
				<Button onClick={handelAdd}>Save</Button>
			</Dialog.Close>
		</Flex>
	</Dialog.Content>
</Dialog.Root>

      
    </div>
  )
}
