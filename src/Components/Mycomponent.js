import React, {Component} from 'react';

export default class Mycomponent extends Component {

    constructor(props) {
        super(props)
        this.color = 'red'
        this.rooms = [
            {
                name: '# 231',
            size: 12
            },
            {
                name: '# 241',
                size: 14
            },
            {
                name: '# 236',
                size: 13
            },
            {
                name: '# 233',
                size: 11
            }

        ]
        this.updateColor = this.updateColor.bind(this)
        this.renderHeader = this.renderHeader.bind(this)
    }

    updateColor() {
        this.color = this.color === 'red' ? 'green' : 'red'
        this.forceUpdate()
    }

    renderHeader() {
        return (
            <ul>{this.rooms.map( function ( room, index) {
                return (
                    <li key={index} style={{borderBottom: '2px solid black'}}> Roome name is:
                        {
                            room.name
                        }
                        and size {
                        room.size
                    }
                    </li>
                )
            })} </ul>

        )
    }

    render() {
        return (
            <div
                style={{background: this.color}}
                onClick={this.updateColor}
            >
                <h1>{this.renderHeader()}</h1>

            </div>
        )
    }


}