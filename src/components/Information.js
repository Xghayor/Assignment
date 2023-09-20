import React from "react";
import './Information.css'


const Information = ({infoName, title, name1, name2, name3, name4, name5, btnName}) => {

    return (
        <div className="info-box">
            <h4 className="box-name">{infoName} <button>{btnName}</button></h4>
            <div className="info-customer">
            <p>{title}</p>
            <p  className="date-box">{name1}</p>
            <p>{name2}</p>
            <p>{name3}</p>
            <p>{name4}</p>
            <p  className="red-p">{name5}</p>
            </div>
        </div>
    )
}


export default Information;