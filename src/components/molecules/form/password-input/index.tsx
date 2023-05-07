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
      <Eye show={show} onClick={() => setShow(c => !c)} />
    </div>
  );
}

function Eye({ show, onClick }: { show: boolean, onClick?: VoidFunction }) {
  const iconClassName = classNames('absolute inset-y-3 right-5 h-5 w-5')

  if (!show) {
    return <EyeIcon className={iconClassName} onClick={onClick} />;
  }
  
  return <EyeSlashIcon className={iconClassName} onClick={onClick} />
}