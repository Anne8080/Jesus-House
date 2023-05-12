import React from 'react'
import './navfoot.scss'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import GrassRoundedIcon from '@mui/icons-material/GrassRounded';
import TodayRoundedIcon from '@mui/icons-material/TodayRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import PinDropRoundedIcon from '@mui/icons-material/PinDropRounded';
import ChurchOutlinedIcon from '@mui/icons-material/ChurchOutlined';
// import {Link} from 'react-router-dom';

const Navfoot = () => {
  return (
    <div className='navfoot'>
        <nav>
            <ul>
                <li><a href='/'><HomeRoundedIcon/> <p>Home</p></a></li>
                <li><a href='/'><ChurchOutlinedIcon/> <p>Services</p></a></li>
                <li><a href='/'><GrassRoundedIcon/> <p>Sow</p></a></li>
                <li><a href='/'><TodayRoundedIcon/> <p>Events</p></a></li>
                <li><a href='/'><InfoRoundedIcon/> <p>About</p></a></li>
                <li><a href='/'><PinDropRoundedIcon/> <p>Connect</p></a></li>
                <li><a href='/'><LocalLibraryOutlinedIcon/> <p>Daily</p></a></li>
                <li><a href='/'><SearchOutlinedIcon/> <p>Search</p></a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navfoot