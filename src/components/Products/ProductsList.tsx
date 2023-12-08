import { Product } from "../../interfaces/AppInterface"
import { nanoid } from "nanoid";
import ProductCard from "./ProductCard";

export default function ProductsList() {

    const products: Product[] = [
        {
            id: nanoid(),
            name: "Laptop",
            description: "A high-performance laptop with the latest specifications, ideal for work and entertainment.",
            price: 1299.99,
        },
        {
            id: nanoid(),
            name: "Smartphone",
            description: "An advanced smartphone with a powerful camera, long-lasting battery, and cutting-edge features.",
            price: 899.99,
        },
        {
            id: nanoid(),
            name: "Headphones",
            description: "Premium headphones with noise-canceling technology, providing an immersive audio experience.",
            price: 199.99,
        },
        {
            id: nanoid(),
            name: "Fitness Tracker",
            description: "A sleek fitness tracker that monitors your activity, heart rate, and sleep patterns for a healthier lifestyle.",
            price: 79.99,
        },
        {
            id: nanoid(),
            name: "Coffee Maker",
            description: "A state-of-the-art coffee maker that brews delicious coffee with customizable settings, perfect for coffee enthusiasts.",
            price: 149.99,
        },
    ];

    return (
        <main>
            <ul className="product-list">
                {
                    products.map((product) => (
                        <li>
                            <ProductCard product={product} />
                        </li>
                    ))
                }

            </ul>
        </main>
    )
}