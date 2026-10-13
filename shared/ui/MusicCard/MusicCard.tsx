import Image from "next/image"

const MusicCard = ({item}) => {
  return (
    <div className="flex flex-col gap-[12px]">
        <div className="w-[158px] h-[151px]">
        <Image
        src={item.imageSrc}
        width={158}
        height={151}
        alt=""
        /></div>
        <p className="text-[#FFFFFF55] text-[13px] ">{item.title}</p>
    </div>
  )
}

export default MusicCard
