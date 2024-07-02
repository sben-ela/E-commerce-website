import { useState } from "react";
import { FaSearch } from "react-icons/fa";
// import {useMediaQuery} drom ''



const Nav = ()=>{
    
    const [active, setActive] = useState(1);
    // const bigScreen = useMediaQuery();
    const navItems = [
        { id: 1, text: 'Home' },
        { id: 2, text: 'Company' },
        { id: 3, text: 'Resources' },
        { id: 4, text: 'About' },
        { id: 5, text: 'Contact' },
      ];

    return(
        <div className="fixed h-[10vh] w-[100%] bg-[#c9caca] z-30">
            <a className="left-10 font-bebas absolute block top-10 text-5xl font-bold w-[15vw]" >Seg Store</a>
            {
            <ul className='flex justify-center items-center h-full'>
                {navItems.map(item => (
                <li
                    onClick={()=>{setActive(item.id)}}
                    key={item.id}
                    className={`cursor-pointer font-roboto p-4 xl:p-10  transition duration-[1s] lg:text-3xl text-[#a977e6] hover:text-[#1e0f31] ${active === item.id ? "text-[#000000]" : ""} cc `}
                >
                    {item.text}
                </li>
                ))}
            </ul>
            }





            {/* <div className="absolute right-[2vw] top-10  w-fit group scale-105"> */}
                {/* <input type="text" placeholder="search" className=" transition-all h-10 pl-2 duration-300 group-hover:w-[210px] lg:group-hover:w-[20vw]  w-[15vw] border-2 border-gray-600 hover:botd rounded-md "></input>
                <FaSearch className=" absolute right-1 top-1.5 group-hover:text-blue-400" ></FaSearch> */}
            {/* </div> */}
        </div>
    )
}




export default Nav;
