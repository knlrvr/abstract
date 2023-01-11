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
            <div className="text-center py-48">
                <div className="flex justify-center mb-2 ">
                    <BsLockFill />
                </div>
                <p className="mb-8">Secure Sign Up</p>
                <div className="flex flex-col justify-center max-w-sm mx-auto p-2">
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
                        <button type="submit" className="bg-blue-300 px-5 py-2 rounded-xl font-thin text-white my-4 hover:bg-blue-400 hover:shadow-lg">
                            Log In
                        </button>
                    </form>
                    <div className="flex justify-center text-sm text-gray-500">
                        <p>Already have an account? <br />
                            <Link href="/login"
                                className="text-gray-800 hover:text-blue-400">
                                Log In!
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}