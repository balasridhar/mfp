import { mount as dbMount } from 'dashboard/DashboardApp';
import React, {useRef, useEffect} from 'react';

export default () => {
    const ref = useRef(null);

    useEffect(() => {
       dbMount(ref.current);
    }, []);
    
    return <div ref = {ref} />
};