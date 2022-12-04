import React, { Component } from 'react'
import './Item.css'

export class Item extends Component {
    render() {
        return (
            <div className='card'>
                <img src={'./img/' + this.props.item.img} alt="img" />
                <h4 className='card__'>{this.props.item.title}</h4>
                <p className='card__'>{this.props.item.desc}</p>
                <b className='card__'>{this.props.item.price}</b>
                <div className='card__add'>+</div>
            </div>
        )
    }
}

export default Item