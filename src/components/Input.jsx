import './../App.css'
import { IconSearch } from "@tabler/icons";

export default function Input() {
    return (
        <section className="w-full mt-10 flex flex-wrap justify-center">
            <h1 className="w-full text-center text-slate-800 text-3xl font-bold py-10">Search Movie</h1>
            <div className="w-1/2 flex items-center gap-x-1">
                <input type="text" id="search-input" className="px-2 py-3 text-slate-600 relative rounded text-sm border-0 shadow focus:ring-2 focus:border-blue-600 focus:outline-none w-5/6" placeholder="Title" />
                <button id="search-button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded text-sm px-5 py-2.5 focus:outline-none"><IconSearch /></button>
            </div>
        </section>
    )
}