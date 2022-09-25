import { Dialog, DialogContent, DialogTitle } from "@material-ui/core"
import './Guide.css'

function Guide(props) {
    return (
    <Dialog className = 'Guide_dialog' open = {props.popUp}>
        <div className = 'Guide_popUp'>
        <DialogTitle className = "Guide_dialogTitle">
            <h1 className = 'Guide_victoryTitle'>Hướng dẫn</h1>
        </DialogTitle>
        <DialogContent>
            <h2 className = 'Guide_replayTitle'>.....</h2>
        </DialogContent>
        <br/> 
            <button className = 'Guide_yesButton' onClick = {() => {window.location.reload()}}>Có</button>
            <button className = 'Guide_noButton' onClick = {() => {props.setPopUp(false)}}>Không</button>
        </div>
    </Dialog>
    )
}

export default Guide