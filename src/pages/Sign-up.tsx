import {
  TextField,
  Checkbox,
  Select,
  MenuItem,
  FormControlLabel,
  Button,
  FormControl,
  InputLabel,
} from "@mui/material";
import { Box } from "@mui/system";
import { ErrorMessage } from "formik";
import { useSignUp } from "../components/Login/LoginForm/useSignUp";

export const SignUp = () => {
  const formik = useSignUp({
    onSubmit(values, formikHelpers) {
      console.log("formik vlaues", values);
    },
  });
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
        <h1>Sign-up</h1>
        <Box
          component="form"
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
          }}
          noValidate
          autoComplete="off"
          onSubmit={formik.handleSubmit}
        >
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            sx={{
              marginBottom: 2,
            }}
          />
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
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            sx={{
              marginBottom: 2,
            }}
          />
          <TextField
            id="confirmPassword"
            label="Confirm password"
            variant="outlined"
            name="confirmPassword"
            type="password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            sx={{
              marginBottom: 2,
            }}
          />
          <TextField
            id="age"
            label="Age"
            name="age"
            variant="outlined"
            type="number"
            value={formik.values.age}
            onChange={formik.handleChange}
            sx={{
              marginBottom: 2,
            }}
          />
          <FormControl fullWidth>
            <InputLabel>Gender</InputLabel>
            <Select
              id="gender"
              label="Gender"
              name="gender"
              placeholder="Gender"
              value={formik.values.gender}
              onChange={formik.handleChange}
              sx={{
                marginBottom: 2,
              }}
            >
              <MenuItem value={"Female"}>Female</MenuItem>
              <MenuItem value={"Male"}>Male</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Preferences</InputLabel>
            <Select
              id="preferences"
              label="Preferences"
              name="preferences"
              value={formik.values.preferences}
              onChange={formik.handleChange}
              sx={{
                marginBottom: 2,
              }}
            >
              <MenuItem value={"Action"}>Action</MenuItem>
              <MenuItem value={"Comedy"}>Comedy</MenuItem>
              <MenuItem value={"Sci-Fi"}>Sci-Fi</MenuItem>
              <MenuItem value={"Drama"}>Drama</MenuItem>
              <MenuItem value={"Thriller"}>Thriller</MenuItem>
              <MenuItem value={"Other"}>Other</MenuItem>
            </Select>
          </FormControl>

          <FormControlLabel
            label="Terms&Conditions"
            sx={{
              marginBottom: 2,
            }}
            control={
              <Checkbox
                id="check"
                name="check"
                value={formik.values.check}
                onChange={formik.handleChange}
              />
            }
          />

          <Button type="submit" variant="contained">
            Sign Up
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
