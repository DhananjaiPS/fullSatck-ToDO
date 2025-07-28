//@ts-nocheck
"use client"
// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Theme } from "@radix-ui/themes";
import { create } from "domain";
import { createContext } from "react";
import { useTransition } from "react";
import SearchTodo from "./actions/SearchTodo";
// import prismaClient from "@/service/prisma";
import { accentColors } from "@radix-ui/themes/dist/cjs/props/color.prop.js";
import { useState, useEffect } from "react";
import FetchAllTodos from "./actions/FetchAllTodos";
export const MainContext = createContext();

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [items, setItems] = useState([]);
  const [copy, setCopy] = useState<[]>([]);

  const [search, setSearch] = useState('')
  const [result, setResult] = useState<[]>([])

  const [ispending, startTransition] = useTransition();
  useEffect(() => {
    console.log("Search Results:", result);
  }, [result]);
  async function handelSearch() {


    startTransition(async () => {
      const res = await SearchTodo(search);
      if (res.success) {
        //@ts-ignore
        console.log("res", res)
        setResult(prev => [...res.results]);

        alert(res.message)
      }
      else {
        alert(res.message)
      }

    })



  }

  useEffect(() => {

    async function fetch() {
      const res = await FetchAllTodos();
      console.log("Layout response", res)
      if (res.success) {
        setItems(res.data)
        alert("Todos Copy Created successfully");
      }
      else {
        alert("Something went wrong while fetching for Copy todos")
      }


    }
    fetch();
  }, [])


  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <MainContext.Provider value={{ items, setItems, copy, setCopy, search, result, setSearch, handelSearch }}>

          <Theme>

            {children}
          </Theme>
        </MainContext.Provider>
      </body>
    </html>
  );
}
