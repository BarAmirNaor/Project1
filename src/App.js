import React from "react";
import Tooltip from "./components/Tooltip";
import "./style/App.css";
import ChildCareIcon from '@material-ui/icons/ChildCare';


export default function App() {
    return (
        <div >
            <h1>Hi Genadi </h1>
            <div className="app">

                <Tooltip content="Hi!!!!!" direction="right">
                    Hover me i'm text
                </Tooltip>
            </div>
            <div className="app">
                <Tooltip content="Hello" direction="buttom">
<ChildCareIcon/>
                </Tooltip>
            </div>
        </div>
    );
}
