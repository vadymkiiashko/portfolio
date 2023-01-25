import { Card, Form, Button } from "react-bootstrap";
import { useRef } from "react";
import {
  mySignInWithEmailAndPassword,
  mySignInWithGoogle,
} from "../../firebase";
import { useDispatch } from "react-redux";
import { signup } from "../../app/features/projectSlice";

const SignIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign In</h2>
        </Card.Body>
        <Form>
          <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" required ref={emailRef} />
          </Form.Group>

          <Form.Group id="password">
            <Form.Label>password</Form.Label>
            <Form.Control type="password" required ref={passwordRef} />
          </Form.Group>
          <Button
            className="w-100 mt-4"
            type="submit"
            onClick={async (e) => {
              e.preventDefault();
              try {
                const { user } = await mySignInWithEmailAndPassword({
                  email: emailRef.current.value,
                  password: passwordRef.current.value,
                });
                if (user.email) {
                  dispatch(signup(user.email));
                }
              } catch (error) {}
            }}
          >
            Sign in
          </Button>
        </Form>
      </Card>

      <Button
        className="w-100 mt-4"
        variant="light"
        onClick={async () => {
          try {
            const user = await mySignInWithGoogle();
            if (!user) return;
            dispatch(signup(user.email));
          } catch (error) {}
        }}
      >
        {" "}
        Sign in with Google{" "}
      </Button>
    </>
  );
};

export default SignIn;
