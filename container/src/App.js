import React, {lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Progress from './components/Progress';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
const DashboardLazy = lazy(() => import('./components/DashboardApp'));

const generateClassName = createGenerateClassName({
    productionPrefix: 'con'
});

export default () => {
    const [isSignedIn, setSignedIn] = useState(false);
    return (
    <BrowserRouter>
        <StylesProvider generateClassName={generateClassName}>
            <div>
                <Header onSignOut = {() => setSignedIn(false)} signedIn={isSignedIn} />
                <Suspense fallback={<Progress />}>
                    <Switch>
                        <Route path="/auth">
                            <AuthLazy onSignIn={() => setSignedIn(true)}/>
                        </Route>
                        <Route path='/dashboard' component={DashboardLazy} />
                        <Route path="/" component={MarketingLazy} />
                    </Switch>
                </Suspense>
            </div>
        </StylesProvider>
    </BrowserRouter>
    );
}