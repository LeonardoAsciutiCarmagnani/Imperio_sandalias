// import { FaMoon } from "react-icons/fa";
import logo from "../../assets/logo_pavan.png"
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { IoMoonSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { GiPadlock } from "react-icons/gi";

export function Header() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/adm'); 
      };
    
    return (
        <div className="h-[4rem] justify-between px-8 flex bg-slate-800 items-center shadow-sm border-b-[0.28rem] border-slate-900 shadow-slate-700">
            
            <div className="flex items-center gap-3">
                <img src={logo} alt="" className="w-[2.5rem]"/>
                <h1 className="font-lobster text-xl text-primary">Pavan Paiva</h1>
            </div>
            <div className="flex items-center justify-around w-[6.5rem] h-full">
                    <IoMoonSharp className="size-7 text-slate-300"/>
                <div className="items-center h-[1.8rem]">
                    <PiShoppingCartSimpleFill className="size-7 text-slate-300"/>
                    <div className="bg-slate-800 size-[1.2rem] rounded-full flex justify-center items-center border-[0.1rem] border-slate-400 relative left-3 bottom-3 h-min">
                        <span className= "rounded-full font-bold text-xs text-pink-400">1</span>
                    </div> 
                </div>
            </div>
            <div className="text-slate-300 flex items-center justify-center">
                <button onClick={handleClick}><GiPadlock className="size-6"/></button>
            </div>
        </div>
    )
}


