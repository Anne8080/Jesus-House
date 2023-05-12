import React from 'react'
import './expsingle.scss'

const Expsingle = ({evt, evtitle, explain, date, rccg, time}) => {
  return (
    <div className='expsingle'>
        <div className="top"><img src={rccg} alt="" /></div>
        <div className="bottom">
            <h4>{evt}</h4>
            <h2 className='gold'>{evtitle}</h2>
            <p>{explain}</p>
            <div className="df">
              <h5>{date}</h5>
              <h5>{time}</h5>
            </div>
        </div>
    </div>
  )
}

export default Expsingle