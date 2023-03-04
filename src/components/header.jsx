import logo from '../assets/images/logo.svg';
import arrow from '../assets/images/icon-arrow-down.svg';
import { MenuMobile } from './menuMobile';

const Header = () => {
    return (
        <div className='bg-header-mobile md:bg-header-desktop h-[600px] bg-cover bg-no-repeat bg-scroll bg-center relative' >
            <nav className='p-10 flex justify-between'>
                {/* Navbar in desktop view*/}
                <div className='self-center'>
                    <img src={logo} alt="Logo sunnyside" className='md:w-64 w-32'/>
                </div>
                <div className='md:flex gap-12 hidden self-center font-barlow'>
                    <div className='text-white flex gap-12 self-center'>
                        <p className='text-white'>About</p>
                        <p className='text-white'>Services</p>
                        <p className='text-white'>Projecs</p>
                    </div>
                    <div className='self-center font-fraunces'>
                        <button className='text-Dark-blue color-white bg-white px-8 py-4 rounded-full uppercase font-semibold hover:text-white hover:bg-sky-300 duration-1000'>Contact</button>
                    </div>
                </div>
                <div className='md:hidden'>
                    <MenuMobile />
                </div>
                
            </nav>

            <div className='grid place-content-center mt-8'>
                <h1 className='uppercase text-white text-5xl md:text-5xl font-extrabold tracking-widest text-center'>we are creatives</h1>
                <div className='grid place-content-center mt-24 md:mt-16' >
                    <img src={arrow} alt="Illustration of arrow down" className='animate-bounce z-0'/>
                </div>
            </div>
        </div>
    )
}

export default Header;