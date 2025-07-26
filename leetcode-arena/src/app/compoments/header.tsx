import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function Header(){
    return(
        <div className="flex justify-between items-center">
            <div className="md: flex flex-row p-10 gap-x-5">
                <Avatar className="w-15 h-15 md:w-10 md:h-10">
                    <AvatarImage src="https://github.com/shadcn.png" alt="Profile image"></AvatarImage>
                </Avatar>
                <div className="hidden md:block">
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-white">Leetcode Arena</h3>
                </div>
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
            <div className="block md:hidden p-10">
                <Button className="w-10">Select option</Button>
            </div>  
        </div>
    )
}