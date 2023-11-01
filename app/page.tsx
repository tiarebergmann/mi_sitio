'use client'
import Image from 'next/image'

export default function Home() {
  const random = Math.random()*10;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1>Mi sitio de prueba</h1>
     <h2>Hola</h2>
     {random}
    </main>
  )
}
