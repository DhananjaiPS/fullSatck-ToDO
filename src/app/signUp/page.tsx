//@ts-nocheck
"use client"
import { useContext, useState, useTransition } from "react"
import SignUpValidation from "../actions/SignUpValidation"
import { useRouter } from "next/navigation"
import { MainContext } from "../layout"
import Link from "next/link"

export default function page() {
    const {isLogin,setIsLogin}=useContext(MainContext);
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isPending, startTransition] = useTransition();
    const route=useRouter();
    async function handelSearch(e) {
        e.preventDefault();
        const data = {
            username,
            email,
            password
        }
        startTransition(async () => {
            const res = await SignUpValidation(data);
            if (res.success) {
                console.log(res);
                setIsLogin(true);
                alert(res.message)
                route.push("/")

            }
            else {
                alert(res.message)
            }
        })


    }
    return (
        <div>
            <form onSubmit={handelSearch}>
                <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} placeholder="Enter the Username"/>
                <input type="text" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter the Email"/>
                <input type="text" name="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter Password" />
                <button>{isPending ? "Submiting..." : "Submit"}</button>
                <Link href={"/Login"}>Already have account ? Login in now </Link>
            </form>
        </div>
    )
}
