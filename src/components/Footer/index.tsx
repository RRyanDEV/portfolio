import { FaArrowUp } from "react-icons/fa";

function footerComponent() {
    return (<>
        <footer className="border-t-2 h-14 border-t-gray-600 flex py-10 items-center justify-center w-full">
            <div className="justify-between pt-10 max-sm:flex-col max-sm:gap-2 max-lg:gap-2 max-lg:flex-col px-8 items-center max-sm:w-full w-[75%] flex flex-row">
                <h1>© 2026 RYAN GOMES </h1>
                <a href="https://www.github.com/RRyanDEV/portfolio" target="_blank" className="hover:animate-pulse hover:opacity-85 hover:text-white" >VER CÓDIGO</a>
                <a className="flex gap-2 items-center hover:text-white hover:animate-pulse rounded-4xl border p-2 border-gray-600" href="#top">VOLTAR AO TOPO <FaArrowUp /></a>
            </div>
        </footer>
    </>)
}



export default footerComponent;