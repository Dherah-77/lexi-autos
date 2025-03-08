import { useState } from 'react';

const Header = () => {

    const [navVisible, setNavVisible] = useState(false);

    return (
        <header className='fixed top-0 justify-between flex flex-row left-0 w-full z-20 p-4 shadow-lg bg-blue-500'>
            <a href="#" className="w-40">
            <img src="/logo.png" alt="Logo-image" />
            </a>
            <ul className="p-4 hidden text-white text-sm m-auto md:flex flex-row gap-6">
                <a href="#about"><li>About Us</li></a>
                <a href="#products"><li>Products</li></a>
                <a href="#contact"><li>Contacts</li></a>
            </ul>

            {navVisible && (
                <ul className="smallnav w-full mt-19 absolute left-0 bg-blue-500 h-35 flex flex-col justify-evenly text-center md:hidden">
                    <a onClick={() => setNavVisible(false)} href="#about"><li>About Us</li></a>
                    <hr />
                    <a onClick={() => setNavVisible(false)} href="#products"><li>Products</li></a>
                    <hr />
                    <a onClick={() => setNavVisible(false)} href="#contact"><li>Contacts</li></a>
                </ul>
            )}
            <img src="/menu.png" alt="Menu icon" id="menu-icon" className={`w-10 h-10 md:hidden cursor-pointer ${navVisible ? 'hidden' : ''}`} onClick={() => setNavVisible(true)}/>
            <img src="/close.png" alt="Close icon" id="close-icon"  className={`w-10 h-10 md:hidden cursor-pointer ${navVisible ? '' : 'hidden'}`} onClick={() => setNavVisible(false)}/>
        </header>
    )
}

export default Header;