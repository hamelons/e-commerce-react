import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cetegories: [
                {
                    key: 'all__s',
                    name: 'All'
                },
                {
                    key: 'Hallway_s',
                    name: 'Hallway'
                },
                {
                    key: 'Bedroom_s',
                    name: 'Bedroom'
                },
                {
                    key: 'Kitchen_s',
                    name: 'All'
                }
            ]
        }
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}

export default Categories