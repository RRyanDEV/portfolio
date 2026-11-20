import { ScrollArea } from "@/components/ui/scroll-area"
import ContactComponent from "./Contact";
import EalComponent from "./EducationAndLanguages";



export function ContentSectionComponent() {
    return (<>
        <ScrollArea className="flex gap-48 h-190 rounded-md">
            <EalComponent />
            <ContactComponent />
        </ScrollArea>
    </>)
}

export default ContentSectionComponent;