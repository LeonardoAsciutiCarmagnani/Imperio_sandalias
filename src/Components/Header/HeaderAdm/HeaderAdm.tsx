import logo from "../../../assets/logo_pavan.png"


export default function HeaderAdm() {
    return (
        <div className="h-[4rem] justify-around px-8 flex bg-slate-800 items-center shadow-sm border-b-[0.28rem] border-slate-900 shadow-slate-700">
            <div className="flex items-center gap-3">
                <img src={logo} alt="" className="w-[2.5rem]"/>
                <h1 className="font-lobster text-xl text-primary">Pavan Paiva</h1>
            </div>
            
            <div>
                <h2 className="text-red-400">
                    Painel administrativo
                </h2>
            </div>

        </div>
    )
}


