import Image from "next/image";
import  Header from '../shared/ui/Header/Header'
import Footer from "@/shared/ui/Footer/Footer";
import MusicCard from "@/shared/ui/MusicCard/MusicCard";
import Title from "@/shared/ui/Title/Title";
import images from "../public/Home"
import MiniCard from "@/features/ui/home/mini-card/mini-card";
export default function Home() {
  const MusicCardArray =[
    {title:"Noah Kahan, Labrinth,Paris Paloma,jireel,Co...",style:"", imageSrc:images.RR},
     {title:"Noah Kahan, Labrinth,Paris Paloma,jireel,Co...",style:"", imageSrc:images.HH},
          {title:"Noah Kahan, Labrinth,Paris Paloma,jireel,Co...",style:"", imageSrc:images.HH},

    ]
    const MusicCardArray2 =[
      {title:"Noah Kahan, Labrinth,Paris Paloma,jireel,Co...",style:"", imageSrc:images.cc},
            {title:"Noah Kahan, Labrinth,Paris Paloma,jireel,Co...",style:"", imageSrc:images.cc}

    ]
  return (
    <div className="w-full flex  justify-center bg-[#121212]  ">
         <div className="w-[412px] h-screen border relative flex flex-col border-white border pt-[79px]  flex gap-[10px]">
                <Header />
                <div className="mt-[23px]">
                <MiniCard/></div>
            <div className="flex-1 overflow-y-auto scrollbar-none ">
              <div className="pl-[17px]  flex flex-col">
                <Title title="Fresh Track Today!" />
               <div className="flex gap-[12px] overflow-x-scroll scrollbar-none">
                    {MusicCardArray.map((item,i)=>(
                           <MusicCard 
                             item={item}
                               />
                ))}
               </div>
                
                 

                </div>
                <div className="pl-[17px] mt-[40px] flex flex-col">
                <Title title="Popular Track" />
                  <div className="flex gap-[12px]">
                    {MusicCardArray2.map((item,i)=>(
                           <MusicCard 
                             item={item}
                               />
                     ))}
                   </div>
                
                 

                </div>
                <div className="pl-[17px] mt-[40px] flex flex-col">
                <Title title="Popular Track" />
                  <div className="flex gap-[12px]">
                    {MusicCardArray2.map((item,i)=>(
                           <MusicCard 
                             item={item}
                               />
                     ))}
                   </div>
                
                 

                </div>
                </div>
                <Footer />
         </div>
    </div>
  );
}
