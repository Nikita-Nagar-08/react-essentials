import { useState } from "react";

import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import {CORE_CONCEPTS} from "./data";
import {EXAMPLES} from "./data";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function clickHandler(selectedButton){
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concepts) => <CoreConcept key={concepts.title} {...concepts}/>)}
          </ul>
        </section>
        
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'Components'} onSelect={() => clickHandler('Components')}>
              Components
            </TabButton>
            <TabButton isSelected={selectedTopic === 'JSX'} onSelect={() => clickHandler('JSX')}>
              JSX
            </TabButton>
            <TabButton isSelected={selectedTopic === 'Props'} onSelect={() => clickHandler('Props')}>
              Props
            </TabButton>
            <TabButton isSelected={selectedTopic === 'States'} onSelect={() => clickHandler('States')}>
              States
            </TabButton>
          </menu>
          {!selectedTopic && <p>Please select a topic</p>}
          {selectedTopic ? (<div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>) : null
          }
        </section>
      </main>
    </div>
  );
}

export default App;
