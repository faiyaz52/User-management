import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
const Login = () => {
    const initialValues = { userName: "", email: "", password: "" }
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormeErors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const [isLoadind, setIsLoadind] = useState(false)
    let navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setFormeErors(validate(formValues))
        setIsSubmit(true)

        if (Object.keys(formErrors).length === 0 && isSubmit) {
            setIsLoadind(true)
            setTimeout(() => {
                navigate(`/user`, { state: formValues })
                setIsLoadind(false)
            }, 2000)

        }
        // navigate(`/user`)
    }
    const validate = (values) => {
        const errors = {}
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const passwordRegex = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
        if (!values.userName) {
            errors.userName = "UserName is required!"
        }
        if (!values.email) {
            errors.email = "Email is required!"
        } else if (!regex.test(values.email)) {
            errors.email = "This is not valid email format!"
        }
        if (!values.password) {
            errors.password = "Password is required!"
        } else if (!passwordRegex.test(values.password)) {
            errors.password = "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:"
        }
        return errors
    }
    return (
        <div className='cards'>
            <h3 className='text-cards'>Contacts</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        className='form-control'
                        placeholder='Enter your Name'
                        name='userName'
                        value={formValues.userName}
                        onChange={handleChange}
                    />
                </div>
                <p className='error-text'>{formErrors.userName}</p>
                <div>
                    <input
                        type="email"
                        className='form-control'
                        placeholder='Enter your Email'
                        name='email'
                        value={formValues.email}
                        onChange={handleChange}
                    />
                    <p className='error-text'>{formErrors.email}</p>
                </div>

                <div>
                    <input
                        type="password"
                        className='form-control'
                        placeholder='Enter your password'
                        name='password'
                        value={formValues.password}
                        onChange={handleChange}
                    />
                    <p className='error-text'>{formErrors.password}</p>
                </div>
                {
                    !isLoadind ? (<button className='btn-cards'>Sign in  </button>) : (<button className='btn-cards'>Signing.... <div className="spinner-border text-white"></div> </button>)
                }

            </form>
        </div>
    )
}
export default Login
