import React from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";

function App() {
    return (
        <div className="App">
            <Header titleHeader={"NEW HEADER"}/>
            <Body titleBody ={"NEW BODY"}/>
            <Footer titleFooter ={"NEW FOOTER"}/>
        </div>
    );
}

export default App;
