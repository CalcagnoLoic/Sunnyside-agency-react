import Header from "./header";
import { SectionTransform } from "./sectionTransform";
import { SectionAudience } from "./sectionAudience";
import { Section } from "./section";
import { SectionGalleryDesktop } from "./sectionGalleryDesktop";
import { SectionGalleryMobile } from "./sectionGalleryMobile";
import { Footer } from "./footer";
import { Testimonial } from "./testimonials";

const App = () => {
  return (
    <div className="font-fraunces">
      <Header />
      <section>
        <SectionTransform />
        <SectionAudience />
        <Section />
        <Testimonial />
        <div className="hidden md:block">
          <SectionGalleryDesktop />
        </div>
        <div className="block md:hidden">
          <SectionGalleryMobile />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
