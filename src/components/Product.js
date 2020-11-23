import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { Rating } from '../components/Rating'
import './Product.css'

export function Product({ product }) {
    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/product/${product._id}`}>
                <Card.Img className='card--img' src={product.image} variant='top' />
            </Link>
            <Card.Body>
                <Link to={`/product/${product._id}`} style={{ textDecoration: 'none' }}>
                    <Card.Title as='div' className='div-name'><strong>{product.name}</strong></Card.Title>
                </Link>
                <Card.Text as='div'>
                    <Rating value={product.rating}
                        text={`${product.numReviews} reviews`} />
                </Card.Text>
                <del style={{ color: '#c52d2f', position: 'relative', top: '16px', left: '77%' }} >
                    <Card.Text as='h4' style={{ color: '#000' }}>
                        ${product.discounted}
                    </Card.Text>
                </del>

                <Card.Text as='h3' style={{ color: '#000', position: 'relative', top: '-15px' }}>
                    ${product.price}
                </Card.Text>
            </Card.Body>
        </Card >
    )
}
