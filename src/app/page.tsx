'use client'
import ProfileBar from "./components/ProfileBar"
import AboutMe from "./components/AboutMe"

export default function Home() {
  return (
    <main className="w-full min-h-screen h-full px-[2%] py-[2%] bg-smoky-black gap-10">
      <ProfileBar />
      <AboutMe />
    </main>
  )
}
