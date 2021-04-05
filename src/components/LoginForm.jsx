import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col } from "react-bootstrap";
import Message from "./Message";
import Loader from "./Loader";
import { login } from "../actions/userActions";
import FormContainer from "./FormContainer";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory()

  const userLogin = useSelector(state => state.userLogin);

  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
      if(userInfo){
        history.push(`/${userInfo.id}`)
      }
  }, [history, userInfo])

  const submitHandler = (e) => {
      e.preventDefault();

      dispatch(login(email, password));
  };

  return (
    <FormContainer>
      <h1>Sign In</h1>
      { error && <Message variant='danger'>{error}</Message> }
      { loading && <Loader /> }
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="enter email"
            value={email}
            onChange={ (e) => setEmail(e.target.value) }
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="enter password"
            value={password}
            onChange={ (e) => setpassword(e.target.value) }
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary' >Sign In</Button>
      </Form>

      <Row className='py-3'>
          <Col>
            New User? <Link to='/register'>Register</Link>
          </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginForm;
