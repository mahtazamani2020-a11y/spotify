import { AppWindow } from "lucide-react"
import HomeIcons from "../Icons/HomeIcons"
import SearchIcons from "../Icons/SearchIcons"
import LibraryIcons from "../Icons/LibraryIcons"

const Footer = () => {
  const FooterArray = [
    {title:"Home", Icons:<HomeIcons/>, style:" w-[31px] h-[31px] text-white gap-[4px] grid pl-[35.5px] justify-items-center pr-[30px]"},
    {title:"Search",Icons: <SearchIcons /> , style:" w-[31px] h-[31px] text-white gap-[4px] grid pl-[35.5px] justify-items-center pr-[30px]"},
    {title:"Library", Icons: <LibraryIcons />  , style:" w-[31px] h-[31px] text-white gap-[4px] grid pl-[35.5px] justify-items-center pr-[30px] mt-[4px]"},
    {title:"Explore", Icons: <AppWindow/> ,style: " w-[31px] h-[31px] text-white gap-[4px] grid pl-[35.5px] justify-items-center pr-[30px]"},


  ]
    return (
      <div  className="w-[413px] h-[43px] flex justify-between h-[85px] absolute bottom-0
     border border-green-300 pt-[14.5px] pr-[46.5px] bg-[#121212]">
      
          {FooterArray.map((item,i)=>(
             <button className={item.style} key={i + 1}>
              <div>
                                 {item.Icons}
                      
              </div>
              <p className="text-[10px] text-[#FFFFFF50] font-semibold" >{item.title} </p>

            </button>
          ))}
       
            
       </div>
    )
}

export default Footer