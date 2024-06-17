import Admin from '@/pages/Adm'
import Home from '@/pages/Home'
import { Routes, Route } from 'react-router-dom'
import ProductDetails from '../ProductDetails/ProductDetails'

interface Product {
    id: number;
    image: string;
    name: string;
    description: string;
    price: number;
    originalPrice: number;
    discount: number;
    sizes: string[];
    colors: string[];
}

export default function MyRouter({ products }: { products: Product[] }) {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/adm" element={<Admin />} />
            <Route path="/product/:id" element={<ProductDetails products={products} />} />
        </Routes>
    )
}
