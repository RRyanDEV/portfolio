import EducationSession from "./Education";
import LangsSession from "./Langs";

import personEducation from "@/data/person-education.json"
import personLangs from "@/data/person-languages.json"

function EalComponent() {
    const componentList: Education[] = personEducation;
    const componentLangsList: Lang[] = personLangs;
    return (<>
        <div id="EduAndLang_content" className="gap-5 px-8 max-md:flex-row max-lg:flex-col">
            <h1 className="text-4xl text-white font-medium font-stretch-extra-expanded"> Formação & Idiomas</h1>
            <div className="flex gap-5 my-5 flex-col">
                {componentList.map((item) => (
                    <EducationSession
                        key={item.id}
                        {...item}
                    />
                ))}
            </div>
            <h1 className="uppercase text-justify">IDIOMAS</h1>
            <div className="flex gap-5 my-5 flex-row">
                {componentLangsList.map((item) => (
                    <LangsSession
                        key={item.id}
                        {...item}
                    />
                ))}
            </div>
        </div>
    </>)

}



export default EalComponent;