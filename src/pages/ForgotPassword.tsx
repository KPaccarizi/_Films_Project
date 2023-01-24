import { Box, Button, dividerClasses, TextField } from "@mui/material";
import { useState } from "react";
import { useForgotPasswordFormik } from "../components/Login/LoginForm/useForgotPasswordFormik";

export const ForgotPassword = () => {
  const [submit, setSubmit] = useState(false);
  const formik = useForgotPasswordFormik({
    onSubmit(values, formikHelpers) {
      console.log("formik vlaues", values);
      setSubmit(true);
    },
  });
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          border: 2,
          borderColor: "secondary.main",
          borderRadius: 1,
          padding: "10px",
          minWidth: 360,
        }}
      >
        {submit ? (
          <div>
            <p>Instructions were sent to ur email {formik.values.email}</p>
          </div>
        ) : (
          <div>
            <h1>Reset password</h1>
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: 4,
              }}
              noValidate
              autoComplete="off"
              onSubmit={formik.handleSubmit}
            >
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                sx={{
                  marginBottom: 2,
                }}
              />
              <Button type="submit" variant="contained">
                Send
              </Button>
            </Box>
            <Box
              sx={{
                marginTop: 2,
                display: "flex",
                justifyContent: "space-between",
              }}
            ></Box>
          </div>
        )}
      </Box>
    </Box>
  );
};
