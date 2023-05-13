import React from 'react'
import './latestsingle.scss'
 
const Latestsingle = ({evt, evtitle, date, rccg}) => {
  return (
    <div className='ls df'>
        <div className="left"><img src={rccg} alt="" /></div>
        <div className="right">
            <h3>{evt}</h3>
            <h1 className='gold'>{evtitle}</h1>
            <div className="df">
                <p>{date}</p>
                <a className='a' href="">View</a>
            </div>
        </div>
    </div>
  )
}

export default Latestsingle