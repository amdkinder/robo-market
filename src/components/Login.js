import React, { Component } from 'react'
import { TextField } from '@material-ui/core'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Login.css'
export class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: '',
            title: '',
            body: '',
            checker: false,
            unchecker: true
        }
    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitHandler = e => {
        e.preventDefault();
        console.log(this.state)
        axios.post('http://jsonplaceholder.typicode.com/posts', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
        this.setState({
            checker: true,
            unchecker: false
        })
        console.log(this.state.checker)
    }
    render() {
        const { userId, title, body } = this.state
        return (
            <div className='container'>
                <h1 className='text-center font-weight-bold mt-3'>Sign Up</h1>

                <form method='POST' onSubmit={this.submitHandler}>
                    <div className='form-group'>
                        <TextField
                            label="First Name"
                            type="text"
                            className='form-control w-50'
                            name='userId'
                            required
                            value={userId}
                            variant="outlined"
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div className='form-group'>
                        <TextField
                            label="Region"
                            type="text"
                            name="title"
                            required
                            value={title}
                            className='form-control w-50'
                            variant="outlined"
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div className='form-group'>
                        <TextField
                            label="Mobile Number"
                            type="text"
                            name="body"
                            required
                            value={body}
                            className='form-control w-50'
                            variant="outlined"
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div className='form-group' style={{ position: 'relative', left: '-10%' }}>
                        <button
                            type='submit'
                            className='btn  mt-3'
                            onClick={this.submitHandler}
                            disabled={this.state.checker}
                        >
                            Continue
                       </button>
                    </div>
                    <Link to='/plastic' style={{ position: 'relative', left: '47%', top: '-55px' }}>
                        <button
                            className='btn-cart'
                            disabled={this.state.unchecker}
                        >
                            Karta orqali to'lash
                            </button>
                    </Link>
                </form>
            </div>
        )
    }
}
