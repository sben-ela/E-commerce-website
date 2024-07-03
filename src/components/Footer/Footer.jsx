import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";


const Footer = ()=>{

    return(
        <div className="mt-10 h-[25vh] bg-gray-800 relative">
           <div className="text-white w-[50%] p-10">
                <h1 className="font-bebas text-4xl pb-5"> GET IN TOUCH </h1>
                <p className="font-bold text-gray-300">Any questions? Let us know in store at 8th floor, 4000 marrakech, NY 10018 or call us on</p>
                <ul className="flex flex-row text-xl space-x-5 pt-4">
                    <FaInstagram />
                    <FaFacebookF />
                    <FaWhatsapp />
                </ul>
            </div>
            <div className="absolute top-0 text-white p-10 w-[40%] right-0">
            <h1 className="font-bebas text-4xl pb-5"> help </h1>
            <ul className="flex flex-col space-y-2 font-bold text-gray-300">
                <li>Track Order</li>
                <li>returns</li>
                <li>FAQs</li>
                <li>FAQsr</li>
            </ul>
            </div>
        </div>
    )

}

export default Footer;