import { useState } from "react"
import { dataTestimonial } from "../assets/data/dataTestimonial"

const Testimonial = () => {
    // eslint-disable-next-line
    const [cards, setCards] = useState(dataTestimonial)

    return (
        <div>
            <h2 className="py-20 md:py-30 text-center uppercase text-xl font-bold text-Dark-grayish-blue tracking-widest pb-16">Client Testimonials</h2>
            <div className="grid grid-rows-3 lg:grid-cols-3 lg:h-[350px]">
                {cards.map(({id, image, message, job, name}) => (
                    <article key={id} className='flex flex-col last:mb-8 '>
                        <img src={image} alt='Illustration of testimonial' className="rounded-full w-16 container mx-auto mb-6" />
                        <p className="font-semibold text-Very-dark-grayish-blue text-center p-2 mb-5">{message}</p>
                        <p className="text-center font-bold text-xl text-Very-dark-desaturated-blue mb-2">{name}</p>
                        <p className="mb-16 text-center font-barlow text-Grayish-blue text-sm">{job}</p>
                    </article>
                ))}
            </div>
        </div>
    )
}

export { Testimonial }