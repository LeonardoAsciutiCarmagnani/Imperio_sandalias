import { useState } from 'react';

export default function Card_2() {
    // Estado para armazenar os dados dos cards
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [cards2, setCards2] = useState([
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
  }//   },{
//     id: 6,
//     image: "https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     name: "Product Name",
//     description: "Produto 6",
//     price: 20.00,
//     originalPrice: 25.00,
//     discount: 20
// },{
//     id: 7,
//     image: "https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     name: "Product Name",
//     description: "Produto 7",
//     price: 20.00,
//     originalPrice: 25.00,
//     discount: 20
// },{
//     id: 8,
//     image: "https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     name: "Product Name",
//     description: "Produto 8",
//     price: 20.00,
//     originalPrice: 25.00,
//     discount: 20
// },{
//     id: 9,
//     image: "https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     name: "Product Name",
//     description: "Produto 9",
//     price: 20.00,
//     originalPrice: 25.00,
//     discount: 20
// },{
//     id: 10,
//     image: "https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     name: "Product Name",
//     description: "Produto 10",
//     price: 20.00,
//     originalPrice: 25.00,
//     discount: 20
// }
]);

    // Função para adicionar um novo card
    // const addCard = () => {
    //     const newCard = {
    //         id: cards.length + 1,
    //         image: "", 
    //         name: "New Product",
    //         description: "Description goes here.",
    //         price: 0,
    //         originalPrice: 0,
    //         discount: 0
    //     };
    //     setCards([...cards, newCard]);
    // };

    // Função para remover um card
    // const removeCard = (id:number) => {
    //     const updatedCards = cards.filter(card => card.id !== id);
    //     setCards(updatedCards);
    // };

    return (
        <section className="flex overflow-x-auto gap-x-4 w-full h-full items-center p-4 scroll-smooth justify-between"  id="noScrollbar" style={{ scrollSnapType: 'x mandatory' }}>
    {cards2.map(card => (
        <div key={card.id} className="w-80 min-w-[19.5rem] transform overflow-hidden rounded-lg bg-indigo-100 shadow-md duration-300 hover:scale-105 hover:shadow-lg" style={{ scrollSnapAlign: 'center' }}>
            <img
                className="h-48 w-full object-cover object-center"
                src={card.image}
                alt="Product Image"
            />
            <div className="p-4 bg-slate-200">
                <h2 className="mb-2 text-lg font-medium text-gray-900">{card.name}</h2>
                <p className="mb-2 text-base text-gray-700">{card.description}</p>
                <div className="flex items-center">
                    <p className="mr-2 text-lg font-semibold text-gray-900">${card.price.toFixed(2)}</p>
                    <p className="text-base font-medium text-gray-500 line-through">${card.originalPrice.toFixed(2)}</p>
                    <p className="ml-auto text-base font-medium text-rose-500">{card.discount}% off</p>
                    {/* <button onClick={() => removeCard(card.id)}>Remove</button> */}
                </div>
            </div>
        </div>
    ))}
    {/* <button onClick={addCard}>Add Card</button> */}
</section>
    );
}