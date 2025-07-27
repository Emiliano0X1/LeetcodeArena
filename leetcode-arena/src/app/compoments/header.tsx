import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function Header(){
    return(
        <div className="flex justify-between items-center overflow-hidden">
            <div className="md: flex flex-row p-10 items-center gap-x-5">
                <Avatar className="w-8 h-8 md:w-12 md:h-12">
                    <AvatarImage src="https://github.com/shadcn.png" alt="Profile image"></AvatarImage>
                </Avatar>
                <h3 className="scroll-m-20 font-semibold tracking-tight text-white text-xs md:text-2xl">Intern Leetcode Arena</h3>
            </div>

            <div className="hidden md:flex flex-row p-10 gap-x-10">
                <Button>Crear Sala</Button>
                <Button>Tienda</Button>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant='outline'>Inicia sesión</Button>
                    </PopoverTrigger>
                </Popover>
            </div>
            <div className="block px-10 md:hidden md:px-12">
                <Button variant='outline' size='sm'>Crear Sala</Button>
            </div>  
        </div>
    )
}