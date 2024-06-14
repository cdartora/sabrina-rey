import * as React from "react";
import { Link } from "next/link";

export default function NavButton({
  children,
  path,
}: {
  children: React.ReactNode,
  path: String,
}) {
	return (
		<Link href={`/works/${path}`} className="block rounded-2xl py-2 px-4 text-center font-semibold border shadow-3xl bg-white text-black">
			Trajetória completa aqui!
		</Link>
	)	
}
