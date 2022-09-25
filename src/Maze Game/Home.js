import './Home.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../assets/image/Logo.png'
import Title from '../assets/image/Title.gif'
import NavBackgroundLeft from '../assets/image/NavBackgroundLeft.jpg'
import NavBackgroundRight from '../assets/image/NavBackgroundRight.jpg'

function Home() {   
    const page = useNavigate()
    const [close, setClose] = useState(false)

    const delayNav = () => {
        setTimeout(() => {
            page('/Game')
        }, 5000)
        setClose(true)
    }

    return (
        <>
        <div className = 'Home_wrapper'>
            {close && (<img className = 'Home_navBackgroundLeft' src = {NavBackgroundLeft} alt = ''></img>)}
            {close && (<img className = 'Home_navBackgroundRight' src = {NavBackgroundRight} alt = ''></img>)}
            <div className = 'Home_gameInfo'>
                <img className = 'Home_gameLogo' src = {Logo} alt = ''></img>
                <img className = 'Home_gameTitle' src = {Title} alt = ''></img>
            </div>
            <button className = 'Home_button' onClick = {() => delayNav()}>BẮT ĐẦU</button>
        </div>
        </>
    )
}

export default Home