import React from "react";

const Modal = ({question, check}) => {
    return (
        <div>
          <h1>{question.title}</h1>
          <div className='ul-wrapper'>
            <ul>
                {question.variations.map((item, index) => 
                    <li onClick={() => check(index)} key={item}>{item}</li>
                )}
            </ul>
          </div>
        </div>
    )
}

export default Modal;