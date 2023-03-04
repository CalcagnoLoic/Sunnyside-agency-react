import { dataGalleryDesktop } from "../assets/data/dataGallery";
import { useState } from "react";

const SectionGalleryDesktop = () => {
    const [gallery, setGallery] = useState(dataGalleryDesktop)

    return (
        <div className='grid grid-cols-4'>
            {gallery.map(({id, image}) => (
                <article key={id}>
                    <img src={image} alt="Illustration for gallery" />
                </article>
            ))}
        </div>
    )
}

export { SectionGalleryDesktop };