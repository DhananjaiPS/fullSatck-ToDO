//@ts-nocheck
"use client"
import { useContext, useTransition } from "react"
import { MainContext } from "../layout"
import DeleteToDo from "../actions/DeleteToDo"

export default function DeleteButton({ id }) {
  const { items, setItems, copy, setCopy } = useContext(MainContext)
  const [isPending, startTransition] = useTransition()

  async function handelDelete() {
    startTransition(async () => {
      const res = await DeleteToDo(id)
      console.log("Delete res", res)

      if (res.success) {
        const updatedItems = items.filter(item => item.id !== id)
        const updatedCopy = copy.filter(item => item.id !== id)

        setItems(updatedItems)   // ✅ update the original
        setCopy(updatedCopy)     // ✅ update the filtered

        alert(res.message)
      } else {
        alert(res.message)
      }
    })
  }

  return (
    <div>
      <button
        className="bg-red-600 hover:bg-red-700 text-white font-medium text-sm px-4 py-1 h-[5vh] rounded transition"
        onClick={handelDelete}
        disabled={isPending}
      >
        {isPending ? "Deleting..." : "Delete"}
      </button>
    </div>
  )
}
