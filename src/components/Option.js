import React from 'react';

/*
  it is always good idea to name the function when 
  exporting rather then using anonymous function
  which can result in tag naming problems in dom layout 
  like <Unknown/> -> indicates the use of anonymous function 
*/

const Option = (props) => (
  <div className="option">
    <p className="option__text">{props.count}. {props.optionText}</p>
    <button
      className="button button--link"
      onClick={(e) => {
        props.handleDeleteOption(props.optionText);
      }}
    >
      remove
      </button>
  </div>
);

export default Option;
