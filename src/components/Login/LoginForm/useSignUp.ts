import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  username: Yup.string().required("Username is required!"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().min(8).required("Password is required!"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")])
    .required("Required"),
  age: Yup.number().min(16).required("Age is required!"),
  gender: Yup.string()
    .oneOf(["Female", "Male"], "Choose your gender")
    .required("Required"),
  preferences: Yup.string().oneOf([
    "Action",
    "Comedy",
    "Sci-Fi",
    "Drama",
    "Thriller",
    "Other",
  ]),
  check: Yup.boolean()
    .oneOf([true], "Please accept the terms of service")
    .required("Required"),
});

interface SignupFields {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  age: number;
  gender: string;
  preferences: string;
  check: boolean;
}

interface UseSignupOptions {
  onSubmit: (
    values: SignupFields,
    formikHelpers: FormikHelpers<SignupFields>
  ) => void;
}

export const useSignUp = ({ onSubmit }: UseSignupOptions) => {
  return useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      age: +"",
      gender: "",
      preferences: "",
      check: false,
    },
    validateOnBlur: false,
    validateOnChange: true,
    validationSchema: SignupSchema,
    onSubmit,
  });
};
