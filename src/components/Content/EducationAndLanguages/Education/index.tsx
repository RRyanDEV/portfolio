import { GraduationCap } from "lucide-react"
import React from 'react';

const EducationSession: React.FC<Education> = ({ title, subtitle, date }) => {
    return (<>
        <div id="card" className="flex rounded-xl border w-full gap-5 border-gray-600 flex-col">
            <div id="card_body" className="flex flex-col p-5">
                <div id="card_header" className="pb-5">
                    <div id="card_icon" className="flex justify-between items-center text-white">
                        <GraduationCap size={30} />
                        <p className="text-sm">{date}</p>
                    </div>
                    <div id="card_title" className="text-white">
                        <h1 className="text-xl">
                            {title}
                        </h1>
                    </div>
                </div>
                <div id="card_subtitle">
                    <p className="">
                        {subtitle}
                    </p>
                </div>
            </div>
        </div>
    </>);
};


export default EducationSession