import './../App.css'

export default function Card({movie}) {
    
    return( 
        <>
            <div className="w-60 bg-white efek-shadow rounded-lg overflow-hidden flex flex-wrap">
                <div className="w-full h-64">
                    <img src={movie.Poster} alt="" className="w-full" />
                </div>
                <div className="flex items-center flex-wrap text-center p-2 w-full bg-slate-900">
                    <p className="text-md text-slate-300 font-semibold w-full">{movie.Title}</p>
                    <p className="text-sm text-slate-200 font-normal w-full">({movie.Year})</p>
                    <p className="text-base text-slate-100 font-normal w-full">{movie.Type}</p>
                </div>
            </div>
        
        </>
    )
}