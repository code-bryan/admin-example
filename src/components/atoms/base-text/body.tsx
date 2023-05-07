'use client';

import classNames from 'classnames';
import { BaseTextProps } from './index';

export function BodyOne({ text, className }: BaseTextProps) {
  return (
    <h1 className={classNames('text-sm font-medium', className)}>
      {text}
    </h1>
  );
}


export function BodyTwo({ text, className }: BaseTextProps) {
  return (
    <h1 className={classNames('text-xs font-medium', className)}>
      {text}
    </h1>
  );
}