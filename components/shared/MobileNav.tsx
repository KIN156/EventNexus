import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import Navbar from "./Navbar"

  
const MobileNav = () => {
  return (
    <nav className="md:hidden">
    <Sheet>
        <SheetTrigger>
            <Image src="/assets/icons/menu.svg" alt="Menu" height={25} width={25} className="cursor-pointer"/>
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
            <Image src="/assets/images/logo.svg" alt="Logo" height={38} width={138}/>
            <Separator />
            <Navbar />
        </SheetContent>
    </Sheet>

    </nav>
  )
}

export default MobileNav