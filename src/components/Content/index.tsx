import { ScrollArea } from "@/components/ui/scroll-area"
import ContactComponent from "@/components/Contact";
import ProfileComponent from "../Profile";


export function ContentSectionComponent() {
    return (<>
        <ScrollArea className="h-190 rounded-md">
            <ProfileComponent />
            <ContactComponent />
            <ProfileComponent />
            <ContactComponent />
            <ProfileComponent />
            <ContactComponent />
            <ProfileComponent />
            <ContactComponent />
            <ProfileComponent />
        </ScrollArea>
    </>)
}

export default ContentSectionComponent;