import { Link, Stack, Typography } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import AuthSocial from "../../sections/auth/AuthSocial";
import RegisterForm from "../../sections/auth/RegisterFrom";

function Register() {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h4">Get Started With Tawk</Typography>
        <Stack spacing={0.5} direction={"row"}>
          <Typography variant="body2">Already have an account?</Typography>
          <Link to="/auth/login" component={RouterLink} variant="subtitle2">
            Sign in
          </Link>
        </Stack>
        {/* Register Form */}
        <RegisterForm />
        <Typography
          component={"div"}
          sx={{
            color: "text.secondary",
            mt: 3,
            typography: "caption",
            textAlign: "center",
          }}
        >
          {"By signing up, I agree to  "}
          <Link underline="always" color={"text.primary"}>
            Terms of service
          </Link>
          {" and "}
          <Link underline="always" color={"text.primary"}>
            Privacy Policy
          </Link>
        </Typography>
        <AuthSocial />
      </Stack>
    </>
  );
}

export default Register;
