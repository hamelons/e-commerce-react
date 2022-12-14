import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa'
import './Order.css'

export class Order extends Component {
    render() {
        return (
            <div className='header__modal'>
                <img className='header__main_img' src={'./img/' + this.props.item.img} alt="img" />
                <h3 className='card__title'>{this.props.item.title}</h3>
                <p className='card__price'>{this.props.item.price}</p>
                <FaTrash className='card__delete' onClick={() => {
                    this.props.onDelete(this.props.item.id)
                }}/>
            </div>
        )
    }
}

export default Order