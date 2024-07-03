import { useMediaQuery } from "@mui/material";
import { animate, delay, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {BsFillArrowUpSquareFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";



const Nav = ()=>{
    const navRef = useRef(null);
    const [active, setActive] = useState(1);
    const bigScreen = useMediaQuery('(min-width : 1200px)');
    const [showNav, setShowNav] = useState(true);
    const [start, setStart] = useState(-200)

    const navItems = [
        { id: 1, text: 'Home' },
        { id: 2, text: 'Shop' },
        { id: 3, text: 'Features' },
        { id: 4, text: 'About' },
        { id: 5, text: 'Contact' },
      ];
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(()=>{
        if (navRef.current) {
            const rect = navRef.current.getBoundingClientRect();
            console.log(rect);
        }
    }, [navRef.current?.getBoundingClientRect()])

    const handleScroll = (event) => {
        console.log('User scrolled!');
    };

    return(
        <div onScroll={handleScroll} className="h-fit bg-[#c9caca]">
            { bigScreen &&
                <div className="fixed h-[100px] w-[100%] bg-[#c9caca] z-30">
                    <a className="left-10 font-bebas absolute block top-10 text-5xl font-bold w-[50vw]" >Seg Store</a>
                    <ul className='flex absolute right-0 items-center h-full'>
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
                </div>
            }
            {
                !bigScreen &&
                <div className="relative">
                    
                    { showNav && <MdOutlineClose onClick={()=>{setShowNav(false)}} className=" absolute scale-[4] text-white z-40 right-10 top-5" />}
                    { !showNav && <IoMenu onClick={()=>{setShowNav(true)}} className=" absolute scale-[4] text-black z-40 right-10 top-5" />}
                    { showNav &&
                        <motion.div initial={{ y: -200, opacity:0}}  viewport={{once:true}}
                        whileInView={{y : 0, opacity:1}} transition={{duration :2}}>
                        <div  ref={navRef} className="relative h-[350px] z-30 w-[100%] bg-[#25273f]" >
                        {/* <a className="left-10 z-30 font-bebas absolute block top-10 text-5xl font-bold w-[50vw]" >Seg Store</a> */}
                            <ul className='flex absolute justify-center w-[100%] flex-col'>    
                                {
                                navItems.map(item => (
                                <li
                                    onClick={()=>{setActive(item.id)}}
                                    key={item.id}
                                    className={`h[50%] z-30 w-[100%] ml-1 flex cursor-pointer font-roboto py-4
                                    transition duration-[0.5s] text-3xl text-[#f6f6f7]
                                    hover:text-[#8f44f1] ${active === item.id ? "text-[#bc8afd]" : ""}`}
                                >
                                    {item.text}
                                </li>
                                ))}
                            </ul>
                        </div>
                        </motion.div>
                    }
                        <BsFillArrowUpSquareFill onClick={scrollToTop} className="fixed  right-10 ] cursor-pointer 
                        scale-[4] bottom-10 opacity-60 z-40
                        transition duration-500 hover:opacity-100" />
                </div>

            }
        </div>
        
    )
}




export default Nav;
