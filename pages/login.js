import Navbar from "../components/Navbar";
import { useState } from 'react'
import { BsLockFill } from "react-icons/bs";
import Link from 'next/link'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <main>
            <Navbar />
            <div className="text-center py-48">
                <div className="flex justify-center mb-2 ">
                    <BsLockFill />
                </div>
                <p className="mb-8">Secure Log In</p>
                <div className="flex flex-col justify-center max-w-sm mx-auto p-2">
                    <form action="/" 
                        method="POST">
                        <input
                            type="text"
                            name="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Email Address"
                            className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-4 focus:outline-none"
                        />
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Password"
                            className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2 focus:outline-none"
                        />
                        <div className="text-xs flex justify-end mb-2 hover:text-blue-400 ">
                            <Link href="/">
                                <p>Forgot your password?</p>
                            </Link>
                        </div>
                        <button type="submit" className="bg-blue-300 px-5 py-2 rounded-xl font-thin text-white my-4 hover:bg-blue-400 hover:shadow-lg">
                            Log In
                        </button>
                    </form>
                    <div className="flex justify-center text-sm text-gray-500">
                        <p>Don't have an account? <br />
                            <Link href="/signup"
                                className="text-gray-800 hover:text-blue-400">
                                Sign Up!
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}