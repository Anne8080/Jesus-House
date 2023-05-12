import React from 'react'
import './home.scss'
import Navfoot from '../../components/navfoot/Navfoot'
import Slide from '../../components/slide/Slide'
import Week from '../../components/week/Week'
import Latest from '../../components/latest/Latest'
import Sow from '../../components/sow/Sow'
import Exp from '../../components/exp/Exp'
import Know from '../../components/know/Know'
import Devotion from '../../components/devotion/Devotion'

const Home = () => {
  return (
    <div>
        <Slide/>
        <Week title='Verse of the Week' verse='"For God so loved the world, that he gave his only begotten son, that whosoever believeth in Him shall not perish, but have everlasting life."' page='John 3:16' />
        <Latest/>
        <Week title='Book of the Month' verse='Romans' page='1-11' big='big'/>
        <Sow/>
        <Week title='Word of the Week' verse='"Father, what would You have me do?"' />
        <Exp/>
        <Devotion/>
        <Know/>
        <Navfoot/>
    </div>
  )
}

export default Home