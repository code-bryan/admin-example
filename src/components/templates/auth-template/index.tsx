import { PropsWithChildren, ReactNode } from "react";

interface Props extends PropsWithChildren {
  Aside: ReactNode;
}

export default function AuthTemplate({ Aside, children }: Props) {
  return (
    <main className="flex flex-row">
      <aside className="w-1/2 bg-slate-100">
        {Aside}
      </aside>
      <main className="w-1/2 flex flex-col gap-10 px-20 justify-center">
        {children}
      </main>
    </main>
  );
}