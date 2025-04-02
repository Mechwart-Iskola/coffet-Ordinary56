import React, { useEffect, useState } from 'react'
import { Product } from '../../types/types'
import "./products.css"
import ProductCard from '../productCard/ProductCard'

const Products = () => {

  {/*Fetcheld be a products.json-ból az adatokat és tárold le egy állapotváltozóban*/ }
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/products.json");
      const json: Product[] = await res.json();
      setProducts(json);
    }
    fetchProducts();
  }, []);
  {/*Hozz létre egy productCard komponenst és a lementett adatokat ezen keresztül jelenítsd meg*/ }
  return (
    <section className='products '>
      <h1 className='section__title'>
        THE MOST <br /> REQUESTED
      </h1>

      <div className='products__container'>
        {products.map(product => (
          <ProductCard product={product} />
        ))}
      </div>
    </section>

  )
}

export default Products
