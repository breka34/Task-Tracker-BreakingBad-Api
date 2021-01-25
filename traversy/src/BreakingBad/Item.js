import React, { useState } from 'react'
// import {FaBatteryEmpty } from "react-icons/fa";
// import styles from './breaking.css';
const Item = ({ item }) => {
    return (
        <div className="breaking-item">
           <div className="breaking-img">
               <img src={item.img} />
           </div>
        {<p className="hide absolute" className={item.status === 'Alive' ? 'green' : 'red'}>{item.status}</p>}
           <div className="breaking-details">
               <h4>{item.name}</h4>
               <p>{item.nickname}</p>
               <p>{item.birthday}</p>
           </div>
        </div>
    )
}

export default Item
