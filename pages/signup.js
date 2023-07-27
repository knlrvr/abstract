import Navbar from "../components/Navbar";
import Link from 'next/link'
import { useState } from "react";
import { BsLockFill } from "react-icons/bs";

export default function Signup() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');

    return (
        <main>
            <Navbar />
            <div className="max-w-5xl mx-auto">
                <div className="h-screen flex justify-center items-center pb-12 px-2 md:px-6">
                    <div className="border border-gray-300 bg-gray-50 w-full md:w-1/2 flex flex-col py-8 px-8 md:px-16 space-y-12 shadow-lg">
                        
                        <div className="flex items-center justify-between w-full">
                            <BsLockFill />
                            <span className="text-sm text-gray-400">Secure Sign Up</span>
                        </div>

                        <div className="">
                            <form action="/"
                                method="POST">
                                <input
                                    type="text"
                                    name="name"
                                    value={firstName}
                                    onChange={e => setFirstName(e.target.value)}
                                    placeholder="First Name"
                                    className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-4 focus:outline-none"
                                />
                                <input
                                    type="text"
                                    name="name"
                                    value={lastName}
                                    onChange={e => setLastName(e.target.value)}
                                    placeholder="Last Name"
                                    className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-4 focus:outline-none"
                                />
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
                                    className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-4 focus:outline-none"
                                />
                                <input
                                    type="password"
                                    name="password"
                                    value={confPassword}
                                    onChange={e => setConfPassword(e.target.value)}
                                    placeholder="Confirm Password"
                                    className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-4 focus:outline-none"
                                />
                                <div className="flex justify-center">
                                    <button type="submit" className="bg-blue-300 px-5 py-2 rounded-xl font-thin text-white my-4 hover:bg-blue-400 hover:shadow-lg">
                                        Sign Up
                                    </button>
                                </div>
                            </form>
                            <div className="flex justify-center text-sm text-gray-500 pt-8">
                                <p>Already have an account? <br />
                                    <Link href="/login"
                                        className="text-gray-800 hover:text-blue-400 flex justify-center">
                                        Log In!
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