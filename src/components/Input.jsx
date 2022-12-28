import './../App.css'

export default function Input({searchTerm, setSearchTerm}) {

    return (
        <>
            <input type="text" id="search-input" className="px-2 py-3 text-slate-600 relative rounded text-sm border-0 shadow focus:ring-2 focus:border-blue-600 focus:outline-none w-5/6" placeholder="Title" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </>
    )
}