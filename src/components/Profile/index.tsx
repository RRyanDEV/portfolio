import { FiGithub, FiLinkedin } from "react-icons/fi";
import personData from "@/data/person-data.json";

function ProfileComponent() {
    const { name, secondName, area, location, bio }: Person = personData[0];
    return (<>
        <main className="flex py-10 items-center justify-center w-full">
            <div id="profileContent" className="px-8 items-center max-sm:flex-col max-sm:w-full w-[75%] flex flex-row">
                <div id="profileInfo" className="flex max-sm:w-full flex-col gap-2">
                    <div id="profileTextMain" className="items-center flex flex-row text-4xl">
                        <h1 id="title" className="font-semibold text-white mr-2">{name}</h1>
                        <h1 id="subtile" className="font-medium">{secondName}</h1>
                    </div>
                    <div id="profileTextDesc" className="flex items-center text-md max-sm:text-sm gap-2">
                        <p className="inline-flex items-center rounded-lg text-(--colorAdd)">{area}</p>
                        <p className="lg:text-xl">|</p>
                        <p className="inline-flex items-center rounded-lg text-(--colorAdd)">{location}</p>
                    </div>
                    <div id="profileTextResume" className="flex lg:w-[41%]">
                        <p>{bio}</p>
                    </div>
                    <div id="profileNavegation" className="flex py-2 lg:hidden">
                        <a href="https://github.com/RRyanDEV" id="btn-template" className="text-2xl flex items-center mr-2 pr-2" target="_blank"><FiGithub /></a>
                        <a href="https://www.linkedin.com/in/rryandev/" id="btn-template" className="text-2xl flex items-center mr-2 pr-2" target="_blank"><FiLinkedin /></a>
                    </div>
                </div>
            </div>
        </main>
    </>)
}

export default ProfileComponent;