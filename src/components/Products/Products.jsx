import { act, useEffect, useState } from "react";
import Product from "./Product";
import ProductDetails from "./ProductDetails";



export default function Products()
{
    const [active, setActive] = useState(0);
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [view, setView] = useState(null);

    const types = [
        'All Products' , 'Men', 'Women', 'Shoes', 'Watches'        
    ]

    useEffect(()=>{
        const getItems = async ()=>{
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            console.log(data);
            setItems(data);
        }
        getItems();
    }, []);

    
    const filter = () => {
        const newFilteredItems = items.filter((item) => {
            return (item.description + item.title + item.category).includes(types[active]);
        });
        setFilteredItems(newFilteredItems);

    };



    useEffect(filter, [active]);

    return(
        <div>
            {view && <ProductDetails  product={items[view-1]} setView={setView} />}
            <ul className="flex py-20  flex-wrap ">
                {
                    types.map(((type, index) => (
                <li
                    className={`relative font-medium opacity-60 transition duration-[0.8s] 
                    hover:opacity-100 cursor-pointer  text-xl px-10 pt-2  
                    ${index === active ? 'opacity-100' : ''}`}
                    onClick={() => { setActive(index); }}
                    key={index}
                    >
                    {type}
                    <span
                        className={`absolute  right-0 w-[80%] left-[50%] translate-x-[-50%] bottom-0 h-0.5 bg-[#16121a] transition-all duration-[1s] ${
                        index === active ? 'opacity-100' : 'opacity-0'
                        }`}
                    ></span>
                </li>

                    )))
                }
            </ul>
            { (filteredItems.length || (items.length && !active)) ? 
                <div className=" bg-transparent grid gap-[100px] md:grid-cols-2 lg:grid-cols-3  2xl:grid-cols-4">
                    {(active != 0 ? filteredItems : items)?.map((item) =>
                        <div key={item.title}  >
                            <Product  product={item} setView={setView} ></Product>
                        </div>)}
                </div> : <div className=" flex h-[10vh] justify-center text-4xl  text-gray-500 rounded-lg ">there's No {types[active]}</div>
            }
        </div>
    )
}