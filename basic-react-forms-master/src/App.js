import React, { useEffect, useState } from 'react'
import './index.css'

export default function App() {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [valid, setValid] = useState(false)

  useEffect(() => {
    if (!values.firstName || !values.lastName || !values.email) {
      setValid(false)
    }
  }, [values])

  const handleClick = (field) => (e) => {
    setValues({ ...values, [field]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (values.firstName && values.lastName && values.email) {
      setValid(true)
    }
    setSubmitted(true)
  }

  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {/* Uncomment the next line to show the success message */}
        {submitted && valid ? (
          <div class="success-message">Success! Thank you for registering</div>
        ) : (
          ''
        )}
        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={values.firstName}
          onChange={handleClick('firstName')}
        />
        {/* Uncomment the next line to show the error message */}
        {submitted && !values.firstName ? (
          <span id="first-name-error">Please enter a first name</span>
        ) : (
          ''
        )}
        <input
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={values.lastName}
          onChange={handleClick('lastName')}
        />
        {/* Uncomment the next line to show the error message */}
        {submitted && !values.lastName ? (
          <span id="last-name-error">Please enter a last name</span>
        ) : (
          ''
        )}
        <input
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleClick('email')}
        />
        {/* Uncomment the next line to show the error message */}
        {submitted && !values.email ? (
          <span id="email-error">Please enter an email address</span>
        ) : (
          ''
        )}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  )
}
