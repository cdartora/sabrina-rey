import Image from "next/image";
import Link from "next/link";

export default function Header() {
	return (
		<nav className="flex justify-between items-center w-full p-4 bg-black">
		<Link href="/" className="flex items-center gap-2">
			<Image src="/header-icon.png" alt="" width={70} height={70}/>
			<h1 className="text-white scroll-m-20 text-3xl font-semibold tracking-tight">Sabrina Rey</h1>
		</Link>
		<div className="flex items-center justify-center gap-4">
		<a href="https://www.linkedin.com/in/sabrinamrey/" target="_blank" rel="noreferrer" className="opacity-80 hover:opacity-100 transition-all">
			<Image src="/linkedin-icon.png" alt="icone do linkedin" width={24} height={24} />
		</a>
		<Link href="/#contact" className="opacity-80 hover:opacity-100 transition-all">
			<Image src="/mail-icon.png" alt="icone de carta" width={30} height={30} />
		</Link>
		</div>

		</nav>
	)
}