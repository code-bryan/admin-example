'use client';

import classNames from "classnames";
import { InputProps, textInputClassName } from "../index";
import { EyeSlashIcon, EyeIcon } from '@heroicons/react/24/outline'
import { useState } from "react";
  
interface Props extends Omit<InputProps, 'type'> {
  className?: string;
};

export default function PasswordInput({ className, ...props }: Props) {
  const [show, setShow] = useState(false);
  
  return (
    <div className="relative">
      <input
        {...props}
        type={show ? 'text' : 'password'}
        className={classNames(textInputClassName, className)}
      />
      <div className="absolute inset-y-3 right-5 select-none" onClick={() => setShow(c => !c)}>
        <Eye show={show} />
      </div>
    </div>
  );
}

function Eye({ show }: { show: boolean }) {
  const iconClassName = classNames('h-5 w-5')

  if (!show) {
    return <EyeIcon className={iconClassName} />;
  }
  
  return <EyeSlashIcon className={iconClassName} />
}