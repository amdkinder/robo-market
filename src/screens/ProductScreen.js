import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import { Rating } from '../components/Rating'
import './ProductScreen.css'
import { listProductDetails } from '../actions/productActions'
import { Loader } from '../components/Loader'
import { Message } from '../components/Message'




export function ProductScreen({ history, match }) {
    // const [product, setProduct] = useState({})
    const dispatch = useDispatch()
    const [qty, setQty] = useState(1)

    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails
    useEffect(() => {
        // const fetchProduct = async () => {
        //     const { data } = await axios.get(`/api/products/${match.params.id}`)
        //     setProduct(data)
        // }
        // fetchProduct()
        dispatch(listProductDetails(match.params.id))
    }, [dispatch, match])




    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }
    return (
        <>
            <Link className='btn btn-light my-3 font-weight-bold' to='/maxsulotlar'>
                <i className='fas fa-arrow-left' style={{ margin: '0 5px' }}></i>Go Back</Link>
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
                <Row>
                    <Col md={4}>
                        <Image src={"../" + product.image}
                            alt={product.name} fluid />
                    </Col>
                    <Col md={4}>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h3>{product.name}</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>Price:</strong> ${product.price}
                            </ListGroup.Item>
                            <ListGroup.Item className='description'>
                                <strong>Description:</strong>  {product.description}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>
                                            <b>Price:</b>
                                        </Col>
                                        <Col>
                                            <strong style={{ color: 'black' }}>${product.price}</strong>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <b>Discounted:</b>
                                        </Col>
                                        <Col>
                                            <del style={{ color: 'red' }}>
                                                <strong style={{ color: '#000' }}>${product.discounted}</strong>
                                            </del>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>
                                            <b>Status:</b>
                                        </Col>
                                        <Col>
                                            {product.countInStock > 0 ? 'In Stock' : 'Out in Stock'}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                {
                                    product.countInStock > 0 && (
                                        <ListGroup.Item>
                                            <Row>
                                                <Col><b>Qty:</b></Col>
                                                <Col>
                                                    <Form.Control as='select' value={qty}
                                                        onChange={(e) => setQty(e.target.value)}>
                                                        {
                                                            [...Array(product.countInStock).keys()].map((x) => (
                                                                <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                            ))
                                                        }

                                                    </Form.Control>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    )
                                }
                                <ListGroup.Item>

                                    <Button onClick={addToCartHandler} className='btn-block text-uppercase font-weight-bold'
                                        disabled={product.countInStock === 0} type='button'>
                                        Add to Cart
                        </Button>

                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>

            )}


        </>
    )
}
