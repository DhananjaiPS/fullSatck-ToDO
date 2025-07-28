import { useContext } from "react";
import { MainContext } from "../layout";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
export default function SearchResults() {
    //@ts-ignore
    const { search, setSearch, result } = useContext(MainContext);
    return (
        <div>
            <h1>Search Results :{search}</h1>
            <div className="flex flex-wrap w-full gap-4   mb-5 p-2">
                {result.map((item: any, index: number) => (
                    <div
                        key={index}
                        className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-6 rounded-2xl shadow-lg w-80 h-80 flex flex-col justify-between transition hover:scale-105 duration-300"
                    >
                        {/* Title */}
                        <h2 className="text-xl font-semibold truncate">{item.title}</h2>

                        {/* Description */}
                        <p className="text-sm text-gray-300 mt-2 mb-4 overflow-auto max-h-[6rem] pr-1">
                            {item.description}
                        </p>

                        {/* Buttons */}
                        <div className="flex justify-between items-center mt-auto gap-2">
                            <EditButton obj={item} />
                            <DeleteButton id={item.id}  />
                        </div>
                    </div>


                ))}
            </div>


        </div>
    )
}
