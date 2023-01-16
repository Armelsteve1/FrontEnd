import React, { useEffect, useState } from "react"
import axios from "axios"
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
  return (
    <div>
    
    <table>
        <caption><h1># Launches</h1></caption>
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
    </div> 
  )
}
export default Launches
