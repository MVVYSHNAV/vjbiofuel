export interface Product {
    id: string;
    name: string;
    shortDescription: string;
    description: string;
    price: number; // Price per liter/kg
    unit: string;
    image: string;
    specifications: Record<string, string>;
    features: string[];
}

export const products: Product[] = [
    {
        id: "light-diesel-oil",
        name: "Light Diesel Oil (LDO)",
        shortDescription: "Premium industrial fuel for furnaces and boilers.",
        description:
            "Our Light Diesel Oil (LDO) is a high-quality distillate fuel specifically designed for industrial applications. It offers superior combustion efficiency, low ash content, and consistent calorific value, making it the ideal choice for furnaces, boilers, and heating equipment in textile, foundry, and food processing industries.",
        price: 65,
        unit: "Liter",
        image: "/images/tank.jpg", // Placeholder using existing image
        specifications: {
            "Density @ 15°C": "0.850 - 0.870 g/ml",
            "Flash Point": "> 66°C",
            "Pour Point": "< 12°C",
            "Sulphur Content": "< 1.5%",
            "Gross Calorific Value": "10,300 kcal/kg",
            "Viscosity @ 40°C": "2.5 - 15.7 cSt",
        },
        features: [
            "High Calorific Value ensures efficient heating",
            "Low Sulphur content reduces equipment corrosion",
            "Consistent quality for steady flame stability",
            "Suitable for a wide range of industrial burners",
        ],
    },
    {
        id: "furnace-oil",
        name: "Furnace Oil",
        shortDescription: "Heavy fuel oil for large industrial heating applications.",
        description:
            "Furnace Oil is a residual fuel used primarily for steam boilers and process heaters. It provides high heat output and is a cost-effective solution for power generation and heavy industrial heating needs.",
        price: 55,
        unit: "Liter",
        image: "/images/hero1.jpg",
        specifications: {
            "Density @ 15°C": "0.890 - 0.950 g/ml",
            "Flash Point": "> 66°C",
            "Pour Point": "< 21°C",
            "Sulphur Content": "< 3.5%",
            "Gross Calorific Value": "10,000 kcal/kg",
            "Viscosity @ 50°C": "125 - 180 cSt",
        },
        features: [
            "Economical fuel source for large boilers",
            "High thermal efficiency",
            "Stable combustion properties",
            "Available in bulk quantities",
        ],
    },
    {
        id: "biodiesel",
        name: "Biodiesel (B100)",
        shortDescription: "Eco-friendly, renewable alternative fuel.",
        description:
            "Biodiesel is a clean-burning, renewable alternative to petroleum diesel. Produced from vegetable oils, it reduces greenhouse gas emissions and is biodegradable, making it an excellent choice for environmentally conscious industries.",
        price: 70,
        unit: "Liter",
        image: "/images/AgroIndustries.jpg",
        specifications: {
            "Density @ 15°C": "0.870 - 0.890 g/ml",
            "Flash Point": "> 130°C",
            "Pour Point": "< 0°C",
            "Sulphur Content": "< 0.05%",
            "Gross Calorific Value": "9,500 kcal/kg",
            "Viscosity @ 40°C": "3.5 - 5.0 cSt",
        },
        features: [
            "Biodegradable and non-toxic",
            "Reduces carbon footprint",
            "Non-flammable (high flash point)",
            "Can be used in existing diesel engines",
        ],
    },
];
