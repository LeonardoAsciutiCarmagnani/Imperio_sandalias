
import { useState } from 'react';
import sandalia from "../../assets/sandalia.jpg"
import sandalia1 from "../../assets/sandalia1.png"
import sandalia2 from "../../assets/sandalia2.png"
import sandalia3 from "../../assets/sandalia3.jpg"
import sandalia4 from "../../assets/sandalia_4.jpg"
import sandalia5 from "../../assets/sandalia_1.png"
import sandalia6 from "../../assets/sandalia-feminina-confortavel-preta-489100.jpg"
import sandalia7 from "../../assets/sandalia_7.jpg"

import { CiCreditCard2 } from "react-icons/ci";

export default function Sandalias() {



    const [sandalias, setSandalias] = useState([
        
        {
            id: 1,
            image: `${sandalia}`,
            name: "Sandalia 1",
            description: "em até 6x sem juros no cartão",
            price: 20.00,
            originalPrice: 25.00,
            discount: Desconto(20.00,43.00)
        },
        {
          id: 2,
          image: `${sandalia1}`,
          name: "Sandalia 2",
          description: "em até 6x sem juros no cartão",
          price: 20.00,
          originalPrice: 25.00,
          discount: Desconto(20.00,65.00)
      },
      {
        id: 3,
        image: `${sandalia2}`,
        name: "Sandalia 3",
        description: "em até 6x sem juros no cartão",
        price: 20.00,
        originalPrice: 25.00,
        discount: Desconto(20.00,44.00)
    }
    ,{
      id: 4,
      image: `${sandalia3}`,
      name: "Sandalia 4",
      description: "em até 6x sem juros no cartão",
      price: 20.00,
      originalPrice: 25.00,
      discount: Desconto(20.00,36.00)
  },{
    id: 5,
      image: `${sandalia4}`,
      name: "Sandalia 5",
      description: "em até 6x sem juros no cartão",
      price: 20.00,
      originalPrice: 25.00,
      discount: Desconto(20.00,28.00)
  },{
    id: 6,
    image: `${sandalia5}`,
    name: "Sandalia 6",
    description: "em até 6x sem juros no cartão",
    price: 20.00,
    originalPrice: 25.00,
    discount: Desconto(20.00,22.00)
},{
    id: 7,
    image: `${sandalia6}`,
    name: "Sandalia 7",
    description: "em até 6x sem juros no cartão",
    price: 20.00,
    originalPrice: 25.00,
    discount: Desconto(20.00,29.00)
},{
    id: 8,
    image: `${sandalia7}`,
    name: "Sandalia 8",
    description: "em até 6x sem juros no cartão",
    price: 20.00,
    originalPrice: 25.00,
    discount: Desconto(20.00,32.00)
},{
    id: 9,
    image: `${sandalia3}`,
    name: "Sandalia 9",
    description: "em até 6x sem juros no cartão",
    price: 20.00,
    originalPrice: 25.00,
    discount: Desconto(40,50)
},{
    id: 10,
    image: `${sandalia4}`,
    name: "Sandalia 10",
    description: "em até 6x sem juros no cartão",
    price: 20.00,
    originalPrice: 25.00,
    discount: Desconto(100,50)
}
])

function Desconto(valor:number, desconto:number){
   const discount = ((valor * desconto) / 100);
   return discount
}

console.log(setSandalias)

    return (
        <section className="grid grid-cols-2 scroll-smooth gap-x-6 justify-center xl:flex xl:flex-wrap xl:mx-6">
    {sandalias.map(sandalia => (
        <div key={sandalia.id} className="w-full">
            <span className='relative top-[1.9rem] left-[0.2rem] rounded-full border-[0.124rem] border-red-400 bg-red-300 text-slate-900 p-[0.2rem] text-sm font-semibold '>-{sandalia.discount}%</span>
            <img
                className="w-full h-[12rem] object-cover object-center rounded-xl xl:h-[20rem]"
                src={sandalia.image}
                alt={sandalia.name}
            />
            <div className="flex p-2 flex-col items-center justify-center mb-2">
                <h2 className="text-lg font-medium text-gray-900 w-fit justify-self-end">{sandalia.name}</h2>
                <div className="flex items-center justify-center">
                    <p className="mr-2 text-lg font-semibold text-gray-900 w-fit">R${sandalia.price.toFixed(2)}</p>
                    <p className="text-base font-medium text-gray-500 line-through w-fit">R${sandalia.originalPrice.toFixed(2)}</p>
                    {/* <p className="ml-auto text-base font-medium text-rose-500 w-fit">{card.discount}% off</p> */}
                    {/* <button onClick={() => removeCard(card.id)}>Remove</button> */}
                </div>
                <p className="flex items-center justify-center gap-x-2 text-sm text-gray-700 w-fit "><CiCreditCard2 className='text-3xl'/>{sandalia.description}</p>
            </div>
        </div>
    ))}
    {/* <button onClick={addCard}>Add Card</button> */}
</section>
    );
}
