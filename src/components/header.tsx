import Image from "next/image";
import Link from "next/link";

export default function Header() {
	return (
		<nav className="w-full p-4 bg-black">
		<Link href="/" className="flex items-center gap-2">
			<Image src="/header-icon.png" alt="" width={70} height={70}/>
			<h1 className="text-white scroll-m-20 text-3xl font-semibold tracking-tight">Sabrina Rey</h1>
		</Link>
		</nav>
	)
}