import Image from 'next/image'
import Link from 'next/link'

export default function ProjectThumbnail({
  href,
  src,
  alt,
  description,
}: {
  href: string
  src: string
  alt: string
  description: string
}) {
  return (
    <div className="relative w-full sm:w-4/12 overflow-hidden group mb-5 sm:mb-0">
      <Link href={href}>
        <Image
          src={src}
          alt={alt}
          style={{objectFit: 'cover'}}
          width={545}
          height={727}
          className="transition-opacity duration-300 md:group-hover:opacity-0 brightness-50 md:brightness-100"
        />
        <p className="w-4/5 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 opacity-100 sm:opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-3xl">
          {description}
        </p>
      </Link>
    </div>
  )
}
