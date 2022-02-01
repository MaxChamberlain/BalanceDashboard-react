import React from 'react';
const stylesheet = require('./sys_header.css');

export default function Button(props){
  return(
    <a href={props.url}>
      <div className={"button " + props.type}>
        {props.text}
      </div>
    </a>
  );
}
