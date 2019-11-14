import React, { useState, useEffect } from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import styled from "styled-components";
import * as Yup from "yup";

const InfoDivStyle = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 190px;
    height: 300px;
    margin: 0 auto;
`;

const IndividualDivStyle = styled.div`
    border: 2px solid red;

`

const Forms = ({ values, errors, touched, status }) => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        status && setUser(user => [...user, status]);
    }, [status])

    return (

        <InfoDivStyle>
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
                <label>
                    <Field
                        type="checkbox"
                        name="termsofservice"
                        checked={values.termsofservice}
                    />
                    Agree to Terms of Service
                </label>
                {touched.termsofservice && errors.termsofservice && (<p>{errors.termsofservice}</p>)}
                <button>Submit</button>
            </Form>
            {user.map(member => (
                <IndividualDivStyle>
                    <h3>{member.name}</h3>
                    <p>{member.email}</p>
                </IndividualDivStyle>
            ))
            }
        </InfoDivStyle>
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
