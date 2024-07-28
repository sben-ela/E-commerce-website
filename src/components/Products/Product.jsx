import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { motion } from 'framer-motion'
import ProductDetails from "./ProductDetails";



const Product = ({product, setView})=>{

    const [loved, setLoved] = useState(false);
    return(
        <motion.div
        initial={{x : -200}}
        whileInView={{ x: 0, opacity : 1}}
        transition={{duration : 1}}
        viewport={{once:false}}
        className="overflow-hidden"
        >
        <div className="overflow-hidden  relative flex flex-col px-10 group" >
                <div className=" overflow-hidden flex justify-center ">
                <motion.img
                    initial={{ scale: 0.7 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.1 }}
                    viewport={{once:false}}
                    className="transition duration-300 h-[30vh] hover:scale-110 object-contain group border-black-100 p-10 rounded-md"
                    alt={product.title}
                    src={product.image}
                />
                    {/* <img className={`transition duration-300 h-[30vh] hover:scale-110 object-contain  group  border-black-100 p-10  rounded-md`} alt={product.title} src={product.image}></img> */}
                </div>
                <button onClick={()=>{setView(product.id)}} className="font-roboto w-[45%] p-1 bg-gray-100 hover:bg-black hover:text-white  rounded-full opacity-0  top-[35vh]
                right-[50%] translate-x-[50%] cursor-pointer absolute duration-[1s]
                transition-transform  text-2xl group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto group-hover:translate-y-[-170px]"
                > Quick View </button>
            </div>
            <div className="px-10 mt-5 relative">
                <a className="hover:text-black hover:no-underline  block text-xl opacity-50 ">{product.title.slice(0, 20)}</a>
                <a className="hover:text-black hover:no-underline  font-bold text-xl block pt-2" ><span className="opacity-60">$</span> {product.price}</a>
                {!loved  && <CiHeart className="cursor-pointer absolute right-10 scale-[1.9] -translate-y-8" onClick={()=>setLoved(true)}/>}
                { loved && <FaHeart className="cursor-pointer absolute right-10 scale-[1.5] -translate-y-8 text-red-500" onClick={()=>setLoved(false)}/> }
            </div>
        </motion.div>
    )
}



export default Product;