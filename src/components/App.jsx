import Header from "./header";
import { SectionTransform } from "./sectionTransform";
import { SectionAudience } from "./sectionAudience";

const App = () => {
  return (
    <div className="font-fraunces">
      <Header />
      <section>
        <SectionTransform />
        <SectionAudience />
      </section>
    </div>
  );
}

export default App;
