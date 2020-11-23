import React, { useState, useEffect } from 'react';
import './NewsCard.css';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { TextTrunCate } from 'react-text-truncate'
export function CardExample() {
    const [products, setProducts] = useState([])
    useEffect(() => {

        const fetchProducts = async () => {
            const { data } = await axios.get('/api/products')
            setProducts(data)
        }
        fetchProducts()
    }, [])

    var massivCard = []
    products.slice(0, 4).map(e => {
        massivCard.push(e)
    })
    console.log(massivCard)

    return (
        <div id="news">
            <h1 style={{ textAlign: 'center' }}>Yangi maxsulotlar</h1>
            <div className="card-wrapper">
                {/* ************************************************** */}
                {massivCard.map(element => {
                    return (
                        <div className="card-box">
                            <img src={element.image} alt="rasm" />
                            <h3 className="card-title">{element.name}</h3>
                            <hr />
                            <div className="card-box-info">
                                <p className='description-text'
                                    style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{element.description}</p>
                            </div>
                            <span className="btnMore">
                                <Link to='/robotlar' style={{ color: '#333', textDecoration: 'none', marginRight: '10px', fontSize: '13px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                                    <h3 style={{ marginBottom: '0.153rem', marginRight: '2px' }}>Batafsil</h3>
                                    <i className="fa fa-chevron-right"></i>
                                    <i className="fa fa-chevron-right"></i>
                                </Link>
                            </span>
                            <div className="footer">
                                <span>Yuklangan vaqti </span>
                                <span>21/12/2020</span>
                            </div>
                        </div>
                    )
                })}
                {/* ************************************************* */}
            </div>
        </div>

    )

}
