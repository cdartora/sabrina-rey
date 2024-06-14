"use client"
import React from "react";
import { usePathname } from "next/navigation";
import WorkCombobox from "../../components/work-combobox.tsx"
import {fontSerif} from "../../fonts";
import {cn} from "@/lib/utils";

export default function WorksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname().split("/");
  const workName = pathname[2] ? pathname[2].charAt(0).toUpperCase() + pathname[2].slice(1) : false;
  const title = workName ? workName : "trabalhos";

  return (
    <>
      <section className="border-b pb-2 flex justify-between mx-24 p-4">
        <div>
          <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">{title}</h2>
          <nav className={cn("text-sm text-gray-500 font-semibold opacity-65", fontSerif.className)}>{pathname[1]} / {pathname[2]}</nav> 
        </div>
        <WorkCombobox />
      </section>
      {children}
    </>
  )
}