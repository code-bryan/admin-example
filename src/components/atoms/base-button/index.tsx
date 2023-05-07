'use client';

import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

interface Props extends Omit<ButtonProps, 'children'> {
  text: string
}

export default function BaseButton({ className, text, ...props }: Props) {
  return (
    <button 
      {...props}
      className={classNames('bg-slate-600 active:bg-slate-700 rounded-full text-white py-3 text-sm', className)}
    >
      {text}
    </button>
  )
}