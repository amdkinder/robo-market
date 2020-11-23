import React, { useState, useEffect } from 'react'

export function Pagination({ showPerpage, OnPaginationChange, total }) {
    const [counter, setCounter] = useState(1)
    const [numberOfButtons, setNumberOfButtons] = useState(Math.ceil(total / showPerpage))
    useEffect(() => {
        const value = showPerpage * counter
        OnPaginationChange(value - showPerpage, value)
    }, [counter])
    const onButtonClick = (type) => {
        if (type === 'prev') {
            if (counter === 1) {
                setCounter(1)
            }
            else {
                setCounter(counter - 1)
            }
        }
        else if (type === 'next') {
            if (numberOfButtons === counter) {
                setCounter(counter)
            }
            else {
                setCounter(counter + 1)
            }
        }
    }

    return (
        <div className='m-auto pt-5'>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item"><a className="page-link" onClick={() => onButtonClick('prev')}>Previous</a></li>
                    {new Array(numberOfButtons).fill("").map((el, index) => (
                        <li className={`page-item ${index + 1 === counter ? 'active' : null}`}>
                            <a className="page-link" onClick={() => setCounter(index + 1)}>{index + 1}</a></li>
                    ))}
                    <li className="page-item"><a className="page-link" onClick={() => onButtonClick('next')}>Next</a></li>
                </ul>
            </nav>

        </div>
    )
}
