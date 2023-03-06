import pictureAudience from '../assets/images/mobile/image-stand-out.jpg';
import pictureAudienceDesktop from '../assets/images/desktop/image-stand-out.jpg';

const SectionAudience = () => {
    return(
        <section className='md:flex flex-row '>
            <div className='basis-1/2 self-center'>
                <img src={pictureAudience} alt="Illustration from 'Audience' section" className='md:hidden'/>
                <img src={pictureAudienceDesktop} alt="Illustration from 'Audience' section" className='hidden md:block w-full'/>
            </div>
            
            <div className='md:w-1/2 flex flex-col px-8 py-8 md:px-8 lg:px-24 basis-1/2 self-center'>
                <h1 className='text-Very-dark-desaturated-blue text-3xl font-extrabold text-center mb-7 md:text-5xl md:text-left lg:mb-10 lg:text-5xl'>Stand out to the right audience</h1>
                <p className='text-center text-Dark-grayish-blue tracking-wider mb-7 md:text-left md:text-sm lg:mb-10 lg:leading-8'>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.</p>
                <button className='text-center text-Very-dark-desaturated-blue text-md font-extrabold uppercase md:text-left md:text-sm hover:border-b-Soft-red border-b-rose-200 border-b-8 md:w-28 w-32 container mx-auto md:mx-0 rounded-md hover:cursor-pointer ' >Learn More</button>
            </div>
        </section>
    )
}

export { SectionAudience };