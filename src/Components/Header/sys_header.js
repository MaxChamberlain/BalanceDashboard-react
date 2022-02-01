import React from 'react';
import Button from './head_button.js';
const stylesheet = require('./sys_header.css');

export default function Header(){
  const imgStyles1 = {
    position: "absolute",
    zIndex: 999,
    top: 5+'px',
    left: 15+'px',
    height: 30+'px',
    filter: 'invert(1)'
  }
  return(
    <div>
    <a href={"https://5651273.app.netsuite.com/app/site/hosting/scriptlet.nl?script=1493&deploy=1"}>
      <img src={"https://5651273.app.netsuite.com/core/media/media.nl?id=7124&c=5651273&h=6OoXujEXi8EnhfaP8uKzcl-SL2fWdvlIdcsVnx4j1MD5y71q"} style={imgStyles1}/>
    </a>
      <Button type="inventory" url="https://5651273.app.netsuite.com/app/site/hosting/scriptlet.nl?script=1494&deploy=1" text="Inventory tracking" />
      <Button type="return" url="https://5651273.app.netsuite.com/app/center/card.nl?sc=-29&whence=" text="Return to Netsuite" />
    <div className="divHeader systemHead">
      Daily Operations Dashboard
    </div>
    </div>
  );
}
