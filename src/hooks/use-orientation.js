import React, {useState, useEffect} from 'react';
import {Dimension} from 'react-native';

const useOrientation = () => {
    const [screenInfo, setScreenInfo] = useState(Dimension.get('screen'))

    useEffect(()=>{
        const onChange = (result) => {
            setScreenInfo(result.screen)
        }
        Dimension.addEventListener('')
    })
}