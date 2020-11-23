import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Product } from '../components/Product'
import { Row, Col } from 'react-bootstrap'
import { Message } from '../components/Message'
import { Loader } from '../components/Loader'
import { listProducts } from '../actions/productActions'

export function Sensors() {
    // const [products, setProducts] = useState([])
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList
    const [value, setValue] = useState('')
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])
    const getValue = (e) => {
        setValue({
            value: e.target.value.toLowerCase()
        })

    }
    var massiv = []
    products.filter((e) => {
        if (e.name.toLowerCase().includes(value.value)) {
            massiv.push(e)
        }
    })
    return (
        <>
            <h1 className='text-center text-capitalize font-weight-bold py-5'>sensorlar </h1>

            <form style={{
                position: 'fixed', top: '-20px', left: '32%', zIndex: '999',
                transform: 'translateX(-50%)', marginTop: '10px', marginBottom: '30px'
            }} className='form'>
                <div className='form-group m-auto'>
                    <input type="text" name="text" className='form-control input-1'
                        placeholder='Maxsulotlarni qidirish' onChange={getValue} />
                    <button type='button'><i className='fas fa-search'></i></button>
                </div>
            </form>
            {loading ? <Loader /> : error ? <Message variant='error'>{error}</Message> : (
                <Row>
                    {
                        massiv.length > 0 ? massiv.slice(18, 26).map(product => (<Col key={product._id} sm='12' md='6' lg='4' xl='3'><Product product={product} /></Col>)) :
                            products.slice(18, 26).map(product => (<Col key={product._id} sm='12' md='6' lg='4' xl='3'><Product product={product} /></Col>))
                    }
                </Row>
            )}

        </>
    )
}
