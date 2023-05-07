'use client';

import classNames from "classnames";
import { InputProps, textInputClassName } from "../index";

interface Props extends InputProps {
  className?: string;
};


export default function TextInput({ className, ...props }: Props) {
  return (
    <div>
      <input
        {...props}
        className={classNames(textInputClassName, className)}
      />
    </div>
  );
}