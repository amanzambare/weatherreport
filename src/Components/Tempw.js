import React,{useState,useEffect} from 'react';
import "./css/Style.css";

function Tempw(){
    const [city,setCity]=useState(null);
    const [search,setSearch]=useState("mumbai");

    useEffect(() => {
        const fetchApi= async()=>{
            const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=4706ce411418dd914f6369b2379eb8c1`
            const response= await fetch(url);
            const resjson= await response.json()
            // console.log(resjson);
            setCity(resjson.main);
        }
        fetchApi();
      
    },[search])

    return (
        <>
        <center>

            <div className="box">
                <div className="inputData">
                        <input type="search"
                        className="inputfild"
                        value={search}
                        placeholder="search here"
                        onChange={(event)=>{setSearch(event.target.value)}}
                        />
                </div>       
                {!city ?(<p>No Data Found</p>):(
                    <div>
                        <div className="info">
                        <h2 className="location">
                        <i className="fas fa-street-view">{search}</i>
                        </h2>
                        <h1 className="temp">
                            {city.temp}
                        </h1>
                        <h3 className="tempmin_max">Min : {city.temp_min}| Max:{city.temp_max}</h3>
                       
                </div>
                    </div>
                )
                
            }         
                
            </div>   
            </center>
        </>
    )
}
export default Tempw;