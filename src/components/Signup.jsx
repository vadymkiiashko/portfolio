import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useRef } from "react";
import { signup } from "../app/features/projectSlice";
import { useDispatch } from "react-redux";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const dispatch = useDispatch();

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Sign Up</h2>
          <Form>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' required ref={emailRef} />
            </Form.Group>

            <Form.Group id='password'>
              <Form.Label>password</Form.Label>
              <Form.Control type='password' required ref={passwordRef} />
            </Form.Group>

            <Form.Group id='password-confirm'>
              <Form.Label>password confirmation</Form.Label>
              <Form.Control type='password' required ref={passwordConfirmRef} />
            </Form.Group>
            <Button
              className='w-100 mt-4'
              type='submit'
              onClick={() =>
                dispatch(signup({ email: "vadym@g.g", password: "qwe123" }))
              }>
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        already have an account ? Log in
      </div>
    </>
  );
};

export default Signup;
