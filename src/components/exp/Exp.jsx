import React from 'react'
import './exp.scss'
import Expsingle from '../expsingle/Expsingle'
import building from '../../pics/building.jpg'

const Exp = () => {
  return (
    <div className='latest'>
        <div className="lattitle">
            <h1 >Experience <span className='gold'>God</span></h1>
        </div>
        <div className="down df">
            <Expsingle rccg= {building} evt='Building Dedication' evtitle='Jesus House Building Dedication' explain='You are invited to the Jesus House Church Building Dedication. Ministering: Pastor E.A. Adeboye' date='13th March 2023' time='11:00am' />
            <Expsingle rccg= {building} evt='Building Dedication' evtitle='Jesus House Building Dedication' explain='You are invited to the Jesus House Church Building Dedication. Ministering: Pastor E.A. Adeboye' date='13th March 2023' time='11:00am' />
            <Expsingle rccg= {building} evt='Building Dedication' evtitle='Jesus House Building Dedication' explain='You are invited to the Jesus House Church Building Dedication. Ministering: Pastor E.A. Adeboye' date='13th March 2023' time='11:00am' />
        </div>
    </div>
  )
}

export default Exp