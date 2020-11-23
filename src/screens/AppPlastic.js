import React, { Component } from "react";
import Card from "react-credit-cards";
import './PlasticCard.css'
import axios from 'axios'
import {
    formatCreditCardNumber,
    formatCVC,
    formatExpirationDate,
    formatFormData
} from "../components/utils";

import "react-credit-cards/es/styles-compiled.css";
import { TextField } from "@material-ui/core";

export class AppPlastic extends React.Component {
    state = {
        number: "",
        name: "",
        expiry: "",
        cvc: "",
        issuer: "",
        focused: "",
        formData: null
    };


    handleCallback = ({ issuer }, isValid) => {
        if (isValid) {
            this.setState({ issuer });
        }
    };

    handleInputFocus = ({ target }) => {
        this.setState({
            focused: target.name
        });
    };

    handleInputChange = ({ target }) => {
        if (target.name === "number") {
            target.value = formatCreditCardNumber(target.value);
        } else if (target.name === "expiry") {
            target.value = formatExpirationDate(target.value);
        } else if (target.name === "cvc") {
            target.value = formatCVC(target.value);
        }

        this.setState({ [target.name]: target.value });


    };

    handleSubmit = e => {
        e.preventDefault();
        const { issuer } = this.state;
        const formData = [...e.target.elements]
            .filter(d => d.name)
            .reduce((acc, d) => {
                acc[d.name] = d.value;
                return acc;
            }, {});

        this.setState({ formData });
        this.form.reset();

        console.log(this.state)
        axios.post('http://jsonplaceholder.typicode.com/posts', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    };

    render() {

        const { name, number, expiry, focused, issuer, formData, cvc } = this.state;

        return (
            <div key="Payment">
                <div className="App-payment">
                    <h1 className='text-center font-weight-bold py-5'><i class="fas fa-money-check-alt" style={{ margin: '0 5px' }}></i>To'lovni amalga oshirish</h1>

                    <Card
                        number={number}
                        name={name}
                        expiry={expiry}
                        cvc={cvc}
                        focused={focused}
                        callback={this.handleCallback}
                    />

                    <div className='container'>
                        <form method='POST' ref={c => (this.form = c)} onSubmit={this.handleSubmit}>
                            <div className='row'>
                                <div className='col-lg-6 col-12 col-md-12 col-sm-12'>
                                    <div className="form-group">
                                        <TextField
                                            type="tel"
                                            name="number"
                                            className="form-control"
                                            label="Karta raqamini kiriting"
                                            pattern="[\d| ]{16,22}"
                                            required
                                            variant='outlined'
                                            value={number}
                                            onChange={this.handleInputChange}
                                            onFocus={this.handleInputFocus}
                                        />

                                    </div>
                                </div>

                                <div className='col-lg-6 col-12 col-sm-12 col-md-12'>
                                    <div className="form-group">
                                        <TextField
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            label="F.I.O"
                                            required
                                            variant='outlined'
                                            value={name}
                                            onChange={this.handleInputChange}
                                            onFocus={this.handleInputFocus}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <TextField
                                        type="text"
                                        name="expiry"
                                        className="form-control input-new"
                                        label="Karta muddatini kiriting"
                                        pattern="\d\d/\d\d"
                                        required
                                        variant='outlined'
                                        value={expiry}
                                        onChange={this.handleInputChange}
                                        onFocus={this.handleInputFocus}
                                    />
                                </div>
                                <div className="col-lg-6 col-sm-12 col-md-12">
                                    <TextField

                                        type="text"
                                        name="cvc"
                                        className="form-control input-new"
                                        label="CVC"
                                        pattern="\d{3,4}"
                                        required
                                        variant='outlined'
                                        value={cvc}
                                        onChange={this.handleInputChange}
                                        onFocus={this.handleInputFocus}
                                    />
                                </div>
                            </div>
                            <input type="hidden" name="issuer" value={issuer} />
                            <div className="form-actions d-flex justify-content-center">
                                <button className="btn btn-primary w-50 btn-block mt-5">To'lovni amalga oshirish</button>
                            </div>
                        </form>
                        {formData && (
                            <div className="App-highlight">
                                {formatFormData(formData).map((d, i) => (
                                    <div key={i}>{d}</div>
                                ))}
                            </div>
                        )}

                    </div>
                </div>

            </div>
        );
    }
}
