import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Separator } from "@/components/ui/separator";

// This is required for static site generation with dynamic routes
export async function generateStaticParams() {
    return products.map((product) => ({
        id: product.id,
    }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = products.find((p) => p.id === id);

    if (!product) {
        notFound();
    }

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 pt-[100px]">
                {/* Breadcrumb / Back Navigation */}
                <div className="bg-gray-50 py-4 border-b">
                    <div className="container mx-auto px-4">
                        <Link href="/products" className="text-gray-500 hover:text-[#FFD700] transition-colors text-sm font-medium">
                            &larr; Back to Products
                        </Link>
                    </div>
                </div>

                <section className="py-[60px] md:py-[100px] bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                            {/* Product Image */}
                            <div className="relative h-[400px] md:h-[500px] rounded-[24px] overflow-hidden shadow-xl bg-gray-100">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Product Details */}
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold font-outfit text-[#2C3E50] mb-4">
                                    {product.name}
                                </h1>
                                <div className="text-3xl font-bold text-[#FFD700] mb-6">
                                    ₹{product.price} <span className="text-lg text-gray-500 font-normal">/ {product.unit}</span>
                                </div>

                                <p className="text-lg text-[#6c757d] leading-relaxed mb-8">
                                    {product.description}
                                </p>

                                <div className="mb-10">
                                    <h3 className="text-xl font-bold text-[#2C3E50] mb-4">Key Features</h3>
                                    <ul className="space-y-3">
                                        {product.features.map((feature, index) => (
                                            <li key={index} className="flex items-start gap-3 text-[#6c757d]">
                                                <span className="mt-1.5 w-2 h-2 rounded-full bg-[#FFD700] shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex gap-4">
                                    <Button size="lg" className="bg-[#1a1a1a] text-white hover:bg-[#FFD700] hover:text-[#1a1a1a] transition-all rounded-full px-10 text-lg">
                                        Enquire Now
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Technical Specifications */}
                        <div className="mt-20">
                            <h2 className="text-3xl font-bold text-[#2C3E50] mb-8 text-center font-outfit">Technical Specifications</h2>
                            <div className="max-w-4xl mx-auto rounded-xl border overflow-hidden">
                                <Table>
                                    <TableHeader>
                                        <TableRow className="bg-gray-50 hover:bg-gray-50">
                                            <TableHead className="w-1/2 font-bold text-[#2C3E50]">Parameter</TableHead>
                                            <TableHead className="font-bold text-[#2C3E50]">Value</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {Object.entries(product.specifications).map(([key, value]) => (
                                            <TableRow key={key}>
                                                <TableCell className="font-medium">{key}</TableCell>
                                                <TableCell>{value}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
