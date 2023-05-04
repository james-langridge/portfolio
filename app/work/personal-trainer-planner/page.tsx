import Image from 'next/image'
import Link from 'next/link'

import Container from '@/app/components/Container'

export default function Page() {
  return (
    <Container>
      <article className="prose text-white">
        <h1 className="mt-28 text-4xl text-white prose">
          Personal Trainer Planner
        </h1>
        <p className="text-sm mb-10">1 May 2023. Updated 4 May 2023.</p>
        <Link
          href="https://github.com/james-langridge/personal-trainer-planner"
          className="text-white hover:text-yellow-300 text-xl"
        >
          View repo
        </Link>
        <p>
          This is a full-stack client management and scheduling app designed for
          multiple users with different roles. The app is made with the new
          Next.js 13 beta features such as the App Router and React Server
          Components. I worked with a personal trainer (PT) to create this
          project from scratch in TypeScript with Next.js 13, React 18,
          NextAuth.js, Prisma ORM, and Tailwind CSS. Features include:
        </p>
        <ul>
          <li>
            Shared calendars between the PT and each user, which sync
            automatically.
          </li>
          <li>
            Mobile-friendly calendar list view with infinite scroll for users.
          </li>
          <li>
            PT can create custom forms in Contentful CMS, which are rendered on
            dynamic page routes, and emailed to the PT when completed.
          </li>
        </ul>
        <h2 className="text-white">Mobile view with infinite scroll</h2>
        <div className="flex flex-col md:flex-row gap-5 items-center">
          <Image
            src="/mobileCalendar.png"
            alt="Mobile workout calendar with infinite scroll"
            width={392}
            height={849}
            className="sm:w-1/2 w-full"
          />
          <Image
            src="/mobileSession.png"
            alt="Mobile workout calendar with infinite scroll"
            width={392}
            height={849}
            className="sm:w-1/2 w-full"
          />
        </div>
        <h2 className="text-white">Purpose and Goal</h2>
        <p>
          The personal trainer was using multiple apps to assign workout
          programs to her clients, and to schedule appointments. She wanted one
          app that could do it all in the way she wanted, plus extra features
          not available in the other apps.{' '}
        </p>
        <p>
          I built the app from scratch, managing the project from initial vague
          ideas through to production. I chose to work with Next.js 13 beta as
          an experiment and a challenge, to explore the new features which are a
          completely new paradigm for React developers.
        </p>
        <h2 className="text-white">Spotlight</h2>
        <p>
          Data fetching and caching was an interesting problem, as the core of
          the app is an interactive shared calendar that needs to sync updates
          between users in both directions. By default, Next.js 13 renders
          routes statically, caching data requests. The caching behaviour was
          not consistent between dev and production, making development more
          difficult.
        </p>
        <table>
          <tbody>
            <tr>
              <th>Static Rendering (default)</th>
              <td>
                Both Server and Client Components are pre-rendered on the server
                at build time.
              </td>
            </tr>
            <tr>
              <th>Dynamic Rendering</th>
              <td>
                Both Server and Client Components are rendered on the server at
                request time. The result of the work is not cached.
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          The key thing is that static (cache) and dynamic (no cache) rendering
          is on the route, not the component, level. Client components, like
          server components, can be rendered either statically or dynamically,
          and static rendering is the default. This means that data requests are
          also cached by default. So just making a component a client component
          doesn&apos;t mean dynamic behaviour.
        </p>
        <table>
          <tbody>
            <tr>
              <th>Server Components (default)</th>
              <td>
                React Server Components: server-only with no interactivity,
                state or lifecycle effects.
              </td>
            </tr>
            <tr>
              <th>Client Components</th>
              <td>Pre-rendered on the server and hydrated on the client.</td>
            </tr>
          </tbody>
        </table>
        <p>
          Caching can be configured on the route-segment level or per-request
          level. The route-segment level can be configured in Pages (page.tsx),
          Layouts (layout.tsx), or Route Handlers (route.ts). Using dynamic data
          fetching (configuring no cache) in a layout or a page will render the
          whole route dynamically, at request time.
        </p>
        <p>
          Another problem is that the personal trainer and the users have
          different use cases for the same app components, making it difficult
          to optimise rendering and data fetching for both without duplicating
          logic in two similar routes.
        </p>
        <h3 className="text-white">PT client users</h3>
        <p>
          These users open the calendar, view their workouts and appointments,
          and check off completed workouts, which mutates the database.
          That&apos;s a good candidate for a static route that caches the data,
          and uses background revalidation to invalidate the cache and
          regenerate the data at a set interval.
        </p>
        <h3 className="text-white">PT admin user</h3>
        <p>
          The personal trainer needs a more dynamic UI. They want to always
          fetch the latest data when they load a user&apos;s schedule, and when
          they open the client management page. They want the data to refresh
          immediately after they make a mutation. Dynamic routes with no caching
          would give a better UX for the PT, so they fetch fresh data on every
          request. The PT doesn&apos;t necessarily need background refresh of
          data.
        </p>
        <h2 className="text-white">Desktop view for personal trainer</h2>
        <Link href="/calendarTrainer.png">
          <Image
            src="/calendarTrainer.png"
            alt="Admin calendar view"
            width={1838}
            height={1294}
            className="w-full"
          />
        </Link>
        <h2 className="text-white">Current Status</h2>
        <p>
          The beta app is being used in production by the personal trainer and a
          small number of clients to test. It is still a work in progress as we
          develop new features and my knowledge of the new Next.js beta features
          grows.
        </p>
        <h2 className="text-white">Lessons Learned</h2>
        <p>
          This project was and continues to be great to learn about the new
          Next.js features, particularly how to structure apps with server and
          client components, static and dynamic rendering, and caching
          strategies.
        </p>
        <p>
          With React Server Components and automatic caching and request
          de-duping, it&apos;s getting harder and harder to see a real need for
          client-state management libraries like Redux or server-state
          management libraries like React Query. This requires thinking
          differently about the architecture of the app and is an exciting
          challenge.
        </p>
      </article>
    </Container>
  )
}
