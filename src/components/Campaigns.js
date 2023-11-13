import { useState, useEffect } from "react";
import Slider from "react-slick";
import Banners  from "../api/banners.json"
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io"
import {useWindowWidth} from '@react-hook/window-size'

function NextBtn({ className, style, onClick }) {
  return (
    <button className={`text-purple-700 absolute top-1/2 -right-6 -translate-y-1/2  `}  onClick={onClick}>
      <IoIosArrowForward size={22}/>
    </button>
  );
}

function PrevBtn( { className, style, onClick }) {
  return (
    <button className={`text-purple-700 absolute top-1/2 -left-6 -translate-y-1/2`} onClick={onClick}>
      <IoIosArrowBack size={22}/>
    </button>
  );
}
 

export default function Campaigns() {
    
  const windowWidth = useWindowWidth()

  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners(Banners);
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows:true,
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay : true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1 ,
          arrows: false
        }
      }
    ]
  };
  
  return (
      <div className="sm:container overflow-hidden md:overflow-visible mx-auto px-0">
        <h3 className="font-semibold hidden sm:block text-sm mb-3">Kampanyalar</h3>
        <Slider className="md:-mx-2 relative" {...settings}>
          {banners.length && banners.map((banner, index) =>(
            <div key={banner.id}>
              <picture className="block md:px-2">
                <img src={banner.image} className="sm:rounded-lg"/>
              </picture>
            </div>
          ))}
        </Slider>
      </div>
    )
  }
  