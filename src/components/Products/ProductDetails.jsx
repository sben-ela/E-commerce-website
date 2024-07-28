import Select from 'react-select'
import { MdOutlineClose } from "react-icons/md";
import  ImageGallery  from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import 'rsuite/dist/rsuite.min.css';

import { InputNumber } from 'rsuite';


const ProductDetails = ({product, setView}) =>{
    
    const handleParentClick = () =>{
        setView(false);
    }

    const handleChildClick = (e) => {
        e.stopPropagation();
    }

    const ColorOptions = [
        {value : 'red' , label :'Red'},
        {value : 'blue' , label :'Blue'},
        {value : 'gray' , label :'Gray'}
    ]

    const SizeOptions = [
        {value : 's' , label :'S'},
        {value : 'm' , label :'M'},
        {value : 'l' , label :'L'},
        {value : 'xl' , label :'XL'}
    ]
    

    const images = [
        {
          original: "https://preview.colorlib.com/theme/cozastore/images/product-detail-01.jpg",
          thumbnail: "https://preview.colorlib.com/theme/cozastore/images/product-detail-01.jpg",
        },
        {
          original: "https://preview.colorlib.com/theme/cozastore/images/product-detail-02.jpg",
          thumbnail: "https://preview.colorlib.com/theme/cozastore/images/product-detail-02.jpg",
        },
        {
          original: "https://preview.colorlib.com/theme/cozastore/images/product-detail-03.jpg",
          thumbnail: "https://preview.colorlib.com/theme/cozastore/images/product-detail-03.jpg",
        },
      ];
    const desc = "Elevate your style with our Men's Classic Leather Jacket. Crafted from premium, high-quality genuine leather, this jacket combines durability with a sophisticated look. The sleek and timeless design makes it a versatile addition to any wardrobe, perfect for both casual outings and more formal events."
      

    return (
            <div onClick={handleParentClick} className="transition duration-300 fixed inset-0 z-40 w-full h-full bg-black bg-opacity-60 ">
                <div onClick={handleChildClick} className="overflow-y-auto absolute rounded-md z-50 left-[50%] -translate-x-[50%]  top-32 w-[80vw] 2xl:w-[60vw] h-[80vh] bg-white">
                    <MdOutlineClose onClick={()=>{setView(false)}}  className="text-black fixed top-4 z-200  right-8    scale-[5]" />    

                    <div className="flex flex-col  lg:flex-row mb-10">
                        <div className='w-[100%] lg:w-[60%] translate-y-[5vh] mb-20' >
                            <ImageGallery originalHeight='500px' thumbnailPosition='top' items={images}/>
                        </div>
                        <div className="xl:p-20 p-8 flex flex-col space-y-5 mt-[150px]  lg:w-[50%]">
                            <h1 className="text-gray-800 text-2xl font-bold font-roboto" >{product.title.slice(0, 20)}</h1>
                            <a className="hover:text-black hover:no-underline text-xl font-extrabold" > {product.price} $ </a>
                            <p className=" text-gray-600 text-xl font-roboto pb-4" > {desc} </p>
                            <div className="flex flex-col space-y-5">
                            <label className="flex justify-between lg:justify-around text-xl text-gray-700 px-10">
                                <a className="hover:text-black hover:no-underline p-2" >Color</a> 
                                <Select className='w-[50%]'  options={ColorOptions}></Select>
                            </label>
                            <label className="flex justify-between lg:justify-around text-xl text-gray-700 px-10">
                                <a className="hover:text-black hover:no-underline p-2" >Size</a> 
                                <Select className='w-[50%]'  options={SizeOptions}></Select>
                            </label>
                            <InputNumber className='p-2 translate-y-5  translate-x-[50%] w-[50%]  font-extrabold' max={10} min={1} />
                            <button className='translate-y-10 translate-x-[50%] border-2 w-[50%] h-16 rounded-md border-gray-800
                             hover:border-blue-300 bg-blue-900 text-gray-100 text-xl font-roboto transition duration-300 hover:bg-gray-800 hover:scale-110'>
                                ADD TO CART
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}
export default ProductDetails;
