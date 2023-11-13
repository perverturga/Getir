
          // <div>
          //   <img className=" 
          //   w-full h=[500px] object-cover"
          //    src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg"></img>
          // </div>
          // <div>
          //   <img className="w-full h-[500px] object-cover" 
          //   src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg"></img>
          // </div> 

import { useState } from "react";
import {FaFacebook} from "react-icons/fa"
import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";
import {useWindowWidth} from '@react-hook/window-size'


export default function HeroSection() {


  const [selected, setSelected] = useState("TR");

  const windowWidth = useWindowWidth()


  const phones = {
    US: "+1",
    DE : "+50",
    TR: "+90",
    IT : "+7",
    IN: "+15",
  }

  const settings = {
    dots: false,
    infinite: true,
    arrows:false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay : true,
    speed: 500,
    autoplaySpeed: 3500,
    cssEase: "linear"
  };


  return (
    <div className=" h-auto sm:h-[500px]  relative flex items-center sm:container
      before:absolute before:inset-0 before:w-full before:h-full before:z-10">
        {windowWidth > 768 && <Slider className="h-full hidden sm:block" {...settings}>
              <div>
              <img className=" 
              w-full h-[500px] object-cover"
              src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg"></img>
              </div>
              <div>
              <img className="w-full h-[500px] object-cover" 
              src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg"></img>
              </div> 
         </Slider>}

         <div className="relative sm:absolute inset-0 px-0 sm:px-8 z-[40] flex items-center">
             <div className="w-full sm:container flex mx-auto justify-between items-center">
               <div className="gap-y-10 flex-col hidden sm:flex">
                  <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"/>
                  <h3 className="text-4xl tracking-tighterfont-semibold text-white">Dakikalar içinde <br/> kapınızda</h3>
               </div>            
             </div>

             <div className="w-full sm:w-[400px] bg-gray-50 sm:rounded-lg px-5 py-3 pb-5 sm:py-6">
               <h3 className="text-purple-600 text-center font-semibold mb-4">Giriş Yap veya Kayıt Ol</h3>
               <div className="flex flex-col gap-y-3">
                 <div className="flex gap-x-3">
                   <ReactFlagsSelect
                    countries={Object.keys(phones)}
                    customLabels={phones}
                    onSelect={code => setSelected(code)}
                    selected={selected}
                    className="flag-select"
                  />
                  <label className="flex-1 relative group">
                    <input required className="h-full px-4 border-2 border-gray-200 rounded w-full
                    transition-colors group-hover:border-purple-700 focus:border-purple-700 outline-none
                    peer text-sm pt-2"
                    />
                    <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500
                    transition-all peer-focus:h-7 peer-focus:text-purple-700 peer-focus:text-xs
                    peer-valid:h-7 peer-valid:text-purple-600 peer-valid:text-xs" 
                    >Telefon Numarası</span>
                  </label>
                </div>
                <button className="h-12 rounded-lg transition-colors bg-yellow-300 text-purple-700 text-sm font-semibold hover:bg-purple-700 hover:text-yellow-300">
                  Telefon Numarası ile devam et
                </button>
                <div className="h-[1px] bg-gray-300 my-2"></div>
                <button className="h-12 flex items-center rounded-lg px-4 transition-colors bg-blue-700 bg-opacity-10 text-blue-900 text-sm font-semibold hover:bg-blue-900 hover:text-white ">
                  <FaFacebook size={26} className="justify-self-start"/>
                  <span className="mx-auto">Facebook ile devam et</span>
                </button>
              </div>
            </div>
        </div>
    </div>
    )
  }
  
