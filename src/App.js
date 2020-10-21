import React from "react";
import Tooltip from "./components/Tooltip";
import "./App.css";
import ChildCareIcon from '@material-ui/icons/ChildCare';

export default function App() {
    return (
        <div className="App">
            <h1>Bar's tooltip </h1>
            <div className="example-wrapper">
                <Tooltip content="MAZAL TOV!" direction="right">
<ChildCareIcon/>
                </Tooltip>
            </div>
        </div>
    );
}
