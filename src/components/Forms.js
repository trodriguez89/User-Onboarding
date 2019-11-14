import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Users from "./Users";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import styled from "styled-components";
import * as Yup from "yup";

const InfoDivStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    // flex-wrap: wrap;
    width: 300px;
    height: 450px;
    margin: 0 auto;
    margin-top: 50px;
    border: 1px solid black;
    border-radius: 5px;

`;

const IndividualDivStyle = styled.div`
    border: 2px solid red;
    
`;

const ButtonStyle = styled.button`
    background-color: blue;
    padding: 10px;
    border-radius: 5px;
`;

const LabelStyle = styled.label`
    margin: 0 auto;
    display: block;
    width: 75%;
    font-size: 16px;

`;

const H2Style = styled.h2`
    
`


const Forms = ({ values, errors, touched, status }) => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        status && setUser(user => [...user, status]);
    }, [status])

    return (

        <InfoDivStyle>
            <H2Style>Register Info</H2Style>
            <Form>
                <Field
                    type="text"
                    name="name"
                    placeholder="name"
                />
                {touched.name && errors.name && (
                    <p>{errors.name}</p>
                )}
                <Field
                    type="email"
                    name="email"
                    placeholder="email"
                />
                {touched.email && errors.email && (
                    <p>{errors.email}</p>
                )}
                <Field
                    type="password"
                    name="password"
                    placeholder="password"
                />
                {touched.password && errors.password && (
                    <p>{errors.password}</p>
                )}
                <LabelStyle>
                    <Field
                        type="checkbox"
                        name="termsofservice"
                        checked={values.termsofservice}
                    />
                    Agree to Terms of Service
                    <span />
                </LabelStyle>
                {touched.termsofservice && errors.termsofservice && (<p>{errors.termsofservice}</p>)}
                <ButtonStyle>Submit</ButtonStyle>
            </Form>
        </InfoDivStyle>
        <div>
            {user.map(info => (
                <IndividualDivStyle>
                    <h2>{info.name}</h2>
                    <p>info.email</p>
                    <p>info.password</p>
                </IndividualDivStyle>
            ))}
        </div>
    );
}

const FormikForms = withFormik({
    mapPropsToValues({ name, email, password, termsofservice }) {
        return {
            name: name || "",
            email: email || "",
            password: password || "",
            termsofservice: termsofservice || false
        }
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().required(),
        password: Yup.string().required(),
        termsofservice: Yup.boolean().required().oneOf([true], "Please agree to Terms of Service")
    }),
    handleSubmit(values, { setStatus }) {
        axios.post("https://reqres.in/api/users/", values)
            .then(response => {
                setStatus(response.data)
                console.log(response)
            })
            .catch(error => {
                console.log(error.response)
            })
    }

})(Forms)

export default FormikForms;
