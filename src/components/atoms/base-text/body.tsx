'use client';

import classNames from 'classnames';
import { BaseTextProps } from './index';

export default function BodyOne({ text, className }: BaseTextProps) {
  return (
    <h1 className={classNames('text-sm font-medium', className)}>
      {text}
    </h1>
  );
}