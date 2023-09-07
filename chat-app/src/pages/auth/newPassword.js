import { Link, Stack, Typography } from "@mui/material";
import { CaretLeft } from "phosphor-react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import ResetPasswordForm from "../../sections/auth/resetPasswordForm";

function NewPassword() {
    return (
        <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h3" paragraph>
          Reset Password
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 5 }}>
          Please set your new password
        </Typography>
        {/* New Password form */}
          <ResetPasswordForm/>
        <Link
          sx={{ mt: 3, mx: "auto" }}
          display={"inline-flex"}
          alignItems={"center"}
          variant="subtitle2"
          component={RouterLink}
          to="/auth/login"
          color={"inherit"}
        >
          <CaretLeft />
          Return to sing in
        </Link>
      </Stack>
      );
}

export default NewPassword;