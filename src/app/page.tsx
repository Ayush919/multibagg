'use client';

import {useState} from 'react';
import Image from 'next/image';
import dashboardImage from "../../public/dashboard.svg";
import backgroundImage from "../../public/lines.svg";
import './globals.css';
import AlertDialog from "@/app/popUp";
import * as React from "react";
import logo from '../../public/logo.png'

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="container">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src={backgroundImage}
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-20"
                />
            </div>

            {/* Navbar */}
            <nav className="navbar">
                <Image src={logo} alt="Logo" width={160} height={42} />
            </nav>

            <div className={"mainSection"}>
                {/* Hero Section */}
                <div className="hero">
                    <button className="bg-blue-600 px-3 py-1 text-sm rounded-full beta">Beta</button>
                    <h2 className={"heading"}>The future of<br/> Stock Research</h2>
                    <p className={"description"}>Navigate the complexities of the stock market confidently with our
                        <span
                            className="text-blue-500"><br/> AI-Powered
                        </span>
                         equity research platform.</p>

                    <p className={"premium"}>⚡Free premium subscription for first 1,000 members</p>
                    <button className="signin-button" onClick={() => setIsOpen(true)}>Sign In</button>
                </div>

                {/* Right Image */}
                <div className="right-image">
                    <Image src={dashboardImage} alt="Stock Research UI" width={500}  />
                </div>
            </div>

            {isOpen && (
                <AlertDialog open={isOpen} setOpen={setIsOpen} />
            )}
        </div>
    );
}
