
function ContactComponent() {
    return (<>
        <div id="contact_content" className="px-8 max-md:flex-col">
            <p className="uppercase text-justify">Contato</p>
            <div className="flex flex-col gap-5">
                <div id="contactTextMain" className="flex max-md:flex-row max-lg:flex-col max-lg:items-start max-sm:w-full items-center pt-5">
                    <h1 id="titleContact" className="font-semibold text-4xl text-white mr-2">Vamos</h1>
                    <h1 id="subtileContact" className="font-medium text-4xl">Conversar ?</h1>
                </div>
                <p id="descContact" className="flex w-[70%]">
                    Estou aberto a novas oportunidades. O jeito mais rápido de falar comigo é por e-mail ou pelo Telegram.
                </p>
                <div id="contactNavegation" className="max-sm:flex-row max-lg:flex-col max-md:flex-col flex gap-5 py-2">
                    <a href="mailto:rryan_tech@icloud.com" id="btn-template" target="_blank">rryan_tech@icloud.com</a>
                    <a href="https://t.me/ryaanreeal" id="contact_btn" target="_blank">Telegram</a>
                    <a href="https://github.com/RRyanDEV" id="contact_btn" target="_blank">Github</a>
                </div>
            </div>
        </div>
    </>)

}



export default ContactComponent;