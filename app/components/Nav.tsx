import Link from 'next/link'
import Image from 'next/image'

export default function Nav() {
  return (
    <div>
      <nav className="absolute top-0 left-0 right-0 z-20">
        <div className="bg-transparent py-10 px-20">
          <div className="flex justify-between">
            <Link href="/" className="text-white hover:text-yellow-300 text-xl">
              JL
            </Link>
            <div>
              <ul className="flex space-x-24 text-white justify-end">
                <li>
                  <Link href="/work" className="hover:text-yellow-300 text-xl">
                    Work
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-white hover:text-yellow-300 text-xl"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-white hover:text-yellow-300 text-xl"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/james-langridge"
                    className="text-white hover:text-yellow-300"
                  >
                    <Image
                      src="/github.svg"
                      alt="Github Logo"
                      className="dark:invert"
                      width={24}
                      height={24}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/james-langridge/"
                    className="text-white hover:text-yellow-300"
                  >
                    <Image
                      src="/linkedin.svg"
                      alt="LinkedIn Logo"
                      className="text-white hover:text-yellow-300"
                      width={24}
                      height={24}
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
