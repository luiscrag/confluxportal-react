import * as React from "react";
import "../../styles/Badge.css";

const Badge = ({text, color}) => {
    return (
        <div className="Badge">
            <div className="Dot" style={{ backgroundColor: color }}></div>
            <span>
                <strong>{text}</strong>
            </span>
        </div>
    );
};

export default Badge;