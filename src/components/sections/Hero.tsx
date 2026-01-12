import Link from "next/link";
import Image from "next/image";
import { FaGoogle, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section id="home" className="pt-[180px] pb-[100px] min-h-screen flex items-center bg-gradient-to-br from-[#fdfbf7] to-white relative overflow-hidden">
            <div className="container mx-auto px-4 grid md:grid-cols-[1.2fr_1fr] gap-16 items-center">
                {/* Content */}
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <span className="inline-block bg-[rgba(255,215,0,0.15)] text-[#bfa100] px-4 py-1.5 rounded-full font-semibold text-sm mb-6">
                        Delivering Fuel That Drives Production
                    </span>
                    <h1 className="text-5xl md:text-6xl leading-[1.1] mb-6 font-bold font-outfit text-[#2C3E50]">
                        Trusted{" "}
                        <span className="relative text-[#FFD700] z-10 after:content-[''] after:absolute after:bottom-[5px] after:left-0 after:w-full after:h-[30%] after:bg-[rgba(255,215,0,0.2)] after:-z-10">
                            LDO Manufacturer
                        </span>{" "}
                        & Bulk Supplier
                    </h1>
                    <p className="text-xl text-[#6c757d] mb-10 max-w-[500px]">
                        High-quality Light Diesel Oil for industrial fuel applications. Assured purity, consistent performance, and nationwide delivery.
                    </p>

                    <div className="flex gap-6 items-center">
                        <Button
                            asChild
                            className="bg-[#FFD700] text-[#1a1a1a] hover:bg-[#e6c200] rounded-full px-8 py-6 text-lg font-semibold uppercase tracking-wide shadow-[0_4px_15px_rgba(255,215,0,0.3)] hover:shadow-[0_8px_20px_rgba(255,215,0,0.4)] hover:-translate-y-0.5 transition-all"
                        >
                            <Link href="#">Call Now</Link>
                        </Button>

                        <div className="flex gap-4">
                            {[
                                { icon: FaGoogle, href: "#" },
                                { icon: FaFacebookF, href: "#" },
                                { icon: FaWhatsapp, href: "#" },
                            ].map((social, index) => (
                                <Link
                                    key={index}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full bg-[#f8f9fa] flex items-center justify-center text-[#2C3E50] transition-colors hover:bg-[#2C3E50] hover:text-[#FFD700]"
                                >
                                    <social.icon />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Image */}
                <div className="relative">
                    <div className="relative rounded-[30px] shadow-2xl overflow-hidden bg-gray-200 aspect-[4/3] w-full">
                        {/* Using standard img tag temporarily if Next Image has issues with local files before next dev, but better to use Next Image */}
                        {/* Assuming images are in public/images/ */}
                        <Image
                            src="/images/hero1.jpg"
                            alt="Industrial Fuel Tank"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
