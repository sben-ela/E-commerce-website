import { useEffect, useState } from "react";
import Product from "./Product";



export default function Products()
{
    const [active, setActive] = useState(0);
    const [items, setItems] = useState([]);
    const types = [
        'All Products' , 'Men', 'Women', 'Shoes', 'Watches'        
    ]

    useEffect(()=>{
        const getItems = async ()=>{
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setItems(data);
        }
        getItems();
    }, []);

    return(
        <div>
            <ul className="flex py-20  flex-wrap ">
                {
                    types.map(((type, index) => (
                <li
                    className={`font-medium opacity-70 transition duration-[0.5s] hover:opacity-100  text-xl px-10 pt-2  ${index === active ? 'underline opacity-100' : ''}`}
                    onClick={() => { setActive(index); }}
                    key={index}
                    >
                    {type}
                </li>

                    )))
                }
            </ul>
            <div className="grid gap-[100px] md:grid-cols-2 lg:grid-cols-3  2xl:grid-cols-4">
                {items.map((item) => <div key={item.title}>
                    <Product  product={item} ></Product>
                </div>)}
            </div>
        </div>
    )
}