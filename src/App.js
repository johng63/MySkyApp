import { useState,useEffect } from 'react';
import './App.css';
const API_KEY = process.env.REACT_APP_API_KEY

function App() {
  const [text, setText] = useState([]);
  


  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'adsbx-flight-sim-traffic.p.rapidapi.com'
      }
    };
    
    fetch('https://adsbx-flight-sim-traffic.p.rapidapi.com/api/aircraft/json/lat/39.433055/lon/-77.512437/dist/25/', options)
      .then(response => response.json())
      .then(response => setText(response.ac))

      .catch(err => console.error(err));


 }, []);
  
 //console.log("this text: " + text.aircraft)

  return (
    <div className="App">
      <title>Current Flights</title>
      <b>Current flights</b>

        <tr>
          <th>hex flight number</th>
          <th>flight code</th>
          <th>latitude data</th>
          <th>longetude data</th>
          <th>nav_altitude_mcp</th>
          <th>overhead</th>
          <th>From Airport</th>
          <th>To Airport</th>
        </tr>
        {text.map((item,index) => (
          <tr key={index}>
            <td>{item.icao}</td>
            <td>{item.call}</td>
            <td>{item.lat}</td>
            <td>{item.lon}</td>
            <td>{item.alt}</td>
            <td>{item.overhead}</td>
            <td>{item.from}</td>
            <td>{item.to}</td>
          </tr>

        ))}



    </div>
  )
}

export default App