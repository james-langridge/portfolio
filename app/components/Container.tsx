import React from 'react'

export default function Container({children}: {children: React.ReactNode}) {
  return (
    <div className="container mx-auto my-5 px-5 flex flex-col items-center text-white prose-xl">
      {children}
    </div>
  )
}
