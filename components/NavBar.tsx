"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function NavBar() {

    const router = useRouter();

    useEffect(() => {
        router.prefetch("/courses")
    }, [router])

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost normal-case text-xl">Fireship</Link>
            </div>
            <div className="flex-none gap-2">
                <button onClick={() => {
                    router.push("/courses")
                }} className="btn font-bold text-white hover:text-orange-600 hover:cursor-pointer hover:scale-110 duration-100">courses</button>
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full bg-red-500">
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><Link href="/login">Login</Link></li>
                    </ul>
                </div>
            </div>
        </div>

    )
}