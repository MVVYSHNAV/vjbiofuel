import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaLocationDot, FaPhone, FaClock, FaEnvelope } from "react-icons/fa6";

export function Contact() {
    return (
        <section id="contact" className="py-[100px] bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-[600px] mx-auto">
                    <h2 className="text-4xl md:text-[2.5rem] font-bold text-[#2C3E50] mb-4">
                        Connect with Our Team
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start bg-[#fffaf1] p-4 md:p-8 rounded-lg">
                    {/* Left Side: Form */}
                    <div className="bg-[#f4f4f4] p-8 md:p-12 rounded-[16px]">
                        <h3 className="text-[1.8rem] font-bold mb-8 text-[#2C3E50]">
                            Get in Touch with Us
                        </h3>
                        <form className="flex flex-col gap-6">
                            <div className="flex flex-col sm:flex-row gap-6">
                                <Input placeholder="Input your name" className="bg-white border-none py-6 text-base" />
                                <Input type="email" placeholder="Input your email" className="bg-white border-none py-6 text-base" />
                            </div>
                            <Input placeholder="Subject" className="bg-white border-none py-6 text-base" />
                            <Textarea placeholder="Submit your message request" className="bg-white border-none min-h-[150px] resize-none text-base" />
                            <Button className="self-start bg-[#FFD700] text-[#1a1a1a] hover:bg-[#e6c200] px-10 py-6 text-base font-semibold shadow-[0_4px_15px_rgba(255,215,0,0.3)] hover:shadow-[0_8px_20px_rgba(255,215,0,0.4)] hover:-translate-y-[2px] transition-all">
                                Send message
                            </Button>
                        </form>
                    </div>

                    {/* Right Side: Contact Details */}
                    <div>
                        <h3 className="text-[1.8rem] mb-4 font-bold text-[#2C3E50]">
                            Contact Details
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            {[
                                {
                                    icon: FaLocationDot,
                                    title: "Address",
                                    text: "Kinfra Textile Centre, Nadukani, Pallivayal, Kannur, Kerala, Pin: 670142",
                                },
                                {
                                    icon: FaPhone,
                                    title: "Mobile",
                                    text: "79977 59596, 94470 14865",
                                },
                                {
                                    icon: FaClock,
                                    title: "Availability",
                                    text: "Daily 09 am - 05 pm",
                                },
                                {
                                    icon: FaEnvelope,
                                    title: "Email",
                                    text: "biofuelvj@gmail.com",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 p-4 border border-[#eee] rounded-[8px] bg-white transition-all hover:border-[#FFD700] hover:shadow-sm"
                                >
                                    <div className="w-[50px] h-[50px] bg-[#FFD700] text-[#1a1a1a] rounded-[12px] flex items-center justify-center text-[1.2rem] shrink-0">
                                        <item.icon />
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-[#2C3E50] mb-1">
                                            {item.title}
                                        </h4>
                                        <p className="text-[0.9rem] text-[#6c757d]">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
