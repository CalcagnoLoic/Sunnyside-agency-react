import pictureTransform from '../assets/images/mobile/image-transform.jpg';
import pictureTransformDesktop from '../assets/images/desktop/image-transform.jpg';

const SectionTransform = () => {
    return (
        <section className='md:flex flex-row-reverse'>
            <img src={pictureTransform} alt="Picture from 'Transform your brand' section" className='md:hidden'/>
            <img src={pictureTransformDesktop} alt="Picture from 'Transform your brand' section" className='hidden md:block md:basis-1/2'/>
            <div className='p-16 md:text-5xl md:px-40 md:py-40 md:basis-1/2'>
                <h1 className='text-Very-dark-desaturated-blue text-3xl font-extrabold text-center mb-7 md:text-5xl md:text-left lg:mb-10'>Transform your brand</h1>
                <p className='text-center text-Dark-grayish-blue tracking-wider mb-7 md:text-left md:text-sm lg:mb-10 lg:leading-8'>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
                <a href='/'>
                    <p className='text-center text-Very-dark-desaturated-blue text-md font-extrabold uppercase md:text-left md:text-sm'>Learn More</p>
                </a>
            </div>
        </section>
    )
}

export { SectionTransform };