import React, {useState, useEffect} from 'react'
import Item from './Item';

const BreakingApi = ({items}) => {
    return (
        <>
        <div className="breaking-bad-items">
            {items.map((item,id) => (
                <Item key={id} item={item}></Item>
            ))}
            <div className="breking-back"></div>
        </div>
        </>
    )
            }

export default BreakingApi
