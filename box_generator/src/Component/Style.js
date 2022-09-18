import React from 'react';

const Style = (props) => {
  const { box } = props;

  return (
    <div>
      {
        box.map((box, index) => (
          <div key={index} style={{ display: "inline-block", margin: "10px", height: box.size, width: box.size, backgroundColor: box.color}}></div>
        ))
      }
    </div>
  );
}

export default Style;