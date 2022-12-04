import React, { Component } from 'react'
import './Items.css'
import Item from './'

export class Items extends Component {
	render() {
		return (
      		<main>
				{this.props.items.map(el => (
					<Item/>
				))}
			</main>
    	)
  	}
}

export default Items