import Image from "next/image";
import {cn} from "@/lib/utils"
import {fontSerif} from "../fonts"
import TagCard from "../components/tag-card.tsx";
import Bit2meCard from "../components/bit2me-card.tsx";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-between p-4 pt-24 lg:p-24">
      <div
        className="hero-background"
      /> 
      <section id="bio" className="mt-[85vh] mb-24 flex flex-col jusstify-center items-center gap-4">

        <Image
          src="/profile.jpeg"
          className="border-8 border-yellow-300 rounded-3xl"
          width={300} height={300}
          alt="uma selfie de Sabrina."
        /> 

        <h1 className={cn("scroll-m-20 text-5xl font-extrabold tracking-tight text-center lg:text-7xl", fontSerif.variable)}>
          Eu conecto marcas, <br/> pessoas e histórias.
        </h1>

        <div className="flex items-center px-8 prose lg:prose-xl">
          <p>Me chamo Sabrina e eu atuo no planejamento estratégico de campanhas de marketing de influência, gerenciando campanhas de mercado do início ao fim. Com uma trajetória plural e diversa, fui responsável por conduzir campanhas para diferentes produtos e serviços, com micro a mega influenciadores de diferentes nichos. Da Psicologia ao Marketing. Do comércio para os bastidores da produção de grandes campanhas de marketing, saiba mais!</p> 
        </div>

      </section>
      <section className="w-full">
        <h1 className="mb-4 scroll-m-20 text-5xl font-extrabold tracking-tight text-center lg:text-7xl">
          Trabalhos
        </h1>
        <div className="w-full p-4 lg:px-12 flex flex-col lg:flex-row gap-6 lg:gap-4">
          {/*<TagCard />
          <Bit2meCard />*/}
        </div>
      </section>
    </main>
  );
}

