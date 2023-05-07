import BaseText from "@/components/atoms/base-text";
import classNames from "classnames";
import Link from "next/link";
import { ReactNode } from "react";

type ItemStyle = 'active' | 'no-active';

export type Item = {
  Icon: ReactNode;
  text: string;
  link: string;
};

type Props = {
  item: Item;
  variant?: ItemStyle;
};

export default function SidebarItem({ item, variant = 'no-active' }: Props) {
  const { text, link, Icon } = item;
  return (
    <li className={classNames('py-3 px-2 rounded', variantStyle[variant])}>
      <Link href={link} className="flex flex-row gap-3 items-center ">
        {Icon}
        <BaseText.BodyOne text={text} />
      </Link>
    </li>
  )
}


const variantStyle: Record<ItemStyle, string> = {
  "no-active": 'bg-white text-slate-700 hover:bg-slate-200',
  'active': 'text-white bg-slate-800'
}