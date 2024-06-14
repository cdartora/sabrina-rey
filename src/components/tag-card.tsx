import {cn} from "@/lib/utils";
import {fontSerif} from "../fonts";
import NavButton from "./nav-button.tsx";

export default function TagCard() {
	return (
		<div className={cn("relative flex flex-col items-center justify-between border flex-grow rounded-3xl shadow-xl bg-sky-500 hover:scale-95 transition-all", fontSerif.className)}>
			<div>
				<div className="tag-cover rounded-t-3xl h-[120px] w-full" />
				<div className="w-full px-4 text-white">
	        		<h1 className="mt-4 mb-2 text-4xl font-extrabold tracking-tight lg:text-5xl">
						— Ponta pé inicial
					</h1>	
					<p>
						Ainda em um estágio embrionário, foi na TAG Livros que tive meu primeiro contato com influenciadores como um "braço" para campanhas de marketing - e foi nesse momento que entendi quais seriam os meus próximos passos. Assumindo uma área, função e atividade que poucos tinham desbravado na empresa, tive a oportunidade de criar, encabeçar e estabelecer o marketing de influência como um estratégia de conversão e awareness para as campanhas de mídia da empresa. 
					</p>
				</div>
			</div>

			<div className="self-end p-4 w-full">
				<NavButton path="tag" />
			</div>
	
		</div>
	)
}