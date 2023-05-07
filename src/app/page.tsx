import { redirect } from "next/navigation"

export default function Home() {

  if (true) {
    redirect('/auth');
  }

  return (
    <main>
      <h1>MainPage</h1>
    </main>
  )
}
