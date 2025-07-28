//@ts-nocheck
"use client"
import { TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { useContext, useState, useTransition } from "react";
import { MainContext } from "../layout";
import SearchTodo from "../actions/SearchTodo";
import Link from "next/link";


export default function SearchButton() {
    const [ispending, startTransition] = useTransition();
    const { items, setItems, copy, setCopy, search, setSearch, handelSearch, result } = useContext(MainContext);

    return (
        <div className="flex">
            <TextField.Root
            className="rounded-b-none"

                value={search}
                onChange={(e) => setSearch(e.target.value)}

                placeholder="Search the docs…">
                <TextField.Slot>
                    <MagnifyingGlassIcon height="16" width="16" />
                </TextField.Slot>
            </TextField.Root>
            <Link href={"/Search"}><button className="bg-blue-700 text-white px-3 h-[32px] relative left-1 rounded"
                disabled={ispending}
                onClick={handelSearch}>
                {ispending ? "Searching..." : "Search"}
            </button>
            </Link>

        </div>
    )
}
