import Link from 'next/link'
import Container from '@/app/components/Container'

export default function Page() {
  return (
    <Container>
      <article className="prose text-white">
        <h1 className="mt-28 mb-10 text-4xl text-white prose">
          Fit For Life Trainer
        </h1>
        <Link
          href="https://github.com/james-langridge/nextjs-contentful-marketing-blog"
          className="text-white hover:text-yellow-300 text-xl"
        >
          View repo
        </Link>
        <p>
          This is a statically generated marketing and blog site made with
          Next.js 13 (beta) and Contentful. I worked with a personal trainer
          (PT) to create this project from scratch and give the PT complete
          freedom to create new page routes with arbitrary content in
          Contentful, which are rendered as dynamic route segments and
          statically generated at build time. It&apos;s built with the new
          Next.js 13 beta features like the App Router and React Server
          Components, TypeScript, React 18, Tailwind CSS, and Contentful.
        </p>
        <h2 className="text-white">Purpose and Goal</h2>
        <p>
          The personal trainer had a slow Wordpress site with poor Core Web
          Vitals, and was paying a lot of money in hosting. She wanted a faster,
          modern website, with the freedom to update it via a CMS, and host it
          for free.
        </p>
        <h2 className="text-white">Spotlight</h2>

        <p>
          To statically generate the site and give the PT the freedom to create
          new pages with arbitrary content, I had to use the
          generateStaticParams function in combination with a dynamic route
          segment to prerender the routes at build time instead of on-demand at
          request time.
        </p>
        <p>
          Dynamic segments are usually used in routes like{' '}
          <code className="text-white">app/blog/[slug]/page.js</code> but I
          wanted it more dynamic like{' '}
          <code className="text-white">app/[slug]/page.js</code>, so the entire
          site could be dynamically rendered from CMS data.
        </p>
        <p>
          Each page is fetched in a server component from Contentful at build
          time, and its content entries are passed to a component renderer,
          which maps them to the respective React component, and checks them for
          children content entries, mapping those as well if they exist.
        </p>

        <h2 className="text-white">Current Status</h2>
        <p>
          The site is live, has near-perfect (99-100) Core Web Vitals, and costs
          the personal trainer nothing to run!
        </p>
        <h2 className="text-white">Lessons Learned</h2>
        <p>
          Next.js is awesome. Also it can be tricky working with the Contentful
          REST API, as you have to generate types, and even then it requires
          some TypeScript wizardy to work with them properly. I have yet to work
          with GraphQL but will explore this alternative.
        </p>
      </article>
    </Container>
  )
}
