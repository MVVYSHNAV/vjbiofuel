import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const industries = [
    {
        title: "Foundries & Casting Units",
        description: "LDO used for melting metals and furnace heating.",
        image: "/images/Foundries&casting.jpg",
    },
    {
        title: "Textile Mills",
        description: "Fuel for boilers, dryers, and processing heat.",
        image: "/images/TextileMills.jpg",
    },
    {
        title: "Food Processing & Agro Industries",
        description: "Provides controlled heat for cooking, drying and steaming processes.",
        image: "/images/AgroIndustries.jpg",
    },
    {
        title: "Cement & Brick Manufacturing",
        description: "Furnace and kiln heating, ideal where steady high heat is needed.",
        image: "/images/Cement&Brick.jpg",
    },
    {
        title: "Laundry & Industrial Washing Units",
        description: "For boilers that run washing and drying machines.",
        image: "/images/TextileMills.jpg", // Using same image as original
    },
    {
        title: "Automobile & Engineering Workshops",
        description: "Used for furnaces and heat-treatment setups.",
        image: "/images/Workshops.jpg",
    },
];

export function Industries() {
    return (
        <section id="industries" className="section-spacing bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h5 className="text-[#e6c200] uppercase tracking-[2px] text-sm font-bold font-outfit mb-4">
                        Industries We Serve
                    </h5>
                    <h2 className="text-4xl md:text-[2.5rem] font-bold text-[#2C3E50]">
                        Powering Industries Across India
                    </h2>
                </div>

                <div className="max-w-[800px] mx-auto text-center mb-12">
                    <p className="text-lg text-[#6c757d]">
                        We proudly supply premium-quality Light Diesel Oil to a wide range of industries that rely on efficient and consistent heating fuel.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-[16px] overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.05)] border border-[rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:border-[#FFD700] group"
                        >
                            <div className="h-[200px] overflow-hidden relative">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3 text-[#2C3E50]">
                                    {item.title}
                                </h3>
                                <p className="text-[#6c757d] text-[0.95rem] leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
