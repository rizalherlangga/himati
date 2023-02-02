import Image from 'next/image'
import Link from 'next/link'
import React, { useMemo } from 'react'

const HeaderLayout = () => {
  const NAV_MENU = useMemo(() => {
    return [
      { name: 'About', path: '/about' },
      { name: 'Mbkm', path: '/mbkm' },
      // { name: 'Experience', path: '/experience' },
    ]
  }, [])

  return (
    <header className="p-8 bg-gray-900 h-20 flex item-center sticky top-0">
      <nav className="flex items-center justify-between w-full">
        <Link href="/" className="text-neutral-100">
          {/* <Image
            src="/assets/images/fikrialfjri-logo.png"
            alt="fikrialfjri"
            width="120"
            height="120"
          /> */}
          HIMATI
        </Link>

        <ul className="flex gap-8">
          {NAV_MENU.map(({ name, path }, i) => (
            <li key={i}>
              <Link
                href={path}
                className="inline-block uppercase text-body1 text-neutral-100 hover:text-neutral-200 duration-300 after:content-[''] after:block after:w-0 after:h-[2px] after:bg-neutral-200 after:transition-width after:duration-300 hover:after:w-full"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default HeaderLayout
