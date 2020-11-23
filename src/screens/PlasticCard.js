import React, { Component } from 'react'
import Card from 'react-credit-cards'
import './PlasticCard.css'


export class PlasticCard extends Component {
    render() {
        return (
            <div className='App-cards'>
                <div className='App-cards-list'>
                    <Card
                        name="John Smith"
                        number="5555 4444 3333 1111"
                        expiry="10/20"
                        cvc="737"
                    />
                </div>
            </div>
        )
    }
}