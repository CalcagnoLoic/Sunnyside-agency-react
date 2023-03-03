import logo from '../assets/images/logo.svg';
import hamburger from '../assets/images/icon-hamburger.svg';
import arrow from '../assets/images/icon-arrow-down.svg';

const Header = () => {
    return (
        <div className='bg-header-mobile md:bg-header-desktop h-screen bg-cover bg-no-repeat bg-scroll bg-center relative' >
            <nav className='flex p-6 place-content-between mb-40 md:mb-20 md:p-10'>
                <img src={logo} alt="Logo sunnyside" className='w-32 md:w-40'/>
                <img src={hamburger} alt="Menu" className='md:hidden hover:cursor-pointer h-5 w-6' />
            </nav>
            <h1 className='flex justify-center text-5xl font-bold text-center text-white uppercase tracking-widest lg:font-extrabold'>We are creatives</h1>
            <img src={arrow} alt="Flèche arrow down" className='animate-bounce absolute bottom-52 left-40 w-16 md:w-8 md:left-1/2 md:bottom-72'/>
        </div>
    )
}

export default Header;