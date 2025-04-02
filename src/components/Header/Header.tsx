import React, { useState } from 'react'
import "./header.css"
import "remixicon/fonts/remixicon.css";
import { homeImages } from '../../data/data';
import Home from '../Home/Home';
const Header = () => {


    {/*Hozz létre egy boolean állapotváltozót. Értéke alapján hozzáadja a nav_menu osztállyal ellátott elemhez a show-menu osztályt.*/ }
    const [visibleMenu, setVisibleMenu] = useState<boolean>(false);

    {/*Hozz létre egy állapotváltozót boolean típussal, amely azt figyeli, hogy kell-e árnyékot állítani a headernek. */ }
    const [shadow, setShadow] = useState<boolean>(false);
    {/* Ha 50 px-rel lejjebb görgetünk (window.scrollY >= 50), akkor a header osztályú elemhez adjuk hozzá a shadow-header osztályt. */ }

    {/*Generáld le a HOME, POPULAR, ABOUT US, PRODUCTS, CONTACT listaelemeket. Mindegyik a megfelelő helyre mutasson az oldalon*/ }

    {/*A szükséges css osztályokat megtalálod a header.css - ben.*/ }

    {/*importáld a remixicont: import "remixicon/fonts/remixicon.css"; */ }

    {/*close ikon osztálya: ri-close-large-line */ }

    {/*toggle ikon osztálya: ri-apps-2-fill */ }
    return (
        <div className={`header ${shadow && "shadow-header"}`} onScroll={e => {

            setShadow(true)
        }}>
            <nav>
                <ul className='nav__list'>
                    <a className='nav__logo'>STARCOFFEE</a>
                    <li className='nav__link'>
                        <a href='#home'>HOME</a></li>
                    <li className='nav__link'>POPULAR</li>
                    <li className='nav__link'>ABOUT US</li>
                    <li className='nav__link'>PRODUCTS</li>
                    <li className='nav__link'>CONTACT</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
