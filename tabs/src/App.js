import './App.css';
import React, { useState } from 'react';
import Tabs from './Component/Tabs';
import Return from './Component/Return';

function App() {
  const tabs = [
    { label: "Tab 1", content: "Tab 1 content is showing here" },
    { label: "Tab 2", content: "Tab 2 content is showing here" },
    { label: "Tab 3", content: "Tab 3 content is showing here" },
  ];

  const [ allTabs, setAllTabs ] = useState(tabs);
  const [ index, setIndex ] = useState(0);

  return (
    <div className="App">
      <Tabs allTabs={ allTabs } currentTabIndex={ index } setCurrentTabIndex={ setIndex } />
      <Return allTabs={ allTabs } currentTabIndex={ index } />
    </div>
  );
}

export default App;