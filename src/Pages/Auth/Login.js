import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './login.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom';
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {
    const navigate = useNavigate()
    const initialValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().required('Required'),
    });

    const handleSubmit = (values, { setSubmitting }) => {
        // You can perform your login logic here
        console.log(values);
        if (values.email === "ranaparul1006@gmail.com" && values.password === "12345") {
            navigate('/bill')
            setSubmitting(false);
        }else{
            toast.error("Wrong email and password")
        }
    };

    return (
        <div>
            <div className='header-container'>
                <p>Billing System - Invoice Generator</p>
            </div>
            <div className='inner-container'>
                <div className="login-form-container">
                    <h1>Login Form</h1>
                    <h6>Enter your email and password</h6>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        <Form>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <Field type="email" name="email" id="email" />
                                <ErrorMessage name="email" component="div" className="error" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <Field type="password" name="password" id="password" />
                                <ErrorMessage name="password" component="div" className="error" />
                            </div>
                            <button type="submit">Login</button>
                        </Form>
                    </Formik>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};
