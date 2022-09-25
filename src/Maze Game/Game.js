import './Game.css'
import Guide from './Guide'
import Lost from './Lost'
import Victory from './Victory'
import { useState } from 'react'
import NavBackgroundLeft from '../assets/image/NavBackgroundLeft.jpg'
import NavBackgroundRight from '../assets/image/NavBackgroundRight.jpg'
import Ground from '../assets/image/Ground.jpg'
import Wall from '../assets/image/Wall.png'
import Knight from '../assets/image/Knight.png'
import FinalBoss from '../assets/image/FinalBoss.png'
import Troop1 from '../assets/image/Troop1.png'
import Troop2 from '../assets/image/Troop2.png'
import Troop3 from '../assets/image/Troop3.png'

const maze = []
const finalBoss = 0
const finalBossPower = 180
const powerPlace = []
const troops = [30, 49, 17, 46, 3, 51, 7, 1, 40, 33, 20, 8]
const checkTroop = []
const obstacles = [6, 10, 11, 12, 14, 22, 24, 25, 26, 34, 36, 37, 38, 39, 42, 50, 52, 53, 54, 60]
const checkObstacle = []
const troopPower = [3, 3, 3, 3, 3, 15, 15, 15, 15, 60, 60, 60]

for(var i=0; i<64; i++) {
    maze[i]=3
    checkTroop[i] = false
    powerPlace[i] = 0
    for(var j=0; j<troops.length; j++) {
        if(i===troops[j]) {
            checkTroop[i] = true
            powerPlace[i] = troopPower[j]
        }
    }
    for(var k=0; k<obstacles.length; k++) {
        if(i===obstacles[k]) {
            checkObstacle[i] = true
        }
    }
}

function Game() {

    const [hero, setHero] = useState(63)
    const [attack, setAttack] = useState(3)
    const [showFinalBoss, setShowFinalBoss] = useState(true)
    const [showGuide, setShowGuide] = useState(false)
    const [showLost, setShowLost] = useState(false)
    const [showVictory, setShowVictory] = useState(false)

    const handleUp = () => {
        if(hero-8===finalBoss) {
            if(attack>=finalBossPower) {
                setHero(prev => prev-8)
                setShowVictory(true)
                setShowFinalBoss(false)
            }
            else {
                setShowLost(true)
            }
        }

        else {
        if(hero>=8 && !checkObstacle[hero-8]) {
            if(!checkTroop[hero-8]) {
                setHero(prev => prev-8)
            }
            else {
                if(attack >= powerPlace[hero-8]) {
                    setAttack(prev => prev+powerPlace[hero-8])
                    setHero(prev => prev-8)
                    checkTroop[hero-8] = false
                }
                else {
                    setShowLost(true)
                }
            }
        }
        }
    } 

    const handleDown = () => {
        if(hero<=55 && !checkObstacle[hero+8]) {
            if(!checkTroop[hero+8]) {
                setHero(prev => prev+8)
            }
            else {
                if(attack >= powerPlace[hero+8]) {
                    setAttack(prev => prev+powerPlace[hero+8])
                    setHero(prev => prev+8)
                    checkTroop[hero+8] = false
                }
                else {
                    setShowLost(true)
                }
            }
        }
    }
    
    const handleLeft = () => {
        if(hero-1===finalBoss) {
            if(attack>=finalBossPower) {
                setHero(prev => prev-1)
                setShowVictory(true)
                setShowFinalBoss(false)
            }
            else {
                setShowLost(true)
            }
        }
        else {
        if(hero%8!==0 && !checkObstacle[hero-1]) {
            if(!checkTroop[hero-1]) {
                setHero(prev => prev-1)
            }
            else {
                if(attack >= powerPlace[hero-1]) {
                    setAttack(prev => prev+powerPlace[hero-1])
                    setHero(prev => prev-1)
                    checkTroop[hero-1] = false
                }
                else {
                    setShowLost(true)
                }
            }
        }
        }
    }

    const handleRight = () => {
        if(hero%8!==7 && !checkObstacle[hero+1]) {
            if(!checkTroop[hero+1]) {
                setHero(prev => prev+1)
            }
            else {
                if(attack >= powerPlace[hero+1]) {
                    setAttack(prev => prev+powerPlace[hero+1])
                    setHero(prev => prev+1)
                    checkTroop[hero+1] = false
                }
                else {
                    setShowLost(true)
                }
            }
        }
    }

    return (
        <>
        <Guide popUp = {showGuide} setPopUp = {setShowGuide}></Guide>
        <div className = 'Game_wrapper' onKeyDown = {(e) => {
            if(e.key==='ArrowLeft') handleLeft()
            if(e.key==='ArrowUp') handleUp()
            if(e.key==='ArrowRight') handleRight()
            if(e.key==='ArrowDown') handleDown()
        }} tabIndex = '0'>
            <img className = 'Game_groundFirst' src = {Ground} alt = ''></img>
            <img className = 'Game_groundSecond' src = {Ground} alt = ''></img>
            <img className = 'Game_groundThird' src = {Ground} alt = ''></img>
            <img className = 'Game_groundFourth' src = {Ground} alt = ''></img>
            <img className = 'Game_navBackgroundLeft' src = {NavBackgroundLeft} alt = ''></img>   
            <img className = 'Game_navBackgroundRight' src = {NavBackgroundRight} alt = ''></img>
            <div className = 'Game_maze'>
                {maze.map((element, index) => (
                    <div className = 'Game_square'>
                        {attack<15 && index===hero && (<img className = 'Game_knight1' src = {Knight} alt = ''></img>)}
                        {15<=attack && attack<60 && index===hero && (<img className = 'Game_knight2' src = {Knight} alt = ''></img>)}
                        {60<=attack && attack<180 && index===hero && (<img className = 'Game_knight3' src = {Knight} alt = ''></img>)}
                        {attack>=180 && index===hero && (<img className = 'Game_knight4' src = {Knight} alt = ''></img>)}
                        {index===finalBoss && showFinalBoss && (<img className = 'Game_finalBoss' src = {FinalBoss} alt = ''></img>)}
                        {powerPlace[index]===3 && checkTroop[index] && (<img className = 'Game_troopImage1' src = {Troop1} alt = ''></img>)}
                        {powerPlace[index]===15 && checkTroop[index] && (<img className = 'Game_troopImage2' src = {Troop2} alt = ''></img>)}
                        {powerPlace[index]===60 && checkTroop[index] && (<img className = 'Game_troopImage3' src = {Troop3} alt = ''></img>)}
                        {checkObstacle[index] && (<img className = 'Game_wall' src = {Wall} alt = ''></img>)}
                    </div>
                ))}
            </div>
        </div>
        <Lost popUp = {showLost} setPopUp = {setShowLost}></Lost>
        <Victory popUp = {showVictory} setPopUp = {setShowVictory}></Victory>
        </>
    )
}

export default Game