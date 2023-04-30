import ComingSoon from '@/app/components/ComingSoon'
import Link from 'next/link'
import Container from '@/app/components/Container'

export default function Page() {
  return (
    <Container>
      <h1 className="mt-28 mb-10 text-4xl text-white prose">
        A statically generated marketing & blog site made with Next.js 13 (beta)
        and Contentful.
      </h1>
      <Link href="https://github.com/james-langridge/nextjs-contentful-marketing-blog">
        <ComingSoon />
      </Link>
    </Container>
  )
}
