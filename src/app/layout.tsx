// @ts-nocheck
"use client";

import RootLayoutClient from "./RootLayoutClient";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Theme } from "@radix-ui/themes";
import { createContext, useEffect, useState, useTransition } from "react";

import SearchTodo from "./actions/SearchTodo";
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState([]);
  const [copy, setCopy] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [search, setSearch] = useState('');
  const [result, setResult] = useState([]);

  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    console.log("Search Results:", result);
  }, [result]);

  async function handelSearch() {
    startTransition(async () => {
      const res = await SearchTodo(search);
      if (res.success) {
        setResult(res.results); // ✅ Simplified
        alert(res.message);
      } else {
        alert(res.message);
      }
    });
  }

  useEffect(() => {
    async function fetch() {
      const res = await FetchAllTodos();
      console.log("Layout response", res);
      if (res.success) {
        setItems(res.data);
        setCopy(res.data);
        alert("Todos Copy Created successfully");
      } else {
        alert("Something went wrong while fetching todos");
      }
    }
    fetch();
  }, []);

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <MainContext.Provider
          value={{
            items,
            setItems,
            copy,
            setCopy,
            search,
            result,
            setSearch,
            handelSearch,
            isLogin,
            setIsLogin,
          }}
        >
          <Theme>{children}</Theme>
        </MainContext.Provider>
      </body>
    </html>
  );
}
