import React, { useEffect, useState } from "react"
import axios from 'axios'
import './style.css'
interface LaunchesProps {
    name: string,
    details: string,
    ships: [],
}

const Launches = () => {
  const setError = (error: string) => {
    error = "404"
    return { error }
  }

  const [showTable, setShowTable] = useState(false)
  const [launchesData, setLaunchesData] = useState<LaunchesProps[]>([]);

  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v4/launches")
      .then((response) => {
        setLaunchesData(response.data);
      })

      .catch((error) => {
        setError(error.message);
      })
  }, [])

  const handleButtonClick = () => {
    setShowTable(true)
  }
  return (
  <div>
  
   <caption><button onClick={handleButtonClick}> <h1>Show launches</h1></button> </caption>
      {showTable && ( 
      <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Details</th>
          <th>Ships</th>
        </tr>
      </thead>
      <tbody>
        {launchesData.map((launches, index) => (
          <tr key={index}>
            <td>{launches.name}</td>
            <td>{launches.details}</td>
            <td>{launches.ships.length}</td>
          </tr>
          ))}
      </tbody>
      </table>
    )}
    </div> 
  )
}
export default Launches
