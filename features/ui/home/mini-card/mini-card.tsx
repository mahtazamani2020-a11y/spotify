import React from 'react'
import images from "../../../../public/Home"
import Image from 'next/image'
const MiniCard = () => {
  return (
    <div className="w-[171px] h-[60px] border border-amber-100  ml-[17px] flex bg-blue-500">
      <Image
        src={images.ll}   
        width={60}
        height={60}
        alt='ar'   
      />
      <div className="w-[111px] h-[60px] border border-amber-950 flex items-center justify-items-center">
<p className='text-white  '>Ashkan Kagan </p>
      </div>
    </div>
  )
}

export default MiniCard
