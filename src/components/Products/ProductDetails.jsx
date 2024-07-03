import { MdOutlineClose } from "react-icons/md";



const ProductDetails = ({product}) =>{
    



    return (
        <div className="transition duration-300 fixed inset-0 z-40 w-full h-full bg-black bg-opacity-60 ">
            
            <div className="absolute rounded-md z-50 left-[50%] -translate-x-[50%]  top-40 w-[90vw] h-[70vh] bg-white">
                <MdOutlineClose className="text-white absolute right-0 -translate-y-10 scale-[4]" />    
                {/* <div className="flex ">

                </div> */}
            </div>
        </div>
    );
}
export default ProductDetails;
