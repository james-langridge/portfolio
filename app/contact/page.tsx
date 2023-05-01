'use client'

import Link from 'next/link'
import Image from 'next/image'
import {useState} from 'react'
import {submitContactForm} from '@/app/lib/api'
import Info from '@/app/components/Info'

const initialForm = {
  name: '',
  email: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState({...initialForm})
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    try {
      await submitContactForm(form)
      setForm(initialForm)
      setStatus('Thanks for your message!')
    } catch {
      setForm(initialForm)
      setStatus('Something went wrong.')
    }
  }

  return (
    <section className="relative min-h-screen">
      <Image
        className="absolute w-full h-full object-cover z-0 brightness-50"
        src="/beach.png"
        alt="Background"
        width={3024}
        height={4032}
      />

      <div className="absolute inset-0 flex flex-col min-h-screen z-10">
        <div className="flex flex-col min-h-screen">
          <div className="container flex flex-col flex-1 px-10 pb-12 pt-28 mx-auto">
            <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
              <div className="text-white lg:w-1/2 lg:mx-6">
                <h1 className="text-2xl font-semibold capitalize lg:text-3xl">
                  James Langridge
                </h1>

                <p className="max-w-xl mt-6">
                  JavaScript Developer, and former lawyer, with over 3 years
                  experience with React, Next.js, and TypeScript.
                </p>

                <div className="mt-6 md:mt-8">
                  <h3 className="text-gray-300 ">Follow me</h3>

                  <div className="flex mt-4 -mx-1.5 ">
                    <Link
                      className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500"
                      href="https://www.linkedin.com/in/james-langridge/"
                    >
                      <Image
                        src="/linkedin.svg"
                        alt="LinkedIn Logo"
                        className="text-white hover:text-yellow-300"
                        width={24}
                        height={24}
                      />
                    </Link>

                    <Link
                      className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500"
                      href="https://github.com/james-langridge"
                    >
                      <Image
                        src="/github.svg"
                        alt="Github Logo"
                        className="dark:invert"
                        width={24}
                        height={24}
                      />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-8 lg:w-1/2 lg:mx-6">
                <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
                  <h1 className="text-xl font-medium text-gray-700 dark:text-gray-200">
                    Send me a good joke
                  </h1>

                  <form className="mt-6" onSubmit={handleSubmit}>
                    <div className="flex-1">
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Full Name
                        <input
                          onChange={e =>
                            setForm(form => ({
                              ...form,
                              name: e.target.value,
                            }))
                          }
                          required
                          value={form.name}
                          type="text"
                          className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                      </label>
                    </div>

                    <div className="flex-1 mt-6">
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Email address
                        <input
                          onChange={e =>
                            setForm(form => ({
                              ...form,
                              email: e.target.value,
                            }))
                          }
                          required
                          value={form.email}
                          type="email"
                          className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                      </label>
                    </div>

                    <div className="w-full mt-6">
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Message
                        <textarea
                          required
                          value={form.message}
                          onChange={e =>
                            setForm(form => ({
                              ...form,
                              message: e.target.value,
                            }))
                          }
                          className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        ></textarea>
                      </label>
                    </div>

                    <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                      Give me a shout
                    </button>
                    <Info message={status} />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
