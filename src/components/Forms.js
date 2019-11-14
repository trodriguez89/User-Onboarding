import React, { useState, useEffect } from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const Forms = ({ values }) => {

    return (
        <div>
        <h1>Please register!</h1>
        <div>
            <Form>
                <Field
                    type="text"
                    name="name"
                    placeholder="name"
                />
                <Field

                />
                <Field

                />
                <Field

                />
                <button>Submit</button>
            </Form>
        </div>
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
    }
})(Forms)

export default FormikForms;
