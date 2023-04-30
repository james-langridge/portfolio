import Image from 'next/image'

export default function Home() {
  return (
    <div className="relative w-screen h-screen">
      <Image
        className="absolute w-full h-full object-cover"
        src="/beach.png"
        alt="Background"
        width={3024}
        height={4032}
      />
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="prose">
        <h1 className="absolute top-48 left-48 text-white text-6xl font-normal tracking-tighter">
          James Langridge
        </h1>
        <h2 className="absolute top-52 left-48 text-white text-2xl font-light tracking-widest">
          SOFTWARE ENGINEER
        </h2>
        <p className="absolute bottom-72 left-48 text-white">
          © 2023 by James Langridge.
        </p>
      </div>
    </div>
  )
}
