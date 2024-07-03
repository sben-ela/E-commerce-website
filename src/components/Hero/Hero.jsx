import Img1 from '../../assets/image1.png'
import Img2 from '../../assets/image2.png'
import Img3 from '../../assets/image3.png'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import { TypeAnimation } from 'react-type-animation';







const Hero = ()=>{
    const settings = {
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow:1,
        slidesToScroll: 1,
        autoplay : true,
        autoplaySpeed : 1000,
        fade : true,
      };


    const heros = [
        {
            image : Img1,
            title : "Title here",
            discription : "Start by creating a new Product"
        },
        {
            image : Img2,
            title : "Title here",
            discription : "Start by creating a new Product"
        },        {
            image : Img3,
            title : "Title here",
            discription : "Start by creating a new Product"
        },
    ]
    
    return(
        <Slider {...settings} 
        >
            {
                heros.map(hero => (
                    <div key={hero.title} className='focus:outline-none  relative bg-[#c9caca]'>
                        <img src={hero.image} alt="heroImage" className='w-full h-[95vh] object-right object-contain' />
                        <div className='absolute top-[50%]  flex flex-col m-5 '>
                            {/* <h1 className='font-extrabold p-10 ransition-all'>{hero.title}</h1>
                            <p>{hero.discription}</p> */}
                            <TypeAnimation
                            sequence={[
                                    'We offer a wide selection of T-shirts',
                                    1000,
                                    'We offer a wide selection of Dresses',
                                    1000,
                                    'We offer a wide selection of Pants',
                                    1000,
                                    'We offer a wide selection of Jackets',
                                    1000,
                                    ]}
                                    wrapper="span"
                                    speed={10}
                                    className='lg:text-[3vw] font-bold text-black md:text-[4vw] font-playwrite'
                                    repeat={Infinity}
                                        />
                        </div>
                    </div>))
            }
        </Slider>
    )

}


export default Hero;