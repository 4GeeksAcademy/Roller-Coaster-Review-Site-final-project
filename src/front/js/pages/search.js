import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const SearchPage = () => {
    const [searchMode, setSearchMode] = useState("coasters")
    const [inputValue, setInputValue] = useState("")
    const [fetchedList, setFetchedList] = useState([])

    const url = `${process.env.BACKEND_URL}api/${searchMode}`

    useEffect(() => {getList()}, [searchMode])

    const getList = () => {
        if (fetchedList.length > 0) setFetchedList([])
        fetch(url, {method: 'GET'})
        .then(resp => resp.json())
        .then(list => searchMode === "coasters" ? setFetchedList(list.coasters) : setFetchedList(list.parks))
    }

    console.log(fetchedList)
    return (
        <div className='container my-5 min-vh-100 mb-4'>
            <div className='d-flex justify-content-center'>
                <div className='input-group rounded-pill w-75'>
                    <button 
                    className='btn btn-dark' 
                    type='button'
                    onClick={() => searchMode === "coasters" ? setSearchMode("parks") : setSearchMode("coasters")}
                    >
                        Searching for {searchMode === "coasters" ? "Coasters" : "Parks"}
                    </button>
                    <input 
                    className='form-control' 
                    type='text' 
                    value={inputValue} 
                    onChange={(ev) => setInputValue(ev.target.value)}
                    ></input>
                </div>
            </div>
            <div className='accordion mt-5'>
                {fetchedList.length === 0 ? <div className='accordion-item text-center p-1'><h5>Sorry there is nothing here</h5></div> : ""}
                {fetchedList.map((item, idx) => {
                    return (
                        <div key={idx} className='accordion-item px-2 py-1 d-flex justify-content-between align-items-center'>
                            <div className='d-flex flex-column'>
                                <Link to={`/${searchMode === "coasters" ? "coaster": "park"}/${item.id}`}>
                                    <h3 className='m-0 text-black'>{item["name"]}</h3>
                                </Link>
                                <h6 className='m-0'><i className="fa-solid fa-location-dot pt-1"></i>{searchMode === "coasters" ? `${item["park_name"]} (${item["location"]})`: item["location"]}</h6>
                            </div>
                            <h4>{item["avg_score"] === 0 ? "NR" : item["avg_score"]}</h4>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SearchPage