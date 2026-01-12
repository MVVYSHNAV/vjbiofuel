"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
    SheetTitle,
} from "@/components/ui/sheet";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "Industries", href: "#industries" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/95 backdrop-blur-md shadow-sm py-4"
                    : "bg-transparent py-6"
            )}
        >
            <nav className="container mx-auto px-4 flex justify-between items-center">
                <Link href="#" className="text-2xl font-extrabold text-[#2C3E50] tracking-tight">
                    Vjbiofuel
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-10 items-center">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                className="font-medium text-[#2C3E50] relative hover:text-[#2C3E50]/80 transition-colors after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#FFD700] after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="hidden md:block">
                    <Button
                        asChild
                        className="bg-[#FFD700] text-[#1a1a1a] hover:bg-[#e6c200] rounded-full px-8 font-semibold uppercase tracking-wide shadow-[0_4px_15px_rgba(255,215,0,0.3)] hover:shadow-[0_8px_20px_rgba(255,215,0,0.4)] hover:-translate-y-0.5 transition-all"
                    >
                        <Link href="#">Get a Quote</Link>
                    </Button>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <button className="text-2xl text-[#2C3E50]">
                                <Menu />
                                <span className="sr-only">Toggle menu</span>
                            </button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-full sm:w-[300px] flex flex-col justify-center items-center bg-white">
                            <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                            <div className="absolute top-4 right-4">
                                {/* Close button is built-in to SheetContent usually, but we can customize or let it be */}
                            </div>
                            <ul className="flex flex-col gap-8 text-center">
                                {navItems.map((item) => (
                                    <li key={item.name}>
                                        <SheetClose asChild>
                                            <Link
                                                href={item.href}
                                                className="text-2xl font-semibold text-[#2C3E50] hover:text-[#FFD700] transition-colors"
                                            >
                                                {item.name}
                                            </Link>
                                        </SheetClose>
                                    </li>
                                ))}
                                <li>
                                    <SheetClose asChild>
                                        <Button
                                            asChild
                                            className="mt-4 bg-[#FFD700] text-[#1a1a1a] hover:bg-[#e6c200] rounded-full px-8 py-6 text-lg font-semibold uppercase tracking-wide shadow-lg"
                                        >
                                            <Link href="#">Get a Quote</Link>
                                        </Button>
                                    </SheetClose>
                                </li>
                            </ul>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    );
}
