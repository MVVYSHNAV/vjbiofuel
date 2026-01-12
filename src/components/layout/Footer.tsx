import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";

export function Footer() {
    return (
        <footer className="bg-[#1a1a1a] text-white pt-[80px] pb-[30px] border-t border-[#333]">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
                    {/* Brand Column */}
                    <div>
                        <Link href="/" className="text-3xl font-extrabold text-white tracking-tight mb-6 inline-block">
                            Vjbiofuel
                        </Link>
                        <p className="text-gray-400 leading-relaxed mb-6 max-w-[350px]">
                            Trusted manufacturer and bulk supplier of Light Diesel Oil (LDO) and industrial fuels. Powering industries with efficient, reliable, and sustainable energy solutions.
                        </p>
                        <div className="flex gap-4">
                            {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, index) => (
                                <Link key={index} href="#" className="w-10 h-10 rounded-full bg-[#333] flex items-center justify-center text-[#FFD700] hover:bg-[#FFD700] hover:text-[#1a1a1a] transition-all">
                                    <Icon />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div>
                        <h3 className="text-xl font-bold font-outfit text-white mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-[40px] after:h-[3px] after:bg-[#FFD700]">
                            Quick Links
                        </h3>
                        <ul className="space-y-4">
                            {[
                                { name: "Home", href: "/" },
                                { name: "Our Products", href: "/products" },
                                { name: "Industries", href: "/#industries" },
                                { name: "About Us", href: "/#about" },
                                { name: "Contact", href: "/#contact" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-gray-400 hover:text-[#FFD700] transition-colors flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700] opacity-0 hover:opacity-100 transition-opacity"></span>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info Column */}
                    <div>
                        <h3 className="text-xl font-bold font-outfit text-white mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-[40px] after:h-[3px] after:bg-[#FFD700]">
                            Contact Us
                        </h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 w-10 h-10 rounded-full bg-[#333] flex items-center justify-center text-[#FFD700] shrink-0">
                                    <FaLocationDot />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">Head Office</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Kinfra Textile Centre, Nadukani, Pallivayal, Kannur, Kerala, Pin: 670142
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 w-10 h-10 rounded-full bg-[#333] flex items-center justify-center text-[#FFD700] shrink-0">
                                    <FaPhone />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">Phone</h4>
                                    <p className="text-gray-400 text-sm">
                                        +91 79977 59596 <br />
                                        +91 94470 14865
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 w-10 h-10 rounded-full bg-[#333] flex items-center justify-center text-[#FFD700] shrink-0">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">Email</h4>
                                    <p className="text-gray-400 text-sm">
                                        biofuelvj@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#333] pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()}   <span className="text-red-500">Vjbiofuel</span>.</p>
                </div>
            </div>
        </footer>
    );
}
