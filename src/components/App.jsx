import Header from "./header";
import { SectionTransform } from "./sectionTransform";
import { SectionAudience } from "./sectionAudience";
import { Section } from "./section";
import { SectionGalleryDesktop } from "./sectionGalleryDesktop";
import { SectionGalleryMobile } from "./sectionGalleryMobile";

const App = () => {
  return (
    <div className="font-fraunces">
      <Header />
      <section>
        <SectionTransform />
        <SectionAudience />
        <Section />
        <div className="hidden md:block">
          <SectionGalleryDesktop />
        </div>
        <div className="block md:hidden">
          <SectionGalleryMobile />
        </div>
      </section>
    </div>
  );
}

export default App;
