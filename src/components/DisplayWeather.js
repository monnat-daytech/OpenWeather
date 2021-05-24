import React from 'react'

const DisplayWeather = ({itemList}) => {

    const showItemList = itemList.map((item , index) => {
        return (
            <div key ={index}>
                {item.name}
                {item.main.temp} <br></br>
                {item.timezone} <br></br>
                {item.base} <br></br>
                <img
                  className="h-10 w-10 "
                  src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                  alt="logo"
                />
                <span className="pr-2">{item.weather[0].description}</span>
                <button> Delete </button>
        </div>
        )  
    })
    return(
        <>
          {showItemList}
        </>
    )
}

export default DisplayWeather