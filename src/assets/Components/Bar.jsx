import React from "react";

const Bar = ({step, length}) => {
  const persentage = Math.round((step / length * 100));

    return (
        <div className='bar-wrapper'>
          <div className="brdr">
            <div style={{width: `${persentage}%`}} className='loading-bar'></div>
          </div>
        </div>
    )
}

export default Bar;