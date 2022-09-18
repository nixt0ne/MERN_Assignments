import React from 'react';

const Return = (props) => {
  const { allTabs, currentTabIndex } = props;

  return (
    <div className="results">
      { allTabs[currentTabIndex].content }
    </div>
  )
}

export default Return;