import logo from '../assets/images/logo.svg'
import facebook from '../assets/images/icon-facebook.svg'
import instagram from '../assets/images/icon-instagram.svg'
import twitter from '../assets/images/icon-twitter.svg'
import pinterest from '../assets/images/icon-pinterest.svg'

const Footer = () => {
    return (
        <footer className=' flex flex-col p-16 bg-Dark-moderate-cyan'>
            <div className='flex justify-center mb-10'>
                <img src={logo} alt="Logo sunnyside" className='fill-Dark-desaturated-cyan w-52'/>
            </div>
            <div className='flex justify-center flex-row gap-12 font-semibold mb-12'>
                <p className='text-Dark-desaturated-cyan hover:text-white hover:cursor-pointer'>About</p>
                <p className='text-Dark-desaturated-cyan hover:text-white hover:cursor-pointer'>Services</p>
                <p className='text-Dark-desaturated-cyan hover:text-white hover:cursor-pointer'>Projects</p>
            </div>
            <div className='flex justify-center flex-row gap-5'>
                <img src={facebook} alt="Logo facebook" className='hover:cursor-pointer'/>
                <img src={instagram} alt="Logo instagram" className='hover:cursor-pointer'/>
                <img src={twitter} alt="Logo twitter" className='hover:cursor-pointer'/>
                <img src={pinterest} alt="Logo pinterest" className='hover:cursor-pointer'/>
            </div>
        </footer>
    )
}

export { Footer }