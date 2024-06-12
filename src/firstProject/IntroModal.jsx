import React from 'react'
import './css/IntroModal.css'

const IntroModal = (props) => {

    // intro modal colse handler
    const modalClickCloseHandler = () => {
        console.log('intro modal btn clicked!');

        props.modalShow(false);

    };

    return (
        <div className="modal_BG" onClick={modalClickCloseHandler}>
            <div className="intro_modal">
                <img src= "../resources/pjt_game/imgs/introModalIMG.jpg" />
            </div>
        </div>
    )
}

export default IntroModal