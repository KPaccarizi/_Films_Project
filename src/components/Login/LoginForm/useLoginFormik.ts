import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required!"),
  password: Yup.string().required("Password is required!"),
});

interface LoginFields {
  username: string;
  password: string;
}

interface UseLoginFormOptions {
  onSubmit: (
    values: LoginFields,
    formikHelpers: FormikHelpers<LoginFields>
  ) => void;
}

export const useLoginFormik = ({ onSubmit }: UseLoginFormOptions) => {
  return useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validateOnBlur: false,
    validateOnChange: true,
    validationSchema: LoginSchema,
    onSubmit,
  });
};
