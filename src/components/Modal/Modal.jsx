import React, { Component } from 'react'
import './Modal.css'

export class Modal extends Component {
    render() {
        return (
            <div className='modal'>
                <div className='modal__wrapper'>
                    <img className='modal__img' src={'./img/' + this.props.item.img} alt="img" onClick={() => this.props.onShowModal(this.props.item)} />
                    <h3 className='card__title'>{this.props.item.title}</h3>
                    <p className='card__desc'>{this.props.item.desc}</p>
                    <b className='card__price'>{this.props.item.price}</b>
                    <div className='card__add modal__icon' onClick={() => this.props.onAdd(this.props.item)}>+</div>
                </div>
            </div>
        )
    }
}

export default Modal  