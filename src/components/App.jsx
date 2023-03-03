import Header from "./header";
import { SectionTransform } from "./sectionTransform";
import { SectionAudience } from "./sectionAudience";
import { Section } from "./section";

const App = () => {
  return (
    <div className="font-fraunces">
      <Header />
      <section>
        <SectionTransform />
        <SectionAudience />
        <Section />
      </section>
    </div>
  );
}

export default App;
