import { useState } from 'react';
import { Link } from 'react-router-dom';

interface Card {
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

export default function Card_1() {
    // Estado para armazenar os dados dos cards
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [cards1, setCards1] = useState([
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            name: "Product Name",
            description: "Produto 1",
            price: 20.00,
            originalPrice: 25.00,
            discount: 20,
            sizes: ["S", "M", "L", "XL"],
            colors: ["Red", "Blue", "Green"]
        },
        {
          id: 2,
          image: "https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          name: "Product Name",
          description: "Produto 2",
          price: 20.00,
          originalPrice: 25.00,
          discount: 20,
          sizes: ["S", "M", "L", "XL"],
          colors: ["Red", "Blue", "Green"]
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        name: "Product Name",
        description: "Produto 3",
        price: 20.00,
        originalPrice: 25.00,
        discount: 20,
        sizes: ["S", "M", "L", "XL"],
        colors: ["Red", "Blue", "Green"]
    }
    ,{
      id: 4,
      image: "https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      name: "Product Name",
      description: "Produto 4",
      price: 20.00,
      originalPrice: 25.00,
      discount: 20,
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Blue", "Green"]
  },{
    id: 5,
      image: "https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      name: "Product Name",
      description: "Produto 5",
      price: 20.00,
      originalPrice: 25.00,
      discount: 20,
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Blue", "Green"]
  },{
    id: 6,
    image: "https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    name: "Product Name",
    description: "Produto 6",
    price: 20.00,
    originalPrice: 25.00,
    discount: 20,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Blue", "Green"]
},{
    id: 7,
    image: "https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    name: "Product Name",
    description: "Produto 7",
    price: 20.00,
    originalPrice: 25.00,
    discount: 20,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Blue", "Green"]
},{
    id: 8,
    image: "https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    name: "Product Name",
    description: "Produto 8",
    price: 20.00,
    originalPrice: 25.00,
    discount: 20,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Blue", "Green"]
},{
    id: 9,
    image: "https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    name: "Product Name",
    description: "Produto 9",
    price: 20.00,
    originalPrice: 25.00,
    discount: 20,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Blue", "Green"]
},{
    id: 10,
    image: "https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    name: "Product Name",
    description: "Produto 10",
    price: 20.00,
    originalPrice: 25.00,
    discount: 20,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Blue", "Green"]
}
]);

   

    return (
        <Link to={`/product/${card.id}`}>
            <section className="flex overflow-x-auto gap-x-4 w-full h-full items-center p-4 scroll-smooth justify-between" id="noScrollbar" style={{ scrollSnapType: 'x mandatory' }}>
                {cards1.map((c: Card) => (
                    <div key={c.id} className="w-80 min-w-[19.5rem] transform overflow-hidden rounded-sm bg-rose-100 shadow-md duration-300 hover:scale-105 hover:shadow-lg" style={{ scrollSnapAlign: 'center' }}>
                        <img
                            className="h-48 w-full object-cover object-center"
                            src={c.image}
                            alt="Product Image"
                        />
                        <div className="p-4">
                            <h2 className="mb-2 text-lg font-medium text-gray-900">{c.name}</h2>
                            <p className="mb-2 text-base text-gray-700">{c.description}</p>
                            <div className="flex items-center">
                                <p className="mr-2 text-lg font-semibold text-gray-900">${c.price.toFixed(2)}</p>
                                <p className="text-base font-medium text-gray-500 line-through">${c.originalPrice.toFixed(2)}</p>
                                {/* <p className="ml-auto text-base font-medium text-rose-500">{c.discount}% off</p> */}
                                {/* <button onClick={() => removeCard(c.id)}>Remove</button> */}
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </Link>
    );
}