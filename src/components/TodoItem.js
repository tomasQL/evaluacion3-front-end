import React from "react";
import './TodoItem.css';

export function TodoItem(props) {
    
    return (
        <li className="list-group-item texto-rojo">{props.nombre}</li>
    )    
}