import React, { useState } from "react";
import "../style/Tooltip.css";

const TooltipBar = (props) => {
    let timeout;
    //hooks
    const [active, setActive] = useState(false);

    const show = () => {
        timeout = setTimeout(() => {
            setActive(true);
        }, props.delay || 400);
    };

    const hide = () => {
        clearInterval(timeout);
        setActive(false);
    };

    return (
        <div
            className="TooltipWrapper"
            //onMouse events
            onMouseEnter={show}
            onMouseLeave={hide}
        >
            {props.children}
            {active && (
                <div className={`Tooltip ${props.direction}`}>
                    {props.content}
                </div>
            )}
        </div>
    );
};

export default TooltipBar;
