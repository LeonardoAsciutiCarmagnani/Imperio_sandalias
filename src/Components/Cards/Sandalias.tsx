
import { useState } from 'react';
import sandalia from "../../assets/sandalia.jpg"
import sandalia1 from "../../assets/sandalia.jpg"
import sandalia2 from "../../assets/sandalia2.png"
import sandalia3 from "../../assets/sandalia3.jpg"


export default function Sandalias() {



    const [sandalias, setSandalias] = useState([
        
        {
            id: 1,
            image: `${sandalia}`,
            name: "Sandalia 1",
            description: "Produto 1",
            price: 20.00,
            originalPrice: 25.00,
            discount: 20
        },
        {
          id: 2,
          image: `${sandalia1}`,
          name: "Product Name",
          description: "Produto 2",
          price: 20.00,
          originalPrice: 25.00,
          discount: 20
      },
      {
        id: 3,
        image: `${sandalia2}`,
        name: "Product Name",
        description: "Produto 3",
        price: 20.00,
        originalPrice: 25.00,
        discount: 20
    }
    ,{
      id: 4,
      image: `${sandalia3}`,
      name: "Product Name",
      description: "Produto 4",
      price: 20.00,
      originalPrice: 25.00,
      discount: 20
  },{
    id: 5,
      image: `${sandalia1}`,
      name: "Product Name",
      description: "Produto 5",
      price: 20.00,
      originalPrice: 25.00,
      discount: 20
  },{
    id: 6,
    image: `${sandalia2}`,
    name: "Product Name",
    description: "Produto 6",
    price: 20.00,
    originalPrice: 25.00,
    discount: 20
},{
    id: 7,
    image: `${sandalia}`,
    name: "Product Name",
    description: "Produto 7",
    price: 20.00,
    originalPrice: 25.00,
    discount: 20
},{
    id: 8,
    image: `${sandalia1}`,
    name: "Product Name",
    description: "Produto 8",
    price: 20.00,
    originalPrice: 25.00,
    discount: 20
},{
    id: 9,
    image: `${sandalia2}`,
    name: "Product Name",
    description: "Produto 9",
    price: 20.00,
    originalPrice: 25.00,
    discount: 20
},{
    id: 10,
    image: `${sandalia}`,
    name: "Product Name",
    description: "Produto 10",
    price: 20.00,
    originalPrice: 25.00,
    discount: 20
}
]);
console.log(setSandalias)

    return (
        <section className="grid grid-cols-2 scroll-smooth gap-x-6 justify-center">
    {sandalias.map(sandalia => (
        <div key={sandalia.id} className="w-full">
            <img
                className="w-full h-[12rem] object-cover object-center rounded-xl"
                src={sandalia.image}
                alt={sandalia.name}
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
