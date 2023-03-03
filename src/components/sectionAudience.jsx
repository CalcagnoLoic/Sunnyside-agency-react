import pictureAudience from '../assets/images/mobile/image-stand-out.jpg';
import pictureAudienceDesktop from '../assets/images/desktop/image-stand-out.jpg';

const SectionAudience = () => {
    return(
        <section className='md:flex flex-row'>
            <img src={pictureAudience} alt="" className='md:hidden'/>
            <img src={pictureAudienceDesktop} alt="" className='hidden md:block '/>
            <div className='p-16 md:text-5xl md:px-40 md:py-40 md:basis-1/2'>
                <h1 className='text-Very-dark-desaturated-blue text-3xl font-extrabold text-center mb-7 md:text-5xl md:text-left lg:mb-10'>Stand out to the right audience</h1>
                <p className='text-center text-Dark-grayish-blue tracking-wider mb-7 md:text-left md:text-sm lg:mb-10 lg:leading-8'>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.</p>
                <a href='/'>
                    <p className='text-center text-Very-dark-desaturated-blue text-md font-extrabold uppercase md:text-left md:text-sm'>Learn More</p>
                </a>
            </div>
        </section>
    )
}

export { SectionAudience };