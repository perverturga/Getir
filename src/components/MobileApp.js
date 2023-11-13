export default function MobileApp() {
    return (
      <div className="bg-purple-700 flex flex-col sm:flex-row items-center sm:pl-12 justify-between bg-mobile-app rounded-lg
      container mx-auto">
          <div className="text-white p-5 sm:p-0 text-center sm:text-left">
            <h3 className="text-2xl tracking-tight font-bold">Getir'i İndirin!</h3>
            <p className="font-semibold">İstediğiniz ürünleri dakikalar içinde kapınıza <br/> getirelim.</p>
            <nav className="mt-5 flex flex-wrap lg:flex-nowrap justify-center gap-2 gap-x-2">
                <a href="#" className="transition-all transform hover:scale-105">
                    <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
                     className="md:h-8 lg:h-auto"/>
                </a>
                
                <a href="#" className="transition-all transform hover:scale-105">
                    <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
                    className="md:h-8 lg:h-auto"/>
                </a>
                <a href="#" className="transition-all transform hover:scale-105">
                  <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
                   className="md:h-8 lg:h-auto"/>
                </a>
            </nav>
          </div>
          <picture className="pt-6 hidden md:block md:self-end">
              <img src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png"/>
          </picture>
      </div>
    )
  }
  