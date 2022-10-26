import React, {lazy, Suspense} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Progress from './components/Progress';

const marketingLazy = lazy(() => import('./components/MarketingApp'));
const authLazy = lazy(() => import('./components/AuthApp'));

const generateClassName = createGenerateClassName({
    productionPrefix: 'con'
});

export default () => {
    return (
    <BrowserRouter>
        <StylesProvider generateClassName={generateClassName}>
            <div>
                <Header />
                <Suspense fallback={<Progress />}>
                    <Switch>
                        <Route path="/auth" component={authLazy} />
                        <Route path="/" component={marketingLazy} />
                    </Switch>
                </Suspense>
            </div>
        </StylesProvider>
    </BrowserRouter>
    );
}