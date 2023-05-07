import BaseText from "@/components/atoms/base-text";
import Sidebar from "@/components/organisms/sidebar";

export default async function Dashboard() {
  return (
    <main className="bg-slate-100 flex gap-4">
      <Sidebar />

      <main className="w-full flex flex-col gap-4 px-4">
        <header className="w-full h-[80px] flex flex-row items-center">
          <BaseText.HeadingOne text="Dashboard" />
        </header>
      </main>
    </main>
  )
}