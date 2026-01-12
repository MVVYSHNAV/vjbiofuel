import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function ProductsPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                {/* Page Header */}
                <div className="bg-[#1a1a1a] text-white pt-[150px] pb-[60px] text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-outfit mb-4">Our Products</h1>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto px-4">
                        Explore our range of high-quality industrial fuels designed for maximum efficiency and performance.
                    </p>
                </div>

                {/* Product Grid */}
                <section className="section-spacing bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            {products.map((product) => (
                                <Card key={product.id} className="overflow-hidden border-none shadow-[0_5px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2 group">
                                    <div className="h-[250px] overflow-hidden relative bg-gray-100">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                    <CardHeader className="pt-6">
                                        <CardTitle className="text-2xl font-bold text-[#2C3E50]">{product.name}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-[#6c757d] mb-4">
                                            {product.shortDescription}
                                        </p>
                                        <div className="text-xl font-bold text-[#FFD700]">
                                            ₹{product.price} <span className="text-sm text-gray-500 font-normal">/ {product.unit}</span>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="pb-8">
                                        <Button asChild className="w-full bg-[#1a1a1a] text-white hover:bg-[#FFD700] hover:text-[#1a1a1a] transition-colors rounded-full font-semibold">
                                            <Link href={`/products/${product.id}`}>View Details</Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
