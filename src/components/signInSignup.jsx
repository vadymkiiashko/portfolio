import React from "react";
import SignIn from "./authentication/SignIn.component";
import Signup from "./authentication/Signup";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { mySignOut } from "../firebase";
import { signout } from "../app/features/projectSlice";

const SignInSignup = () => {
  const { user } = useSelector((state) => state.project);
  const dispatch = useDispatch();
  return (
    <div>
      {user ? (
        <>
          <h2>already signed in</h2>
          <Button
            onClick={async () => {
              const { status } = await mySignOut();
              if (status) {
                dispatch(signout());
              }
            }}
          >
            {" "}
            Sign out{" "}
          </Button>
        </>
      ) : (
        <>
          <Signup />
          <SignIn />
        </>
      )}
    </div>
  );
};

export default SignInSignup;
