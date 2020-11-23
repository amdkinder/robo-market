import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Product } from '../components/Product'
import './ProductScreen.css'
import { useDispatch, useSelector } from 'react-redux'
import { Pagination } from '../components/Pagination'
import { listProducts } from '../actions/productActions'
import { Message } from '../components/Message'
import { Loader } from '../components/Loader'
import './HomeScreen.css'


export function HomeScreen() {
    const [value, setValue] = useState('')
    const [showPerpage, setShowPerPage] = useState(12)
    const [pagination, setPagination] = useState({
        start: 0,
        end: showPerpage
    })
    const OnPaginationChange = (start, end) => {
        setPagination({ start: start, end: end })
    }

    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList
    // const [getGet, setGetGet] = useState([])
    useEffect(() => {
        //     axios.get("https://jsonplaceholder.typicode.com/photos")
        //         .then(res => {
        //             setGetGet(res.data)
        //         })
        //         .catch(error => { console.log(error) })
        dispatch(listProducts())
    }, [dispatch])
    // console.log(getGet)




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
            <h1 className='text-capitalize font-weight-bold text-center mt-3'
                style={{ paddingTop: '50px', paddingBottom: '30px' }}>bizning maxsulotlar</h1>
             {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> :
                <Row>

                    {
                        massiv.length > 0 ? massiv.slice(pagination.start, pagination.end).map(product => (<Col key={product._id} sm='12' md='6' lg='4' xl='3'><Product product={product} /></Col>)) :
                            products.slice(pagination.start, pagination.end).map(product => (<Col key={product._id} sm='12' md='6' lg='4' xl='3'><Product product={product} /></Col>))
                    }
                    <Pagination showPerpage={showPerpage} key={products._id}
                        OnPaginationChange={OnPaginationChange} total={products.length} />

                </Row>
            }
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


        </>
    )
}
