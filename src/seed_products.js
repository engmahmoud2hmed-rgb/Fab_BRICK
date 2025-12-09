import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import shop1 from './assets/image/shop1.jpg';
import shop2 from './assets/image/shop2.jpg';
import shop3 from './assets/image/shop3.jpg';
import yellowChair from './assets/image/yellow-chair.jpg';

const products = [
    {
        name: "Classic Wall Covering",
        price: 120,
        image: shop1, // This will be the local path which might not work perfectly for remote DB unless hosted, but for local dev with simple imports it's fine or we'll see blobs. 
        // Ideally these should be uploaded to Storage, but for now we'll store the import result (which is a path string in Vite).
        description: "Elegant wall covering for modern homes."
    },
    {
        name: "Modern Texture Brick",
        price: 95,
        image: shop2,
        description: "Textured brick design for a bold look."
    },
    {
        name: "Minimalist Panel",
        price: 150,
        image: shop3,
        description: "Clean and minimalist paneling."
    },
    {
        name: "Accent Yellow Chair",
        price: 200,
        image: yellowChair,
        description: "A bright accent piece for any room."
    }
];

export const seedDatabase = async () => {
    try {
        const colRef = collection(db, "products");
        const snapshot = await getDocs(colRef);
        const existingNames = new Set(snapshot.docs.map(doc => doc.data().name));

        console.log("Checking for missing products...");
        let addedCount = 0;

        for (const product of products) {
            if (!existingNames.has(product.name)) {
                await addDoc(colRef, product);
                console.log(`Added missing product: ${product.name}`);
                addedCount++;
            }
        }

        if (addedCount > 0) {
            console.log(`Database updated. Added ${addedCount} products.`);
        } else {
            console.log("All products already exist.");
        }
    } catch (error) {
        console.error("Error seeding database:", error);
    }
};
