import { useNavigate } from 'react-router-dom'
import { Dialog, DialogContent, DialogTitle } from "@material-ui/core"
import Skull from '../assets/image/Skull.png'
import HomeButton from '../assets/image/HomeButton.png'
import ReplayButton from '../assets/image/ReplayButton.png'
import TitleBackground from '../assets/image/TitleBackground.png'
import ContentBackground from '../assets/image/ContentBackground.png'
import './Lost.css'

function Lost(props) {
    const page = useNavigate()
    
    const returnHome = () => {
        page('/')
        window.location.reload()
    }

    return (
    <Dialog open = {props.popUp}>
        <div className = 'Lost_wrapper'>
            <img className = 'Lost_titleBackground' src = {TitleBackground} alt = ''></img>
            <DialogTitle><h1 className = 'Lost_title'>THẤT BẠI</h1></DialogTitle>
            <img className = 'Lost_contentBackground' src = {ContentBackground} alt = '' ></img>
            <DialogContent className = 'Lost_content'>Bạn có muốn chơi lại không?</DialogContent>
            <img className = 'Lost_homeImage' src = {HomeButton} alt = '' onClick = {() => returnHome()}></img>
            <img className = 'Lost_replayImage' src = {ReplayButton} alt = '' onClick = {() => window.location.reload()}></img>
            <img className = 'Lost_skullImage' src = {Skull} alt = ''></img>
        </div>
    </Dialog>
    )
}

export default Lost