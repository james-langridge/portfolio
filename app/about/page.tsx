import Image from 'next/image'
import Container from '@/app/components/Container'

export default function About() {
  return (
    <Container>
      <article className="flex flex-col items-center text-white prose-xl mx-auto">
        <h1 className="mt-28 mb-10 text-4xl text-white">About</h1>

        <div className="flex flex-col sm:flex-row gap-20 justify-between w-full">
          <p>
            Hi, I&apos;m James, a one-time lawyer and lifelong programmer based
            in Hamburg. I began programming awesome text-based games in BASIC on
            the BBC Micro computer. Later, I graduated to a text-based massively
            multiplayer online role-playing game (MMORPG). That wasn&apos;t
            cheap to play on a dial-up connection (sorry, mum). Somewhere along
            the way, I succumbed to the dark side, and become a lawyer. But my
            love for programming never died, and eventually I found my true
            calling and dream job. Things had changed a lot since BASIC. These
            days, while still retaining the ability to fight the bad guys in
            court, and win, I specialise in JavaScript and React, and am pretty
            excited about Next.js, to say the least. But BASIC will always have
            a place in my heart.
          </p>

          <div className="max-w-lg">
            <Image src="/sitting.png" alt="James" width={3024} height={4032} />
          </div>
        </div>
      </article>
    </Container>
  )
}
