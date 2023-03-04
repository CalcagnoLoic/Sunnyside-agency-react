import { useState } from 'react';
import hamburger from '../assets/images/icon-hamburger.svg';

const MenuMobile = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <button onClick={() => {
            setIsOpen(!isOpen)
        }}>
            <img src={hamburger} alt="Menu hamburger mobile" className='block md:hidden cursor-pointer' />
            <div className={isOpen ? "bg-white absolute container w-5/6 top-28 left-10 p-10 z-10 rounded-xl" : "hidden"}>
                <ul >
                    <li className='text-Dark-grayish-blue font-bold mb-5'>About</li>
                    <li className='text-Dark-grayish-blue font-bold mb-5'>Services</li>
                    <li className='text-Dark-grayish-blue font-bold mb-5'>Projects</li>
                    <li className=''>
                        <a className=' border-2 p-3 w-1/2 rounded-full text-Very-dark-desaturated-blue font-bold bg-Yellow border-none px-8'>Contact</a> 
                    </li>
                </ul>

            </div>
            
        </button>
        
    )
}

export { MenuMobile }