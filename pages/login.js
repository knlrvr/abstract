import Navbar from "../components/Navbar";
import { useState } from 'react'
import { BsLock, BsLockFill } from "react-icons/bs";
import Link from 'next/link'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <main>
            <Navbar />
            <div className="max-w-5xl mx-auto">
                <div className="h-screen flex justify-center items-center pb-12 px-2 md:px-6">
                    <div className="border border-gray-300 bg-gray-50 w-full md:w-1/2 flex flex-col py-8 px-16 space-y-12 shadow-lg">
                        
                        <div className="flex items-center justify-between w-full">
                            <BsLockFill />
                            <span className="text-sm text-gray-400">Secure Log In</span>
                        </div>

                        <div className="">
                            <form action="/"
                                method="POST">
                                <input
                                    type="text"
                                    name="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder="Email Address"
                                    className="w-full bg-gray-100 rounded-lg px-4 py-2 mb-4" 
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
                                <div className="flex justify-center">
                                    <button type="submit" className="bg-blue-300 px-5 py-2 rounded-xl font-thin text-white my-4 hover:bg-blue-400 hover:shadow-lg">
                                        Log In
                                    </button>
                                </div>
                            </form>
                            <div className="flex justify-center text-sm text-gray-500 pt-8">
                                <p>Don&apos;t have an account? <br />
                                    <Link href="/signup"
                                        className="text-gray-800 hover:text-blue-400 flex justify-center">
                                        Sign Up!
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}