"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button";

export const LandingNavbar = () => {
    return(
        <nav className="p-4 bg-transparent flex items-center justify-center">
            <Link href="/" className=" flex items-center">
                <h1 className="text-2xl font-bold font-serif text-white ">
                        Dhruv Khatter - Portfolio
                </h1>
            </Link>
            <div className="flex items-center gap-x-2 px-5 justify-x-end">
                <Link href="https://github.com/LearnWithDhruv">
                    <Button variant="outline" className="rounded-full">
                        Github
                    </Button>
                
                </Link>
                <Link href="https://www.linkedin.com/in/dhruv-khatter-255459248">
                    <Button variant="outline" className="rounded-full">
                        LinkedIn
                    </Button>
                </Link>
            </div>
        </nav>
    )
}