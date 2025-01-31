import Image from 'next/image'
import Link from 'next/link'

export function Nav() {
  return (
    <div>
      <header className="flex justify-between items-center p-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-bold text-2xl">
            manh.moe
          </Link>
        </div>
        <nav className="flex items-center gap-4">
          <Link href="https://github.com/mekagojira/blog/discussions" target="_blank">
            Blog
          </Link>
          <Link href="/about">About</Link>
          <Link href="https://github.com/mekagojira/manhdotmoe" target="_blank">
            <Image alt="Github" width={24} height={24} src="/github.png" />
          </Link>
        </nav>
      </header>
    </div>
  )
}
