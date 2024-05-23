import React from 'react'
import Hero from '../components/Hero'
import AppointmentForm from '../components/AppointmentForm'

const Appointment = () => {
  return (
    <div>
      <Hero title={"Schedule your appointment"}
      imageUrl={'/signin.png'}
      />
      <AppointmentForm/>
    </div>
  )
}

export default Appointment