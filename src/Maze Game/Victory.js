import { useNavigate } from 'react-router-dom'
import { Dialog, DialogContent, DialogTitle } from "@material-ui/core"
import Champion from '../assets/image/Champion.png'
import HomeButton from '../assets/image/HomeButton.png'
import ReplayButton from '../assets/image/ReplayButton.png'
import TitleBackground from '../assets/image/TitleBackground.png'
import ContentBackground from '../assets/image/ContentBackground.png'
import './Victory.css'

function Victory(props) {
    const page = useNavigate()
    
    const returnHome = () => {
        page('/')
        window.location.reload()
    }

    return (
    <Dialog open = {props.popUp}>
        <div className = 'Victory_wrapper'>
            <img className = 'Victory_titleBackground' src = {TitleBackground} alt = ''></img>
            <DialogTitle><h1 className = 'Victory_title'>CHIẾN THẮNG</h1></DialogTitle>
            <img className = 'Victory_contentBackground' src = {ContentBackground} alt = '' ></img>
            <DialogContent className = 'Victory_content'>Bạn có muốn chơi lại không?</DialogContent>
            <img className = 'Victory_homeImage' src = {HomeButton} alt = '' onClick = {() => returnHome()}></img>
            <img className = 'Victory_replayImage' src = {ReplayButton} alt = '' onClick = {() => window.location.reload()}></img>
            <img className = 'Victory_championImage' src = {Champion} alt = ''></img>
        </div>
    </Dialog>
    )
}

export default Victory