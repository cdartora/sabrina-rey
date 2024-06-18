"use client"

import {useState} from "react";
import {fontSerif} from "../fonts";
import {usePathname, useRouter} from "next/navigation";
import { Check, ChevronsUpDown } from "lucide-react"


import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandList,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const works = [
  {
    value: "tag",
    label: "Tag Livros",
  },
  {
    value: "bit2me",
    label: "Bit2me",
  },
  {
    value: "tramontina",
    label: "Tramontina",
  },
]

export default function WorkCombobox() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname().split("/");
  const workName = pathname.length > 2 ? pathname[2] : false;

  return (
    <Popover  open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("w-[200px] justify-between", fontSerif.className)}
        >
          {workName
            ? workName.charAt(0).toUpperCase() + workName.slice(1)
            : "trajetória"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn("w-[200px] p-0", fontSerif.className)}>
        <Command>
          <CommandList>
            <CommandGroup>
              {works.map((work: {label: string, value: string}) => (
              <CommandItem
                  key={work.value}
                  value={work.value}
                  onSelect={() => {
                    if (workName) {
                      router.push(work.value); 
                    } else {
                      router.push(`works/${work.value}`)
                    }

                  }}
                >
                <Check
                  className={cn([
                    "mr-2 h-4 w-4",
                    workName === work.value ? "opacity-100" : "opacity-0"
                    ]
                  )}
                />
                {work.label}
                </CommandItem>
            ))}

            </CommandGroup>
          </CommandList>
        </Command>
           
      </PopoverContent>
    </Popover>
  )
}
