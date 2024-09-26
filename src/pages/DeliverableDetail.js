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
    fetchDeliverable()
  }, [id])

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

  const onSubmit = async (data) => {
    try {
      await updateDeliverable(id, data)
      navigate('/')
    } catch (err) {
      setError('Failed to update deliverable')
    }
  }

  // Rest of the component remains the same...
}

export default DeliverableDetail