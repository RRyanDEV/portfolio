import React from 'react';

const LangsSession: React.FC<Lang> = ({ acronym, lang, level }) => {
    return (<>
        <div id="card" className="flex rounded-xl border w-full gap-5 border-gray-600 flex-col">
            <div id="card_body" className="flex flex-col p-5">
                <div id="card_header" className="flex pb-5">
                    <div className="flex justify-center gap-2 items-center text-white">
                        <p id="acronym" className="text-sm">{acronym}</p>
                        <h1 id="lang_name" className="text-xl">
                            {lang}
                        </h1>
                    </div>
                </div>
                <div id="lang_level">
                    <p>
                        {level}
                    </p>
                </div>
            </div>
        </div>
    </>);
};


export default LangsSession