import React , {useState} from 'react'
import axios from 'axios'
import SearchWeather from './SearchWeather'
import DisplayWeather from './DisplayWeather'

function App() {

  const [itemList, setItemList] = useState([])
  const onBtnClearSearch = () => {
    setItemList([])
  }
  const onClickSearchWeather = async (item) => {
    try {
      const filter = {
        api: "http://api.openweathermap.org/data/2.5/weather",
        appid: "e2251b632eb8595e223a0f0fb1e79ad2",
        units: "metric",
      };
      const url = `${filter.api}?q=${item}&appid=${filter.appid}&units=${filter.units}`;
      const result = await axios.get(url);
      const newDatas = [...itemList, result.data];
      setItemList(newDatas);
      console.log(result.data);
    } catch (err) {
      console.log(err.response);
    }
  }

  return (
    <>
      App Weather
      <SearchWeather onClickSearchWeather={onClickSearchWeather} onBtnClearSearch={onBtnClearSearch}/>
      <DisplayWeather itemList={itemList}/>
    </>

  );
}

export default App;
