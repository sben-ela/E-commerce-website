import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { motion } from 'framer-motion'

const Product = ({product})=>{

    const [loved, setLoved] = useState(false);

    return(
        <motion.div
            initial={{x : -200, opacity : 0}}
            whileInView={{ x: 0, opacity : 1}}
            transition={{duration : 2, repeat:Infinity, repeatDelay:20}}
            viewport={{once:true}}
            
        >

            <div className="relative flex flex-col px-10 group" >
                <img className={`h-[30vh] object-contain group contain  border-black-100 p-10 border-2`} alt={product.title} src={product.image}></img>
                <button onClick={()=>{console.log("here")}} className="font-roboto w-[45%] p-4 bg-gray-100 hover:bg-black hover:text-white  rounded-full opacity-0  top-[35vh]
                right-[50%] translate-x-[50%]  absolute duration-[1s]
                transition-transform  text-2xl group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto group-hover:translate-y-[-170px]"
                > Quick View </button>
            </div>
            <div className="px-10 mt-5 relative">
                <a className=" block text-xl opacity-50 ">{product.title.slice(0, 20)}</a>
                <a className=" font-bold text-xl block pt-2" ><span className="opacity-60">$</span> {product.price}</a>
                {!loved  && <CiHeart className="absolute right-12 scale-[1.9] -translate-y-10" onClick={()=>setLoved(true)}/>}
                { loved && <FaHeart className="absolute right-12 scale-[1.5] -translate-y-10 text-red-500" onClick={()=>setLoved(false)}/> }
            </div>
        </motion.div>
    )
}



export default Product;