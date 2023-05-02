import Link from 'next/link'
import Container from '@/app/components/Container'
import Image from 'next/image'

export default function Page() {
  return (
    <Container>
      <article className="prose text-white">
        <h1 className="mt-28 mb-10 text-4xl text-white prose">
          Personal Trainer Planner
        </h1>
        <Link
          href="https://github.com/james-langridge/personal-trainer-planner"
          className="text-white hover:text-yellow-300 text-xl"
        >
          View repo
        </Link>
        <p>
          This is a full stack client management and scheduling app designed for
          multiple users with different roles. It&apos;s made with the new
          Next.js 13 beta features like the App Router and React Server
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
            Mobile-friendly calendar list-view with infinite scroll for users.
          </li>
          <li>
            PT can create custom forms in Contentful CMS, which are rendered on
            dynamic page routes, and emailed to the PT when the client completes
            them.
          </li>
        </ul>
        <h2 className="text-white">Mobile view with infinite scroll</h2>
        <div className="flex flex-col md:flex-row gap-5">
          <Image
            src="/mobileCalendar.png"
            alt="Mobile workout calendar with infinite scroll"
            width={392}
            height={849}
            className="w-1/2"
          />
          <Image
            src="/mobileSession.png"
            alt="Mobile workout calendar with infinite scroll"
            width={392}
            height={849}
            className="w-1/2"
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
          Data fetching and state management was an interesting challenge, as
          the core of the app is an interactive shared calendar that needs to
          sync updates between users in both directions. Even managing state
          between routes for the admin user was a challenge because, by default,
          Next.js now renders routes statically, caching data requests.
        </p>

        <p>
          The key thing to understand was that static and dynamic rendering is
          on the route level, and is not directly correlated to server and
          client components. Client components can also be either statically or
          dynamically rendered, and static rendering is the default. That also
          means that data requests are also cached by default. So just making a
          component a client component doesn&apos;t equate to dynamic behaviour.
        </p>
        <p>
          Another problem is that the personal trainer and the users have
          different use cases for the same app components, making it difficult
          to optimise rendering and data fetching for both without duplicating
          logic in two similar routes.
        </p>
        <h3 className="text-white">PT client users</h3>
        <p>
          These users just open the calendar, view their workouts and
          appointments, and check off completed workouts, which mutates the
          database. That&apos;s a good candidate for a static route that caches
          the data, and uses background revalidation to invalidate the cache and
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
          It&apos;s common to call it a gym &quot;session&quot;, and as the
          personal trainer also called things &quot;sessions&quot;, I went along
          with that naming convention in the database and in the code. That was
          a mistake, as a &quot;session&quot; is of course about authentication
          in web development, so when I implemented NextAuth.js, I did a huge
          refactor to change that to &quot;workout&quot;, to avoid any conflicts
          or confusion. Oops. Also, the users of the app, apart from the
          personal trainer, are called &quot;clients&quot;, which can also cause
          confusion!
        </p>
        <p>
          More seriously, with React Server Components and automatic caching and
          request de-duping, it&apos;s getting harder and harder to see a real
          need for client-state management libraries like Redux or server-state
          management libraries like React Query. This requires thinking
          differently about the architecture of the app and is an exciting
          challenge.
        </p>
      </article>
    </Container>
  )
}
