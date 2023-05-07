import SidebarItem, { Item } from "@/components/molecules/sidebar-item";
import Image from "next/image";
import { MdOutlineAnalytics } from 'react-icons/md';
import { HiLogout } from 'react-icons/hi';
import { Cog8ToothIcon } from '@heroicons/react/24/solid';
import { UsersIcon, ListBulletIcon, Square3Stack3DIcon } from '@heroicons/react/24/outline';
import BaseText from "@/components/atoms/base-text";

const items: Item[] = [
  {
    Icon: <MdOutlineAnalytics size={24} />,
    link: '/dashboard',
    text: 'Dashboard'
  },
  {
    Icon: <UsersIcon className="h-6 w-6" />,
    link: '/dashboard',
    text: 'Leads'
  },
  {
    Icon: <ListBulletIcon className="h-6 w-6" />,
    link: '/dashboard',
    text: 'Products'
  },
  {
    Icon: <Square3Stack3DIcon className="h-6 w-6" />,
    link: '/dashboard',
    text: 'Workflow'
  },
  {
    Icon: <Cog8ToothIcon className="h-6 w-6" />,
    link: '/dashboard',
    text: 'Configuration'
  }
];

export default function Sidebar() {
  return (
    <nav className="min-h-full flex flex-col justify-between w-4/12 py-8 px-6 bg-white border hover:border-bg-slate-200">
      <div className="flex flex-col gap-16">
        <Image src="next.svg" alt="" width={100} height={52} className="px-1" />

        <div className="flex flex-col gap-3">
          <BaseText.BodyTwo text="MAIN MENU" className="px-2 text-slate-400" />
          <ul className="flex flex-col gap-2">
            {items.map((item) => <SidebarItem item={item} key={item.text.toLocaleLowerCase()} />)}
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-6 justify-self-end">
        <ul className="flex flex-col gap-2">
          <SidebarItem 
            item={{
              Icon: <div className="h-6 w-6 bg-slate-400 rounded-full"></div>,
              link: "/profile",
              text: "Jon Doe",
            }}
          />
          <SidebarItem 
            item={{
              Icon: <HiLogout size={24} />,
              link: "/auth",
              text: "Logout",
            }}
          />
        </ul>
      </div>
    </nav>
  );
}