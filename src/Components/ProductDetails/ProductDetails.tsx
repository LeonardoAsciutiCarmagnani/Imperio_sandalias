import { useParams } from 'react-router-dom';

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

export default function ProductDetails({ products }: { products: Product[] }) {
    const { id } = useParams<{ id: string }>();
    const productId = parseInt(id || "");
    
    // Verifica se o ID é um número válido
    if (isNaN(productId)) {
        alert("Produto inválido.");
        return <div>Produto inválido</div>;
    }

    // Encontra o produto correspondente ao ID
    const product = products.find(prod => prod.id === productId);

    // Verifica se o produto foi encontrado
    if (!product) {
        return <div>Produto não encontrado</div>;
    }

    // Renderiza os detalhes do produto
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Imagem do produto */}
                <div>
                    <img src={product.image} alt={product.name} className="w-full rounded-lg shadow-lg" />
                </div>
                {/* Detalhes do produto */}
                <div>
                    <h1 className="text-3xl font-semibold mb-4">{product.name}</h1>
                    <p className="text-lg text-gray-700 mb-4">{product.description}</p>
                    <div className="flex items-center mb-4">
                        <p className="text-xl font-semibold text-gray-900 mr-2">${product.price.toFixed(2)}</p>
                        <p className="text-base font-medium text-gray-500 line-through">${product.originalPrice.toFixed(2)}</p>
                        <p className="text-base font-medium text-rose-500 ml-auto">{product.discount}% off</p>
                    </div>
                    {/* Opções de tamanhos */}
                    <div className="mb-4">
                        <p className="text-lg font-semibold mb-2">Tamanhos:</p>
                        <div className="flex space-x-4">
                            {product.sizes.map((size: string) => (
                                <span key={size} className="inline-block px-3 py-1 bg-gray-200 text-gray-700 rounded-md">{size}</span>
                            ))}
                        </div>
                    </div>
                    {/* Opções de cores */}
                    <div>
                        <p className="text-lg font-semibold mb-2">Cores:</p>
                        <div className="flex space-x-4">
                            {product.colors.map((color: string) => (
                                <span key={color} className="inline-block w-8 h-8 rounded-full border border-gray-300" style={{ backgroundColor: color }}></span>
                            ))}
                        </div>
                    </div>
                    {/* Botão de adicionar ao carrinho */}
                    <button className="mt-8 bg-rose-500 text-white px-6 py-3 rounded-md hover:bg-rose-600 transition duration-300">Adicionar ao Carrinho</button>
                </div>
            </div>
        </div>
    );
}
