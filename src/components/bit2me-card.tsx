import {cn} from "@/lib/utils";
import {fontSerif} from "../fonts";
// import NavButton from "./nav-button.tsx";

export default function Bit2meCard() {
	return (
		<div className={cn("flex flex-col items-center border flex-grow pb-20 rounded-3xl shadow-xl bg-red-500 hover:scale-95 transition-all", fontSerif.className)}>
			<div className="tag-cover rounded-t-3xl h-[120px] w-full" />
			<div className="w-full px-4 text-white">
        		<h1 className="mt-4 mb-2 text-4xl font-extrabold tracking-tight lg:text-5xl">
					— Novos desafios
				</h1>	
				<p>
					Após alguns anos trabalhando com marketing de influência - consumindo diariamente tudo sobre o universo e esse mercado em constante formação - entendi que estava disposta a procurar novas experiências, com produtos e serviços variados. E foi aqui que eu migrei para a Bit2Me, plataforma espanhola líder na compra e venda de criptomoedas. 
				</p>
			</div>
{/*			<NavButton path="tag">
				Trajetória completa aqui!
			</NavButton>*/}		
	
		</div>
	)
}