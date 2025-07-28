"use client"

import AddToList from "./components/AddToList"
import { useContext, useEffect } from "react"
import { MainContext } from "./layout"
import EditButton from "./components/EditButton"
import DeleteButton from "./components/DeleteButton"
import SearchButton from "./components/SearchButton"
import Loader from "./components/Loader"
export default function page() {
  //@ts-ignore
  const { items, copy } = useContext(MainContext)

if (items === undefined) {
  // Show loader until `items` is fetched or defined
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 text-white text-xl">
      <div className="flex flex-col items-center gap-4">
        <Loader />
      </div>
    </div>
  );
}

if (items.length === 0) {
  // Show message if no to-dos exist
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center text-white bg-gradient-to-r from-lime-200 via-green-400 to-emerald-600">
      <h1 className="text-2xl mb-2">No To-Dos Found</h1>
      <p className="text-lg">Add your first task!</p>
      <div className="mt-4">
        <AddToList />
      </div>
    </div>
  );
}
if (items.length === 0) {
  // Show message if no to-dos exist
  return (
    <div className="w-full min-h-screen flex flex-col justify-self-start place-items-start text-white bg-gradient-to-r from-lime-200 via-green-400 to-emerald-600">
      <h1 className="text-2xl mb-2 font-bold">No To-Dos Found</h1>
      <p className="text-lg font-extrabold">Add your first task!</p>
      <div className="mt-4">
        <AddToList />
      </div>
    </div>
  );
}
// when items are present
return (
  <div className="w-full min-h-screen overflow-y-auto px-4 py-6 bg-gradient-to-r from-lime-200 via-green-400 to-emerald-600">
    <h1 className="text-2xl text-center mb-4">Your To-Do List</h1>

    <div className="flex gap-4 justify-evenly items-center w-full h-[5vh] mb-7">
      <SearchButton />
      <AddToList />
    </div>

    <div className="flex flex-wrap w-full gap-4 h-[30vh]">
      {copy.map((item: any, index: number) => (
        <div
          key={index}
          className="bg-black text-white flex flex-col p-4 rounded shadow min-h-[25vh] w-[40vh] justify-between"
        >
          <div>
            <div className="text-lg font-semibold mb-1">{item.title}</div>
            <div className="text-sm text-gray-300">{item.description}</div>
          </div>

          <div className="flex justify-between pt-4">
            <EditButton obj={item} />
            <DeleteButton id={item.id} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

  // if (items && items.length > 0) {
  //   console.log("Items in page useEffect", items)
  //   return (
  //     <div className="w-full min-h-screen overflow-y-auto px-4 py-6 bg-linear-to-r from-lime-200 via-green-400 to-emerald-600">

  //       <h1 className="text-2xl text-center mb-4">Your To-Do List</h1>
  //       <div className="flex gap-4 justify-evenly items-center  w-full h-[5vh] mb-7">

  //         <SearchButton />
  //         <AddToList />
  //       </div>

  //       <div className="flex flex-wrap w-full gap-4 h-[30vh]">
  //         {copy.map((item: any, index: number) => (
  //           <div
  //             key={index}
  //             className="bg-black text-white flex flex-col p-4 rounded shadow min-h-[25vh] w-[40vh] justify-between"
  //           >
              
  //             <div>
  //               <div className="text-lg font-semibold mb-1">{item.title}</div>
  //               <div className="text-sm text-gray-300">{item.description}</div>
  //             </div>

             
  //             <div className="flex justify-between pt-4">
  //               <EditButton obj={item} />
  //               <DeleteButton id={item.id} />
  //             </div>
  //           </div>

  //         ))}
  //       </div>
  //     </div>
  //   )
  // }
  // else {
  //   return (
  //     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 text-white text-xl">
  //     <div className="flex flex-col items-center gap-4">
  //       {/* <svg
  //         className="animate-spin h-10 w-10 text-white"
  //         xmlns="http://www.w3.org/2000/svg"
  //         fill="none"
  //         viewBox="0 0 24 24"
  //       >
  //         <circle
  //           className="opacity-25"
  //           cx="12"
  //           cy="12"
  //           r="10"
  //           stroke="currentColor"
  //           strokeWidth="4"
  //         />
  //         <path
  //           className="opacity-75"
  //           fill="currentColor"
  //           d="M4 12a8 8 0 018-8v8z"
  //         />
  //       </svg>
  //       <span>Loading, please wait...</span> */}
  //       <Loader/>
  //     </div>
  //   </div>)
  // }
}

