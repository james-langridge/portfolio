import ProjectThumbnail from '@/app/components/ProjectThumbnail'
import Container from '@/app/components/Container'

export default function Work() {
  return (
    <Container>
      <div className="flex flex-col items-center text-white">
        <h1 className="mt-28 mb-10 text-4xl">Recent Open Source Work</h1>

        <div className="flex flex-col sm:flex-row w-full justify-evenly">
          <ProjectThumbnail
            src="/juggling.png"
            href="/work/personal-trainer-planner"
            alt="Juggling"
            description="Full stack Next.js 13 (beta) client scheduling and management app"
          />
          <ProjectThumbnail
            src="/parcour.png"
            href="/work/nextjs-contentful-marketing-blog"
            alt="Parcour"
            description="Next.js 13 (beta) marketing site and blog with headless CMS"
          />
        </div>
      </div>
    </Container>
  )
}
