import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getDeliverables } from '../services/api'
import './DeliverablesList.css'

const DeliverablesList = () => {
  const [deliverables, setDeliverables] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchDeliverables()
  }, [])

  const fetchDeliverables = async () => {
    try {
      const response = await getDeliverables()
      setDeliverables(response.data)
      setLoading(false)
    } catch (err) {
      setError('Failed to fetch deliverables')
      setLoading(false)
    }
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <div className="deliverables-list">
      <h1>Deliverables List</h1>
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Actual Name</th>
          <th>Client Name</th>
          <th>Client Number</th>
          <th>Status ID</th>
          <th>End Date</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
        {deliverables.map((deliverable) => (
          <tr key={deliverable.id}>
            <td>{deliverable.name}</td>
            <td>{deliverable.actualName}</td>
            <td>{deliverable.clientName}</td>
            <td>{deliverable.clientNumber}</td>
            <td>{deliverable.statusId}</td>
            <td>{deliverable.endDate}</td>
            <td>
              <Link to={`/deliverable/${deliverable.id}`}>
                <button>View</button>
              </Link>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default DeliverablesList