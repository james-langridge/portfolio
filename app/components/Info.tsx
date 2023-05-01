import {useEffect, useState} from 'react'

export default function Info({message}: {message: string}) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (message) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }, [message])

  return visible ? (
    <div
      role="button"
      onKeyDown={() => setVisible(false)}
      tabIndex={0}
      onClick={() => setVisible(false)}
    >
      <div
        role="alert"
        className="mt-4 rounded bg-emerald-600 p-2.5 text-center text-white"
      >
        {message}
      </div>
    </div>
  ) : null
}
