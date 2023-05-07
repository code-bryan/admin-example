import { InputHTMLAttributes } from "react";
import PasswordInput from "./password-input";
import TextInput from "./text-input";

export const textInputClassName = 'bg-slate-100 px-5 py-3 rounded-full text-sm';
export type InputProps = InputHTMLAttributes<HTMLInputElement>;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  TextInput,
  PasswordInput,
}