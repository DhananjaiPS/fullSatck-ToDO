"use client"
import { useContext } from "react";
import { MainContext } from "../layout";
import SearchResults from "../components/SearchResults";

export default function Page() {
    //@ts-ignore
  const { result } = useContext(MainContext);

  return (
    <div>
      {Array.isArray(result) ? (
        result.length > 0 ? (
          <SearchResults />
        ) : (
          <h1 className="text-2xl text-center">No Search Results Found</h1>
        )
      ) : (
        <h1 className="text-center">Type something to begin search</h1>
      )}
    </div>
  );
}
