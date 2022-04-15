import React from 'react'
import { ArrowForwardRounded, CheckCircle } from '@mui/icons-material'
import './pricing.scss'

function Pricing() {
    return (
        <div className="pricing">
            <h1 className="title">Pricing</h1>
            <p className="description">Our technology is priced to suit your business needs</p>
            <div className="main-price">
                <h2 className="store">Fresh Store</h2>
                <p className="tag">Popular</p>
                <h4>Website Only.</h4>
                <div className="fresh-store">
                    <h1 className="price">$99/month paid monthly.</h1>
                    <a href="mailto:hello@freshideas.co.zw?subject=Interested%20in%20the%20Standard%20Medium%20Store%20Package" className="link">
                        <span className="text">Buy freshstore </span><ArrowForwardRounded className='icon'/>
                    </a>
                </div>
                <h5>WHAT'S INCLUDED</h5>
                <div className="benefits">
                    <span className="benefit">
                        <CheckCircle className="icon" /> Online Store
                    </span>
                    <span className="benefit">
                        <CheckCircle className="icon" /> User Accounts
                    </span>
                    <span className="benefit">
                        <CheckCircle className="icon" /> Live Chat
                    </span>
                    <span className="benefit">
                        <CheckCircle className="icon" /> Store Management
                    </span>
                    <span className="benefit">
                        <CheckCircle className="icon" /> Ecocash
                    </span>
                    <span className="benefit">
                        <CheckCircle className="icon" /> 24/7 Support
                    </span>
                    <span className="benefit">
                        <CheckCircle className="icon" /> Unlimited Products
                    </span>
                    <span className="benefit">
                        <CheckCircle className="icon" /> Email Notifications
                    </span>
                    <span className="benefit">
                        <CheckCircle className="icon" /> Free SSL Certificate
                    </span>
                    <span className="benefit">
                        <CheckCircle className="icon" /> Discounts
                    </span>
                </div>
                <div className="brochure">
                    <a href="https://res.cloudinary.com/freshinabox/image/upload/v1613373003/Fresh_Store_Brochure-2021_lrnkeu.pdf">Download Brochure</a>
                </div>
            </div>
            <h1 className="title">Add Ons</h1>
            <div className="additionals">
                <div className="addition">
                    <div className="addon">Fresh Store</div>
                    <div className="addon-price">
                        <span>$49</span> /month paid quarterly
                    </div>
                    <p className="addon-desc">
                        Get the best tools for easy order management for your restaurant
                    </p>
                    <a href="" className="link">
                        <span className="text">Buy Kitchen App </span><ArrowForwardRounded className='icon'/>
                    </a>
                </div>
                <div className="addition">
                    <div className="addon">SMS Notification</div>
                    <div className="addon-price">
                        <span>$49</span> /month paid quarterly
                    </div>
                    <p className="addon-desc">
                        Get faster notifications via SMS each time an order comes in.
                    </p>
                    <a href="" className="link">
                        <span className="text">Buy SMS Notification </span><ArrowForwardRounded className='icon'/>
                    </a>
                </div>
                <div className="addition">
                    <div className="addon">Fresh Logistics</div>
                    <div className="addon-price">
                        <span>$4.99</span> /delivery
                    </div>
                    <p className="addon-desc">
                        Get your orders delivered by our experienced drivers.
                    </p>
                    <a href="" className="link">
                        <span className="text">Buy Fresh Logistics </span><ArrowForwardRounded className='icon'/>
                    </a>
                </div>
                <div className="addition">
                    <div className="addon">Android App</div>
                    <div className="addon-price">
                        <span>$49</span> /month paid quarterly
                    </div>
                    <p className="addon-desc">
                        Reach a lot more customers with your app on the Google Play Store.
                    </p>
                    <a href="" className="link">
                        <span className="text">Buy Android App </span><ArrowForwardRounded className='icon'/>
                    </a>
                </div>
                <div className="addition">
                    <div className="addon">IOS App</div>
                    <div className="addon-price">
                        <span>$49</span> /month paid quarterly
                    </div>
                    <p className="addon-desc">
                        Faster Browsing, App Notifications {'&'} other benefits of a native IOS App.
                    </p>
                    <a href="" className="link">
                        <span className="text">Buy IOS App </span><ArrowForwardRounded className='icon'/>
                    </a>
                </div>
            </div>
            <div className="contact">
                <a href="mailto:hello@freshideas.co.zw?subject=Interested%20in%20the%20Standard%20Medium%20Store%20Package" className="link">
                    <span className="text">Get in touch with us </span><ArrowForwardRounded className='icon'/>
                </a>
                <p>Talk to us at</p>
                <a href="" className='email'>hello@freshideas.co.zw</a>
            </div>
        </div>
    )
}

export default Pricing