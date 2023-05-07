'use client';

import BaseButton from "@/components/atoms/base-button";
import BaseText from "@/components/atoms/base-text";
import Form from "@/components/molecules/form";
import { translate } from "@/translate";
import Link from "next/link";
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  email: yup.string().email(),
  password: yup.string().min(8),
});

type Props = {
  onSubmit?: () => void;
}

export default function LoginForm(props: Props) {
  const { handleChange, handleSubmit, values, handleBlur } = useFormik({
    validationSchema,
    initialValues: { email: '', password: '' },
    onSubmit: () => {},
  })

  return (
    <div className="flex flex-col gap-8">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <Form.TextInput 
          className="w-full"
          placeholder="your@example.com"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}  
        />
        <Form.PasswordInput 
          className="w-full"
          placeholder={translate('auth.password-placeholder')}
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        
        <Link href='/auth/forgot' className="self-end">
          <BaseText.BodyOne text={translate('auth.forgot-button')} className="text-gray-500" />
        </Link>

        <BaseButton type="submit" text={translate('auth.login-button')} />
      </form>
    </div>
  );
}