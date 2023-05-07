'use client';

import classNames from "classnames";
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonVariant = 'solid' | 'outline';

interface Props extends Omit<ButtonProps, 'children'> {
  text: string;
  Icon?: ReactNode;
  variant?: ButtonVariant;
}

export default function BaseButton({ className, text, variant = 'solid', Icon, ...props }: Props) {
  return (
    <button 
      {...props}
      className={classNames(variantStyle[variant], 'flex gap-2 justify-center items-center rounded-full py-3 w-full text-sm', className)}
    >
      {Icon && Icon}
      {text}
    </button>
  )
}

const variantStyle: Record<ButtonVariant, string> = {
  'solid': 'bg-slate-600 active:bg-slate-700 text-white',
  'outline': 'bg-white border border-slate-600 text-slate-600 active:border-slate-700 active:text-slate-700'
}