import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";

export default function TestComponent() {
    return (
        <>
            <p className="pb-10">ini komponen tabs</p>
            
            <Tabs defaultValue="student" className="w-[400px]">
                <TabsList className="w-full">
                    <TabsTrigger value="student">Student</TabsTrigger>
                    <TabsTrigger value="organizer">Organizer</TabsTrigger>
                </TabsList>
                
                <TabsContent value="tab1" className="h-[200px] bg-red-500 p-4">
                    Tab 1 Content
                </TabsContent>
                <TabsContent value="tab2" className="h-[200px] bg-green-500 p-4">
                    Tab 2 Content
                </TabsContent>
            </Tabs>
        </>
    )
}