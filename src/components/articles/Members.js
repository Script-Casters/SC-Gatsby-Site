import React from "react";
import {Page} from 'react-pdf';
import {Document} from 'react-pdf/dist/entry.webpack';
import {useState, useEffect} from 'react';
import { window } from 'browser-monads';


export const pageNum = 1;

const Members = () => {
    let scale = useWindowDimensions();
    return (<div>
        <h2 className="major">Members</h2>
    </div>)
};


const getWindowDimensions = () => {
    const {innerWidth: width, innerHeight: height} = window;
    return {
        width,
        height
    };
};

const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    let scale;

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (windowDimensions.width < 500) {
        scale = 0.5;
    } else {
        scale = 0.9
    }

    return scale;
};

export default Members;
