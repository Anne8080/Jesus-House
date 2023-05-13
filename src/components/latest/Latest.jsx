import React from 'react'
import './latest.scss'
import Latestsingle from '../lestestsingle/Latestsingle'
import clean from '../../pics/clean.jpg'
import dig from '../../pics/digging.jpg'
import ppp from '../../pics/ppp.jpg'
import worker from '../../pics/workers.jpg'

const Latest = () => {
  return (
    <div className='latest'>
        <div className="lattitle">
            <h1>Past <span className='gold'>Events</span> </h1>
            <h3>Lastest Programs</h3>
        </div>
        <div className="evet">
            <div className=" df">
                <Latestsingle evt='Sanitation' evtitle='Preparation for Dedication' date='12th May 2023' rccg={clean} />
                <Latestsingle evt='Prayer, Praise and Penticost' evtitle='Faith Clinic' date='11th May 2023' rccg={ppp} />
            </div>
            <div className=" df">
                <Latestsingle evt="Worker's Meeting" evtitle='Discussion' date='10th May 2023' rccg={worker} />
                <Latestsingle evt='Digging Deep Service' evtitle='Book of Romans' date='9th May 2023' rccg={dig} />
            </div>
        </div>
    </div>
  )
}

export default Latest