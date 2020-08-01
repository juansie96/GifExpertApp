import React from "react";

const GifGridItem = ({title, url}) => (
  <div className='card animate__animated animate__slideInDown'>
    <p>{title}</p>
    <img src={url} alt="" />
  </div>
);

export default GifGridItem;
