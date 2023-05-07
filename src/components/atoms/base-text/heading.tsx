'use client';

import classNames from 'classnames';
import { BaseTextProps } from './index';

export default function HeadingOne({ text, className }: BaseTextProps) {
  return (
    <h1 className={classNames('font-semibold text-2xl', className)}>
      {text}
    </h1>
  );
}