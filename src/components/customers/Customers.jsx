import React from 'react'
import { ArrowForwardRounded } from '@mui/icons-material'
import freshinabox from '../../assets/freshinabox.svg'
import data from './data'
import './customer.scss'

function Customers() {
  return (
    <div className="customers" id="customers">
        <div className="top">
            <h1 className="title">Trusted by some prominent brands</h1>
            <p className="description">
                Our technology has enabled local customers to thrive and boost their online presence.
            </p>
        </div>
        <div className="bottom">
            <div className="customer-group">
                {data.map(customer => (
                    <div key={customer.id} className="customer">
                        <div className="left">
                            <img 
                                src={customer.logo}
                                alt="" 
                            />
                        </div>
                        <div className="right">
                            <p className="title">{customer.title}</p>
                            <p className="category">{customer.category}</p>
                            <p className="description">{customer.description}</p>
                            <a href={customer.link} className="link" target="_blank" rel="noreferrer">
                                <span>{customer.linkText} <ArrowForwardRounded className='icon'/> </span>
                            </a>
                        </div>
                    </div>
                ))}                
            </div>
        </div>
    </div>
  )
}

export default Customers