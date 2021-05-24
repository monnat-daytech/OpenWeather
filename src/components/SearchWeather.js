import React , {useState} from 'react'

const SearchWeather = ({onClickSearchWeather , onBtnClearSearch}) => {
    const [item , setItem] = useState('')
    return(
        <>
            <input type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            />
            <button onClick={() => onClickSearchWeather(item)}> Search Weather </button>
            <button onClick={onBtnClearSearch}> Clear </button>
        </>
    )
}

export default SearchWeather