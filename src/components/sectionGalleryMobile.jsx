import { useState } from "react"
import { dataGalleryMobile } from "../assets/data/dataGallery"


const SectionGalleryMobile = () => {
    const [gallery, setGallery] = useState(dataGalleryMobile)

    return (
        <div className="grid grid-cols-2">
            {gallery.map((({id, image}) => (
                <article key={id}>
                    <img src={image} alt="Illustration gallery mobile" />
                </article>
            )))}
        </div>
    )
}

export { SectionGalleryMobile }