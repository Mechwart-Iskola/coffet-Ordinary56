import React, { useEffect, useState } from 'react'
import { Item } from '../../types/types';
import "./popular.css"
import PopularCard from '../popularCard/PopularCard';
const Popular = () => {
  {/*Fetcheld be a popular.json-ból az adatokat és tárold le egy állapotváltozóban*/ }
  const [items, setItems] = useState<Item[]>([]);
  useEffect(() => {

    const fetchPopularItems = async () => {
      const res = await fetch("/popular.json");
      const json: Item[] = await res.json();
      setItems(json);
    };
    fetchPopularItems();
  });

  {/*Hozz létre egy popularcard komponenst és a lementett adatokat ezen keresztül jelenítsd meg*/ }
  return (
    <section className='popular'>
      <h1 className='section__title'>POPULAR <br /> CREATIONS</h1>
      {items.map(item => (
        <PopularCard key={item.name
        } item={item} />
      ))}
    </section>
  )
}

export default Popular
