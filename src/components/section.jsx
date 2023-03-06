import pictureGraphicDesign from '../assets/images/mobile/image-graphic-design.jpg';
import pictureGraphicDesignDesktop from '../assets/images/desktop/image-graphic-design.jpg';

import picturephotography from '../assets/images/mobile/image-photography.jpg';
import picturephotographyDesktop from '../assets/images/desktop/image-photography.jpg';

const Section = () => {
    return (
        <section className='md:flex flex-row'>
            <article className='basis-1/2 relative'>
                <div >
                    <img src={pictureGraphicDesign} alt="Background for 'Graphic design' section" className='md:hidden w-full'/>
                    <img src={pictureGraphicDesignDesktop} alt="Background for 'Graphic design' section" className='hidden md:block w-full'/>
                </div>
                <div className='absolute bottom-10 text-center lg:px-10 xl:px-40'>
                    <h2 className='text-3xl font-bold my-4 text-Dark-desaturated-cyan'>Graphic Design</h2>
                    <p className='text-Dark-desaturated-cyan font-semibold px-2 md:px-0'>Great design makes you memorable. We deliver artwork that underscores your brand message and captures clients' attention.</p>
                </div>
            </article>

            <article className='basis-1/2 relative'>
                <div>
                    <img src={picturephotography} alt="Background for 'Photography' section" className='md:hidden'/>
                    <img src={picturephotographyDesktop} alt="Background for 'Photography' section" className='hidden md:block w-full'/>
                </div>
                <div className='absolute bottom-10 text-center lg:px-10 xl:px-40'>
                    <h2 className='text-3xl font-bold my-4 text-Dark-desaturated-cyan'>Photography</h2>
                    <p className='text-Dark-desaturated-cyan font-semibold px-2'>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
                </div>
            </article>
        </section>
    )
}

export { Section }