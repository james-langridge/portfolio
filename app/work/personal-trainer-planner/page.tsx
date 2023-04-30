import ComingSoon from '@/app/components/ComingSoon'
import Link from 'next/link'
import Container from '@/app/components/Container'

export default function Page() {
  return (
    <Container>
      <h1 className="mt-28 mb-10 text-4xl text-white prose">
        A client management and scheduling app for personal trainers made with
        the Next.js 13 beta features like the App Router and React Server
        Components.
      </h1>
      <Link
        href="https://github.com/james-langridge/personal-trainer-planner"
        className="text-white hover:text-yellow-300 text-xl"
      >
        <ComingSoon />
      </Link>
    </Container>
  )
}
