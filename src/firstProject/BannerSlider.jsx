import React, { useEffect, useRef, useState } from 'react';
import './css/bannerSlider.css';

const BannerSlider = () => {
    const [count, setCount] = useState(0);
    const [transition,setTransition] = useState(0);
    const [intervaldelay, setIntervaldelay] = useState(0);
    const [intervalClear, setIntervalClear] = useState(false); //clear interval 하기 위한 훅

    useInterval(()=>{
        {
            intervalClear? setIntervaldelay(null):setIntervaldelay(0) //intervaldelay에 null값을 줘서 clear interval
        }
        if(count <= -1200){
            setTransition(0)
            setCount(0)
            setIntervaldelay(0)
            
        }else if(count <= 0){
            setTransition(1.0)
            setCount(count => count-400);   
            setIntervaldelay(5000)   
            setIntervalClear(!intervalClear) // intervalClear에 다시 true값을 줘서 intervaldelay에 0값 전달해서 다시 interval실행
        }
        console.log('intervaldelay>>>>>>',intervaldelay)
        
    }, intervaldelay ); //intervaldelay값으로 interval에 delay값 전달

    // useEffect(()=>{
    //         console.log('useEffect>>>><<<<<<<<<')
    
    //     return () => {//끝날때 한번
    //         setIntervalClear(false)
    //         console.log('useEffect>>>>setIntervalClear')
    //     }

    // });

    //hook
    function useInterval(callback, delay) {
        const savedCallback = useRef();
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);
    
        useEffect(() => {
            function tick() {
                savedCallback.current();
            }
            if (delay !== null) {
                let intervalId = setInterval(tick, delay);
                console.log('savedCallback.current',savedCallback.current)
                return () => {clearInterval(intervalId)     ///delay값이 null이면 clear interval 실행
                    console.log('<<<clearInterval>>>')};    ///clear interval 확인!
            }
        }, [delay]);
    }

    //function
    

    return (
        <div className='banner_slider_wrap'>
            <ul className="banner_slider" style={{left:`${count}px`,transition: `${transition}s`}}>
                <li><img src="./resources/pjt_game/imgs/slide_banner01.jpg" alt="" /></li>
                <li><img src="./resources/pjt_game/imgs/slide_banner02.jpg" alt="" /></li>
                <li><img src="./resources/pjt_game/imgs/slide_banner03.jpg" alt="" /></li>
                <li><img src="./resources/pjt_game/imgs/slide_banner01.jpg" alt="" /></li>
            </ul>
        </div>
    )
}

export default BannerSlider;