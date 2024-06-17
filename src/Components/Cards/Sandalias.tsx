import { log } from 'console';
import { useState } from 'react';

export default function Sandalias() {



    const [sandalias, setSandalias] = useState([
        
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            name: "Product Name",
            description: "Produto 1",
            price: 20.00,
            originalPrice: 25.00,
            discount: 20
        },
        {
          id: 2,
          image: "https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          name: "Product Name",
          description: "Produto 2",
          price: 20.00,
          originalPrice: 25.00,
          discount: 20
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        name: "Product Name",
        description: "Produto 3",
        price: 20.00,
        originalPrice: 25.00,
        discount: 20
    }
    ,{
      id: 4,
      image: "https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      name: "Product Name",
      description: "Produto 4",
      price: 20.00,
      originalPrice: 25.00,
      discount: 20
  },{
    id: 5,
      image: "https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      name: "Product Name",
      description: "Produto 5",
      price: 20.00,
      originalPrice: 25.00,
      discount: 20
  },{
    id: 6,
    image: "https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    name: "Product Name",
    description: "Produto 6",
    price: 20.00,
    originalPrice: 25.00,
    discount: 20
},{
    id: 7,
    image: "https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    name: "Product Name",
    description: "Produto 7",
    price: 20.00,
    originalPrice: 25.00,
    discount: 20
},{
    id: 8,
    image: "https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    name: "Product Name",
    description: "Produto 8",
    price: 20.00,
    originalPrice: 25.00,
    discount: 20
},{
    id: 9,
    image: "https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    name: "Product Name",
    description: "Produto 9",
    price: 20.00,
    originalPrice: 25.00,
    discount: 20
},{
    id: 10,
    image: "https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    name: "Product Name",
    description: "Produto 10",
    price: 20.00,
    originalPrice: 25.00,
    discount: 20
}
]);
console.log(setSandalias)

    return (
        <section className="grid grid-cols-2 scroll-smooth gap-x-6">
    {sandalias.map(sandalia => (
        <div key={sandalia.id} className="w-fit" >
            <img
                className="w-full object-cover object-center rounded-md"
                src={sandalia.image}
                alt="Product Image"
            />
            <div className="flex p-2 flex-col items-center justify-center mb-2">
                <h2 className="text-lg font-medium text-gray-900 w-fit justify-self-end">{sandalia.name}</h2>
                <p className="text-base text-gray-700 w-fit">{sandalia.description}</p>
                <div className="flex items-center justify-center">
                    <p className="mr-2 text-lg font-semibold text-gray-900 w-fit">${sandalia.price.toFixed(2)}</p>
                    <p className="text-base font-medium text-gray-500 line-through w-fit">${sandalia.originalPrice.toFixed(2)}</p>
                    {/* <p className="ml-auto text-base font-medium text-rose-500 w-fit">{card.discount}% off</p> */}
                    {/* <button onClick={() => removeCard(card.id)}>Remove</button> */}
                </div>
            </div>
        </div>
    ))}
    {/* <button onClick={addCard}>Add Card</button> */}
</section>
    );
}
