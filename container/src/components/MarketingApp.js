import { mount as marketingMount } from 'marketing/MarketingApp';
import React, {useRef, useEffect} from 'react';

export default () => {
    const ref = useRef(null);

    useEffect(() => {
        marketingMount(ref.current, {
            onNavigate: () => {
                console.log("navigation done !!!");
            },
        });
    });
    
    return <div ref = {ref} />
};