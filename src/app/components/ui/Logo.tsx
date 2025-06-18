import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href="/" className="h-full max-h-[30px]">
      <div className="h-[24px] min-w-[24px]">
        <Image
          src="/images/Logo.png"
          height={200}
          width={200}
          alt="logo"
          className="h-full w-full object-contain"
        />
      </div>
    </Link>
  )
}

export default Logo;
