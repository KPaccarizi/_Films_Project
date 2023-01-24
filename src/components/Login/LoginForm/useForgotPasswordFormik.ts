import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required!"),
});

interface ForgotPasswordFields {
  email: string;
}

interface UseLoginFormOptions {
  onSubmit: (
    values: ForgotPasswordFields,
    formikHelpers: FormikHelpers<ForgotPasswordFields>
  ) => void;
}

export const useForgotPasswordFormik = ({ onSubmit }: UseLoginFormOptions) => {
  return useFormik({
    initialValues: {
      email: "",
    },
    validateOnBlur: false,
    validateOnChange: true,
    validationSchema: ForgotPasswordSchema,
    onSubmit,
  });
};
