const Header =  () => {
    const HeaderArray=[
        {title:"All", Style:"w-[52px] h-[34px] bg-[#1FD660] rounded-full"},
        {title:"Music",Style:"w-[71px] h-[34px] bg-[#292929] rounded-full text-white"},
        {title:"Albums",Style:"w-[86px] h-[34px] bg-[#292929] rounded-full text-white"},
        {title:"Trackpack",Style:"w-[108px] h-[34px] bg-[#292929] rounded-full text-white"},

    ]
    return (
    <div className="flex gap-[10px] pl-[18px]" >
        
          <button
                   className="w-[31px] h-[34px] bg-[#7D4B32] rounded-full f "
                   >I</button>
                  
          {HeaderArray.map((item,i)=>(
             <button className={item.Style} key={i + 1}>
              
              <p className="text-[15px] " >{item.title} </p>

            </button>
          ))}
    </div>)
}

export default Header