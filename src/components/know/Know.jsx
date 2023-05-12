import React from 'react'
import './know.scss'
import rccg from '../../pics/rccg-logo.png'

const Know = () => {
  return (
    <div className="df knowdf">
      <div className='latest know'>
        <div className="lattitle">
            <h1 >Know <span className='gold'>Us</span></h1>
        </div>
        <div className="bottom df">
            <div className="left"><img src={rccg} alt="" /></div>
            <div className="right">
                <h1 className="gold jh">JESUS HOUSE, ABUJA</h1>
                <h1 id='hard'>Pursuing Hard After God</h1>
                <a className='a' href="">HISTORY</a>
            </div>
        </div>
        <br /><br /><br />
      </div>
    </div>
  )
}

export default Know