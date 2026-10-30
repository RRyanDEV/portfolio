function NavbarComponent() {
    return (
    <div id="NavbarContent" className="flex items-center justify-around border-b-2 border-b-gray-600 h-14">
        <div id="NavbarTitle">
            <h1>
                <a className="text-white">RRyanDEV</a> <a className="max-sm:hidden">| Desenvolvedor Front-End</a>
            </h1>
        </div>
        <div id="nav-navegation" className="flex max-sm:w-1/2 max-lg:w-1/2 max-sm:justify-around w-1/4 items-center justify-between">
            <a href="#contato" className="hover:opacity-85 hover:text-white">Contato</a>
            <a href="https://github.com/RRyanDEV" target="_blank" className="max-sm:hidden hover:opacity-85 hover:text-white">Github</a>
            <a href="https://www.linkedin.com/in/rryandev/" target="_blank" className="max-sm:hidden hover:opacity-85 hover:text-white" >LinkedIn</a>
            <a href="/RyanGomes-br-CV.pdf" id="btn-template" target="_blank" rel="noopener noreferrer">Currículo</a>
        </div>
    </div>)
};

export default NavbarComponent;