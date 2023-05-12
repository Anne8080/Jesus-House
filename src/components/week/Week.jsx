import React from 'react'
import './week.scss'
import Box from '@mui/material/Box';
import rccg from '../../pics/rccg-logo.png'

const Week = ({title, verse, page, big}) => {
  return (
    <div className='week'>
        <h1>{title}</h1>
        <Box className='df'>
            <div className="left">
                <h2 id={big}>{verse}</h2>
                <p>{page}</p>
            </div>
            <div className="right">
                <img src={rccg} alt="" />
            </div>
        </Box>
    </div>
  )
}

export default Week