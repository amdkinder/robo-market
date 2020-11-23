import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Message } from '../components/Message'
import { listProducts } from '../actions/productActions'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { addToCart, removeFromCart } from '../actions/cartActions'
import './CartScreen.css'
export const CartScreen = ({ match, location, history }) => {
    const productId = match.params.id

    const qty = location.search ? Number(location.search.split('=')[1]) : 1
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    console.log(cartItems)
    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))

        }
    }, [dispatch, productId, qty])

    const removeFromCartHandler = (id) => {
        console.log('remove')
        dispatch(removeFromCart(id))

    }
    const checkoutHandler = () => {
        history.push('/login?redirect=shipping')

    }
    return (

        <Row>
            <Col md={8}>
                <h1 className='py-3'>
                    <i className='fas fa-cart-plus icons'
                        style={{ margin: '0 10px', cursor: 'pointer' }}></i>Mening savatcham</h1>
                {cartItems.length === 0 ? <Message variant='danger' style={{ fontWeight: 'bold' }}>Savatchangiz bo'sh
                <Link to='/maxsulotlar' variant='danger' className='go-back'
                        style={{ color: 'black', fontWeight: 'bold', textDecoration: 'none' }}><i className='fas fa-arrow-left'></i>Go Back</Link></Message> : (
                        <ListGroup variant='flush'>
                            {
                                cartItems.map(item => (
                                    <ListGroup.Item key={item.product}>
                                        <Row>
                                            <Col md={2}>
                                                <Image src={"../" + item.image} alt={item.name} fluid />
                                            </Col>
                                            <Col md={3}>
                                                <Link to={`/product/${item.product}`}
                                                    style={{ color: 'black', textDecoration: 'none' }}>{item.name}</Link>
                                            </Col>
                                            <Col md={2} className='mt-4'><h4>${item.price}</h4></Col>
                                            <Col md={2}>
                                                <Form.Control className='mt-3' as='select' value={item.qty}
                                                    onChange={(e) => dispatch(addToCart(item.product,
                                                        Number(e.target.value)))}>
                                                    {
                                                        [...Array(item.countInStock).keys()].map((x) => (
                                                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                        ))
                                                    }

                                                </Form.Control>
                                            </Col>
                                            <Col md={2}>
                                                <Link to='/cart'>
                                                    <Button className='delete-button' type='button' variant='light'
                                                        onClick={() => removeFromCartHandler(item.product)}>
                                                        <i className='fas fa-trash'></i>
                                                    </Button>
                                                </Link>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                ))
                            }
                        </ListGroup>
                    )}
            </Col>
            <Col md={4}>
                <Card className='mt-4'>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>Tanlangan maxsulotlar soni ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) </h3>
                            <h4 className='mt-2'>Jami: ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</h4>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button type='button' className='btn-block' disabled={cartItems.length === 0}
                                onClick={checkoutHandler}>Proceed To Checkout</Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    )
}
