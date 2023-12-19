import React, {StrictMode, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {RecoilRoot} from "recoil";
import "bootstrap/dist/css/bootstrap.min.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <RecoilRoot>
            <Suspense fallback={<div>Загрузка...</div>}>
                <App/>
            </Suspense>
        </RecoilRoot>
    </StrictMode>
);
