import { useEffect, useState } from "react"
import categoryData from "../api/categories.json"
import Category from "./ui/Category";

export default function Categories() {

const [categories, setCategories] = useState([]);

useEffect(() => {
  //istek
  // setTimeout(()=> setCategories(categoryData) , 1000)
  setCategories(categoryData)
}, [])


    return (
      <div className="bg-white py-4">
        <div className="container mx-auto">
        <h3 className="font-semibold text-sm mb-2">Kategoriler</h3>
          <div className="grid grid-cols-3
          sm:grid-cols-6
          md:grid-cols-8
          lg:grid-cols-10
          xl:grid-cols-11
          2xl-grid-cols-12">
              {/* {!categories.length && "Yükleniyor...."} */}
              {categories && categories.map(category => <Category key={category.id} category={category} />
              )}
          </div>
        </div>
      </div>
    )
  }
  