import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HomePage from "../compoments/homePage";

const TabsNavigador = () => {
    return(
        <div className="fixed bottom-0 left-0 w-full bg-[#272727] z-50">
            <Tabs defaultValue="home" className="w-full">
                <TabsContent value="home">
                    <HomePage></HomePage>
                </TabsContent>

                <TabsList className="w-full py-10 flex justify-between bg-[#272727]">
                    <TabsTrigger value="home" className="flex-1 text-lg py-10 [data-state=active]:text-amber-700">Home</TabsTrigger>
                    <TabsTrigger value="matches" className="flex-1 text-lg py-10 text-white">Matches</TabsTrigger>
                    <TabsTrigger value="store" className="flex-1 text-lg py-10 text-white">Tienda</TabsTrigger>
                    <TabsTrigger value="profile" className="flex-1 text-lg py-10 text-white">Perfil</TabsTrigger>
                </TabsList>
            </Tabs>
        </div>
    )
}

export default TabsNavigador;