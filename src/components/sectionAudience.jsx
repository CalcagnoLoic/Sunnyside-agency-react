import pictureAudience from '../assets/images/mobile/image-stand-out.jpg';
import pictureAudienceDesktop from '../assets/images/desktop/image-stand-out.jpg';

const SectionAudience = () => {
    return(
        <section className='md:flex flex-row'>
            <div className='md:w-1/2 basis-1/2'>
                <img src={pictureAudience} alt="Picture from 'Audience' section" className='md:hidden'/>
                <img src={pictureAudienceDesktop} alt="Picture from 'Audience' section" className='hidden md:block '/>
            </div>
            
            <div className='md:w-1/2 flex flex-col px-8 py-8 md:px-8 lg:px-24 lg:py-16 md:py-8  basis-1/2'>
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