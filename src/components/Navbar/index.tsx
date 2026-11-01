function NavbarComponent() {
    return (
        <nav className="flex items-center justify-center w-full border-b-2 h-14 border-b-gray-600">
            <div id="NavbarContent" className="flex items-center max-sm:w-full w-[75%] justify-between px-8 ">
                <div id="NavbarTitle">
                    <h1>
                        <a id="top" className="text-white">RRyanDEV</a>
                    </h1>
                </div>
                <div id="nav-navegation" className="flex max-lg:w-1/2 w-[40%] items-center justify-between">
                    <a href="#contato" className="hover:opacity-85 hover:text-white">Contato</a>
                    <a href="https://github.com/RRyanDEV" target="_blank" className="max-sm:hidden max-lg:hidden hover:opacity-85 hover:text-white">Github</a>
                    <a href="https://www.linkedin.com/in/rryandev/" target="_blank" className="max-sm:hidden max-lg:hidden hover:opacity-85 hover:text-white" >LinkedIn</a>
                    <a href="/RyanGomes-br-CV.pdf" id="btn-template" target="_blank" rel="noopener noreferrer">Currículo</a>
                </div>
            </div>
        </nav>)
};

export default NavbarComponent;