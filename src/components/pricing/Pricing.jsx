import React from 'react'
import { ArrowForwardRounded } from '@mui/icons-material'
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
                  <a href="" className="link">
                      <span className="text">Buy freshstore </span><ArrowForwardRounded className='icon'/>
                  </a>
              </div>
          </div>

      </div>
  )
}

export default Pricing