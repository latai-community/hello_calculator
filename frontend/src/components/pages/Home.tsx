// src/pages/Home.tsx

import Calculator from "../organisms/Calculator";
import Footer from "../organisms/Footer";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow flex items-center justify-center p-4">
                <Calculator />
            </main>
            <Footer/>
        </div>
    );
}