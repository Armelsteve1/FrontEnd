import React, { useEffect, useState } from "react"
import axios from "axios"
import './Style.css'
interface CapsuleProps {
  serial: string,
  type: String,
  status: string,
}

const Capsule = () => {
  const setError = (error: string) => {
    error = "404"
    return { error }
  }
  const [capsulesData, setCapsulesData] = useState<CapsuleProps[]>([]);

  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v4/capsules")
      .then((response) => {
        setCapsulesData(response.data);
      })

      .catch((error) => {
        setError(error.message);
      })
  }, [])
  return (
    <>
    <table>
        <caption> <h1># Capsules</h1></caption>
      <thead>
        <tr>
          <th>Serial</th>
          <th>Status</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {capsulesData.map((capsule, index) => (
          <tr key={index}>
            <td>{capsule.serial}</td>
            <td>{capsule.status}</td>
            <td>{capsule.type}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </> 
  )
}
export default Capsule
