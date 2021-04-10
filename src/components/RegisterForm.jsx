import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { register } from '../actions/userActions'
import FormContainer from './FormContainer'
import Loader from './Loader'
import Message from './Message'

const RegisterForm = () => {
    const [fullname, setfullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState(null);

    const history = useHistory();

    const dispatch = useDispatch();

    const userRegister = useSelector(state => state.userRegister);

  const { loading, error, userInfo } = userRegister;

    useEffect(() => {
        if(userInfo){
          history.push(`/${userInfo.id}`);
        }
    }, [history, userInfo])

    const submitHandler = (e) =>{
        e.preventDefault();
        if(password !== confirmPassword){
            setMessage("Passwords do not match");
        }else{
            dispatch(register(fullname, email, password));
        }
    }

    return (
        <FormContainer>
            <h1>Register Here</h1>
            { message && <Message variant='danger'>{message}</Message>}
            { error && <Message variant='danger'>{error}</Message>}
            { loading && <Loader />}
            <Form onSubmit={submitHandler} className="py-3">
                <Form.Group controlId="fullname">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Full Name"
                        value={fullname}
                        onChange={(e) => setfullname(e.target.value)}
                        required={true}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required={true}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required={true}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="retype password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required={true}
                    ></Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'>Register</Button>
            </Form>

            <Row className='py-3'>
                <Col>
                    Already a member? <Link to='/'>Sign in</Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default RegisterForm
