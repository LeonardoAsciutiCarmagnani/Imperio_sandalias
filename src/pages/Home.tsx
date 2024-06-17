
import Banner from "@/Components/Banner/Banner";
import { CiHeart } from "react-icons/ci";
// import Card_3 from "@/Components/Cards/Card-3";
import { Header } from "@/Components/Header/Header";
import { ImWhatsapp } from "react-icons/im";
import Sandalias from "@/Components/Cards/Sandalias";


export default function Home(){

    return(
        <div>
            <div>
                <section id="header">
                    <Header/>
                </section>
            </div>
            <div>
                <section id="banner">
                    <Banner/>
                </section>
            </div>
            <div className="flex flex-col items-center justify-center border-[0.15rem] h-[8rem] mt-[3.5rem] gap-y-1">
                <CiHeart className="text-4xl "/>
                <h2 className="text-[19px] font-bold uppercase">Estilo único</h2>
                <h3 className="text-[18px]">O conforto que você merece</h3>
            </div>
            <div>
                <main className="px-3 mt-8">
                    <div id="sandalias" className="flex flex-col justify-center items-center w-full">
                        <h2 className='h-[2.15rem] flex items-center justify-center text-black text-[24px] mt-6 w-fit border-b-[0.5px] border-primary shadow-primary font-inter mb-6'>Sandálias</h2>
                        <Sandalias/>
                    </div>
                    {/* <section id="card_2" className="flex flex-col justify-center items-center mt-10">
                    <h2 className='h-[2.15rem] flex items-center justify-center text-black text-[24px] mt-6 w-fit border-b-[0.5px] border-primary shadow-primary font-inter'>Lançamentos</h2>
                        <Card_2/>
                    </section> */}
                    
                </main>
            </div>
            <section id="whatsapp" className="fixed bottom-4 right-4 z-50">
                <button className="h-[3.2rem] w-[3.2rem] bg-green-500 flex items-center justify-center rounded-full hover:cursor-pointer p-3">
                    <ImWhatsapp className="h-9 w-9 text-white"/>
                </button>
            </section>
        </div>
    )
}