import { mount as authMount } from 'auth/AuthApp';
import React, {useRef, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const { onParentNavigate } = authMount(ref.current, {
            initialPath: history.location.pathname,
            onNavigate: ({ pathname: nextPathname }) => {
                const { pathname } = history.location;
                if (pathname !== nextPathname) {
                    history.push(nextPathname);
                }
            },
        });

        history.listen(onParentNavigate);
    });
    
    return <div ref = {ref} />
};