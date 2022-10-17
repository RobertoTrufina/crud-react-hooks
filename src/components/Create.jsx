import React, { useState } from "react"
import { Button, Checkbox, Form } from 'semantic-ui-react'
import './create.css'

import { useNavigate } from "react-router-dom"
import axios from "axios"


function Create() {

    let navigate = useNavigate()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [checkbox, setCheckbox] = useState(false)
    

    const postData = () => {
        axios.post(`https://63461eb2745bd0dbd376cf16.mockapi.io/CrudApi`, {            
            firstName,
            lastName,
            checkbox
        }).then(() => {
            navigate('/read')
        })
    }

    return (
        <Form className="create-form">
            <Form.Field>
                <label>First Name</label>
                <input
                    placeholder='First Name'
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input
                    placeholder='Last Name'
                    onChange={(e) => setLastName(e.target.value)}
                />
            </Form.Field>
            <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)} />
            </Form.Field>
            <Button onClick={postData} type='submit'>Submit</Button>
        </Form>
    )
}

export default Create

