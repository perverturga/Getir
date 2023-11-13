import Products from "../api/products.json"
import { useEffect, useState } from "react";
import ProductItem from "./ui/ProductItem";

export default function Favorites() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(Products);
  }, [])
  

    return (
      <div className="container mx-auto">
        <h3 className="font-semibold text-sm mb-3">Favoriler</h3>
        <div className="grid grid-cols-2
        sm:grid-cols-4
        md:grid-cols-5
        lg:grid-cols-6
        xl:grid-cols-7
        2xl:grid-cols-8
        gap-0.1 rounded-lg overflow-hidden">
          {products.length && products.map((product , index) => 
            <ProductItem key={product.id} product={product} />
            )}
        </div>
      </div>
    )
  }
  