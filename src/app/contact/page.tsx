'use client'
import ProfileBar from "../components/ProfileBar"
import MyContact from "../components/MyContact"

export default function Home() {
  return (
    <main className="w-full min-h-screen h-full p-[2%] bg-smoky-black gap-10">
      <ProfileBar />
      <MyContact/>
    </main>
  )
}