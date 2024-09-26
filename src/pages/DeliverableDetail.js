import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { getDeliverableById, updateDeliverable } from '../services/api'
import './DeliverableDetail.css'

const DeliverableDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [deliverable, setDeliverable] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { register, handleSubmit, formState: { errors }, setValue } = useForm()

  useEffect(() => {
    const fetchDeliverable = async () => {
      try {
        const response = await getDeliverableById(id)
        setDeliverable(response.data)
        Object.keys(response.data).forEach((key) => {
          setValue(key, response.data[key])
        })
        setLoading(false)
      } catch (err) {
        setError('Failed to fetch deliverable')
        setLoading(false)
      }
    }

    fetchDeliverable().catch(error => console.error(error))
  }, [id, setValue])



  const onSubmit = async (data) => {
    try {
      await updateDeliverable(id, data)
      navigate('/')
    } catch (err) {
      setError('Failed to update deliverable')
    }
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <div className="deliverable-detail">
      <h1>Deliverable Detail</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <span className="error">{errors.name.message}</span>}
        </div>
        <div>
          <label htmlFor="actualName">Actual Name</label>
          <input
            id="actualName"
            {...register('actualName', { required: 'Actual Name is required' })}
          />
          {errors.actualName &&
            <span className="error">{errors.actualName.message}</span>}
        </div>
        <div>
          <label htmlFor="clientName">Client Name</label>
          <input
            id="clientName"
            {...register('clientName', { required: 'Client Name is required' })}
          />
          {errors.clientName &&
            <span className="error">{errors.clientName.message}</span>}
        </div>
        <div>
          <label htmlFor="clientNumber">Client Number</label>
          <input
            id="clientNumber"
            {...register('clientNumber',
              { required: 'Client Number is required' })}
          />
          {errors.clientNumber &&
            <span className="error">{errors.clientNumber.message}</span>}
        </div>
        <div>
          <label htmlFor="endDate">End Date</label>
          <input
            id="endDate"
            type="date"
            {...register('endDate', { required: 'End Date is required' })}
          />
          {errors.endDate &&
            <span className="error">{errors.endDate.message}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default DeliverableDetail