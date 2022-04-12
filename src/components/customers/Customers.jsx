import React from 'react'
import freshinabox from '../../assets/freshinabox.svg'
import './customer.scss'

function Customers() {
  return (
    <div className="customers">
        <div className="top">
            <h1 className="title">Trusted by some prominent brands</h1>
            <p className="description">
                Our technology has enabled local customers to thrive and boost their online presence.
            </p>
        </div>
        <div className="bottom">
            <div className="customer-group">
                <div className="customer">
                    <div className="left">
                        <img 
                            src={freshinabox}
                            alt="" 
                        />
                    </div>
                    <div className="right">
                        <p>Customer Data</p>
                    </div>
                </div>
                <div className="customer">
                    Customer B
                </div>
            </div>
            <div className="customer-group">
                <div className="customer">
                    Customer C
                </div>
                <div className="customer">
                    Customer D
                </div>
            </div>
        </div>
    </div>
  )
}

export default Customers